import React, { useRef, useEffect, useMemo } from "react";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import helvetikerFont from "three/examples/fonts/helvetiker_regular.typeface.json";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";

// Logo imports
import reactLogo from "@/assets/logos/reactLogo.svg";
import jsLogo from "@/assets/logos/jsLogo.png";
import nodeLogo from "@/assets/logos/nodeLogo.svg";
import csharpLogo from "@/assets/logos/csharpLogo.svg";
import dotnetLogo from "@/assets/logos/dotnetLogo.svg";
import githubLogo from "@/assets/logos/githubLogo.svg";
import htmlLogo from "@/assets/logos/htmlLogo.svg";
import npmLogo from "@/assets/logos/npmLogo.svg";
import tailwindLogo from "@/assets/logos/tailwindLogo.svg";
import azureLogo from "@/assets/logos/azureLogo.svg";
import typescriptLogo from "@/assets/logos/typescriptLogo.svg";
import gitLogo from "@/assets/logos/gitLogo.svg";


interface Item {
  text?: string;
  logo?: string;
  size?: number;
}

interface TextOrLogoProps {
  position: [number, number, number];
  text?: string;
  logo?: string;
  size?: number;
  onHover?: () => void;
}

interface RotatingGlobeProps {
  items: Item[];
  radius?: number;
}

// Function to generate spherical positions
const generateSpherePositions = (count: number, radius: number): [number, number, number][] => {
  return Array.from({ length: count }).map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;

    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    ];
  });
};

// Helper function to load textures or SVGs
const loadLogo = (logo: string, ref: React.RefObject<THREE.Group>, size: number) => {
  if (logo.endsWith(".svg")) {
    new SVGLoader().load(
      logo,
      (data) => {
        const group = new THREE.Group();
        data.paths.forEach((path) => {
          const material = new THREE.MeshBasicMaterial({ color: path.color || 0xffffff, transparent: true, side: THREE.DoubleSide });
          const shapes = SVGLoader.createShapes(path);
          shapes.forEach((shape) => {
            const geometry = new THREE.ShapeGeometry(shape);
            group.add(new THREE.Mesh(geometry, material));
          });
        });

        const box = new THREE.Box3().setFromObject(group);
        const scale = size / Math.max(box.max.x - box.min.x, box.max.y - box.min.y);
        group.scale.set(scale, scale, scale);

        ref.current?.add(group);
      },
      undefined,
      (error) => console.error("Error loading SVG:", error)
    );
  } else {
    new THREE.TextureLoader().load(logo, (texture) => {
      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });

      const aspectRatio = texture.image.width / texture.image.height;
      const width = size * aspectRatio;
      const height = size;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(width, height, 1);
      ref.current?.add(mesh);
    });
  }
};

// Component to render text or logo
const TextOrLogo: React.FC<TextOrLogoProps> = ({ position, text, logo, size = 2, onHover }) => {
  const ref = useRef<THREE.Group>(null);

  const font = useMemo(() => new FontLoader().parse(helvetikerFont), []);


  useEffect(() => {
    if (logo && ref.current) {
      loadLogo(logo, ref, size);
    }
  }, [logo, size]);

  return (
    <group position={position} ref={ref} onPointerOver={onHover}>
      {text && (
        <primitive object={new TextGeometry(text, { font, size: 0.5, depth: 0.2 })}>
          <meshStandardMaterial color="blue" />
        </primitive>
      )}
    </group>
  );
};

// Main rotating globe component
const RotatingGlobe: React.FC<RotatingGlobeProps> = ({ items, radius = 5 }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = elapsed * 0.1;
  });

  const positions = useMemo(() => generateSpherePositions(items.length, radius), [items.length, radius]);

  return (
    <group ref={groupRef}>
      {items.map((item, idx) => {
        const { text, logo, size } = item;

        // Memoize the logo and size values
        const memoizedItem = useMemo(
          () => ({
            position: positions[idx],
            text,
            logo,
            size,
          }),
          [positions[idx], text, logo, size]
        );

        return (
          <TextOrLogo
            key={idx}
            position={positions[idx]}
            text={memoizedItem.text}
            logo={memoizedItem.logo}
            size={memoizedItem.size}
            onHover={() => console.log(`Hovered on: ${item.text || item.logo}`)}
          />
        );
      })}
    </group>
  );
};

const logos = {
    react: reactLogo,
    javascript: jsLogo,
    node: nodeLogo,
    csharp: csharpLogo,
    dotnet: dotnetLogo,
    github: githubLogo,
    html: htmlLogo,
    npm: npmLogo,
    tailwind: tailwindLogo,
    azure: azureLogo,
    typescript: typescriptLogo,
    git: gitLogo,
};

interface GlobeProps {
  radius?: number;
}

const Globe: React.FC<GlobeProps> = ({ radius = 6 }) => {
  const items: Item[] = [
    { logo: logos.javascript, size: 2 },
    { logo: logos.node, size: 2 },
    { logo: logos.react, size: 2 },
    { logo: logos.csharp, size: 2 },
    { logo: logos.dotnet, size: 3 },
    { logo: logos.github, size: 2 },
    { logo: logos.html, size: 2 },
    { logo: logos.npm, size: 1 },
    { logo: logos.tailwind, size: 3 },
    { logo: logos.azure, size: 1 },
    { logo: logos.typescript, size: 1 },
    { logo: logos.git, size: 2 },
  ];

  return (
    <Canvas style={{ height: "100vh", background: "#1C1C1C" }} camera={{ fov: 60, position: [0, 0, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[-5, -5, -5]} intensity={1} />
      <RotatingGlobe items={items} radius={radius} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

export default Globe;


import Globe from "../../components/globe/Globe";

import parisprof from "../../assets/profile/parisprof.jpg";
import lego from "../../assets/textsvg/lego.svg";

export default function Home() {
  let radius = 5.5;
  if (window.innerWidth < 768) {
    radius = 4.5;
  }

  return (
    <div className="md:flex px-4 max-md:flex-col">
      <div className="md:w-1/3 flex-col max-w-[400px] m-auto">
        <h1 className="text-4xl mb-6">
          My name is
          <span>
            <p className="text-blue-500 mt-4 text-6xl font-mono font-bold">
              Paris Cabrera
            </p>
          </span>
        </h1>
        <div className="m-auto flex max-w-[400px]">
          <img
            src={parisprof}
            alt="Paris Cabrera"
            className="rounded-lg w-full"
          />
        </div>
        <div className="mt-14">
          <h2 className="text-2xl mt-4 leading-9">
            I am a
            <span>
              <p className="text-orange-500 underline decoration-wavy font-mono">
                {` full-stack developer `}
              </p>
            </span>
            with a passion for creating web applications. Let's build
            <span>
              {" "}
              {<img src={lego} alt="Paris Cabrera" className="w-12 inline" />}
            </span>
            something amazing together!
          </h2>
        </div>
      </div>

      {/* Technologies Globe Component */}
      <div className="relative flex md:w-2/3 text-center">
        <Globe radius={radius} />
        <h3 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[30px] text-white text-4xl">
          I am proficient with these technologies...
        </h3>
      </div>
    </div>
  );
}

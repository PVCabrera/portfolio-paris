import Globe from "../../components/globe/Globe";

import parisprof from "@/assets/profile/parisprof.jpg";
import lego from "@/assets/svg-vectors/lego.svg";
import resume from "@/assets/profile/resume.png";

export default function Home() {
  let radius = 5.5;
  if (window.innerWidth < 768) {
    radius = 4.5;
  }

  return (
    <>
      <div className="container lg:mx-auto md:px-4 w-full">
        <div className="md:flex">
          <div className="xl:w-1/3 w-3/4 flex-col m-auto">
            <h1 className="text-4xl mb-6">
              My name is
              <span>
                <p className="text-blue-500 mt-4 lg:text-6xl font-mono font-bold">
                  Paris Cabrera
                </p>
              </span>
            </h1>
            <div className="m-auto flex max-w-[500px]">
              <img
                src={parisprof}
                alt="Paris Cabrera Headshot"
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
                  {
                    <img
                      src={lego}
                      alt="Paris Cabrera"
                      className="w-12 inline"
                    />
                  }
                </span>
                something amazing together!
              </h2>
            </div>
          </div>

          {/* Technologies Globe Component */}
          <div className="relative flex md:w-3/5">
            <Globe radius={radius} />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:px-4 px-10 w-full">
              <h3 className="text-white lg:text-5xl text-3xl">
                I am proficient with these technologies...
              </h3>
            </div>
          </div>
        </div>
        <div className="flex p-6 bg-stone-800 rounded-lg m-10 pb-20 px-10">
          <div className="mt-12 lg:space-x-10">
            <h4 className="lg:text-6xl text-4xl font-serif mb-6 lg:ml-10">{`My Resume`}</h4>
            <img src={resume} alt="Paris Cabrera Resume" className="lg:max-w-[65vw]" />
          </div>
        </div>
      </div>
    </>
  );
}

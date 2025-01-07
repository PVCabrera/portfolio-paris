import Globe from "../../components/globe/globe";

import parisprof from "../../assets/profile/parisprof.jpg";
import lego from "../../assets/textsvg/lego.svg";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/3 m-4 flex-col">
        <h1 className="text-4xl px-8 mb-6">
          My name is
          <span>
            <p className="text-blue-500 mt-4 text-6xl">Paris Cabrera</p>
          </span>
        </h1>
        <div className="m-auto flex max-w-[400px]">
          <img
            src={parisprof}
            alt="Paris Cabrera"
            className="rounded-lg w-full"
          />
        </div>
        <div className="mt-6 text-center border-4 rounded-lg p-6 ">
          <h2 className="text-3xl mt-4">
            I am a<span className="text-blue-500"> full stack developer </span>
            with a passion for creating web applications. Let's build
            <span>
              {" "}
              {<img src={lego} alt="Paris Cabrera" className="w-12 inline" />}
            </span>
            something amazing together!
          </h2>
        </div>

        {/* technologies globe component */}
      </div>
      <h3 className="text-2xl"></h3>
      <div className="relative flex w-2/3 text-center">
        <Globe />
        <h3 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-2xl text-white text-4xl">
          Proficient with ...
        </h3>
      </div>
    </div>
  );
}

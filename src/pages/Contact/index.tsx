import linkedin from "../../assets/textsvg/linkedin.svg";

export default function Contact() {
  return (
    <div className="flex h-screen justify-center items-center overflow-hidden">
      <div className="text-center">
        <h1 className="text-4xl">Contact Me</h1>
        <p className="text-lg mt-4">
          You can reach me at
          <a href="mailto:paris.cabrera218@gmail.com" className="text-blue-500">
            {" paris.cabrera218@gmail.com"}
          </a>
        </p>
        <p className="text-lg mt-4">
          You can also find me on
          <a
            href="https://www.linkedin.com/in/paris-cabrera/"
            className="text-blue-500"
          >
            {" LinkedIn"}
            <span>
              {" "}
              {<img src={linkedin} alt="Paris Cabrera" className="w-8 inline mb-2" />}
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

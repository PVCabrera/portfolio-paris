import { Link } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 right-8 w-full z-50 py-4 bg-[#1C1C1C]">
        <div className="flex justify-center lg:justify-end lg:w-4/5 items-center space-x-12 font-mono px-4">
          <h1 className="text-xl">
            <Link
              to="/"
              className="text-blue-500 hover:underline hover:text-white"
            >
              Home
            </Link>
          </h1>
          <h1 className="text-xl">
            <Link
              to="/contact"
              className="text-blue-500 hover:underline hover:text-white"
            >
              Contact
            </Link>
          </h1>
          <h1 className="text-xl">
            <Link
              to="/projects"
              className="text-blue-500 hover:underline hover:text-white"
            >
              Projects
            </Link>
          </h1>
        </div>
      </nav>
      {/* Page Content */}
      <div className="pt-24">{children}</div> {/* Push content below navbar */}
    </div>
  );
};

export default Layout;

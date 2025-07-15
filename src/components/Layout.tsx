import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation(); // Get current location

  // Function to determine if a link is active
  const isActive = (path: string) =>
    location.pathname === path ? "text-white" : "text-blue-500";

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-[#1C1C1C]">
        <div className="flex justify-center lg:justify-end lg:w-full items-center space-x-12 font-mono lg:px-20 lg:py-10">
          <h1 className="text-xl">
            <Link to="/" className={`${isActive("/")} hover:underline`}>
              Home
            </Link>
          </h1>
          <h1 className="text-xl">
            <Link
              to="/contact"
              className={`${isActive("/contact")} hover:underline`}
            >
              Contact
            </Link>
          </h1>
          <h1 className="text-xl">
            <Link
              to="/projects"
              className={`${isActive("/projects")} hover:underline`}
            >
              Projects
            </Link>
          </h1>
          <h1 className="text-xl">
            <Link
              to="/clients"
              className={`${isActive("/clients")} hover:underline`}
            >
              Clients
            </Link>
          </h1>
        </div>
      </nav>
      {/* Page Content */}
      <div className="pt-36 mb-16">{children}</div>
    </div>
  );
};

export default Layout;

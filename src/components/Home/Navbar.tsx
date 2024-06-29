import { Link } from "react-router-dom";
import { Bars3Icon, SunIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-md">
      <div className="w-full p-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between gap-2 ">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/img-3-8c3c7453.jpg"
              alt=""
              className="w-8 lg:w-12 rounded-full border border-neutral-500"
            />
            <span>INBIO</span>
          </Link>

          {/* row 2 */}
          <div className="flex gap-8 items-center text-neutral-500 ">
            <div className="hidden xl:flex gap-4 2xl:gap-8 items-center">
              <Link to="/">HOME</Link>
              <Link to="/features">FEATURES</Link>
              <Link to="/">PORTFOLIO</Link>
              <Link to="/">RESUME</Link>
              <Link to="/">TESTIMONIAL</Link>
              <Link to="/">CLIENTS</Link>
              <Link to="/">PRICING</Link>
              <Link to="/">OTHERS</Link>
              <Link to="/">BLOG</Link>
            </div>
            <button className="rounded-full bg-[#1D2024] p-2 button-box-shadow2">
              <SunIcon className="h-6 w-6 text-neutral-50" aria-hidden="true" />
            </button>
            <Link
              to="/"
              className="hidden xl:flex px-8 py-4 rounded-md text-secondary-500 button-box-shadow bg-[#202328]"
            >
              CONTACTS
            </Link>
            <button onClick={handleNav} className="xl:hidden">
              <Bars3Icon className="w-6 h-6 text-secondary-500" />
            </button>
          </div>

          {/* mobile menu */}
          <div
            className={`absolute right-0 top-0 bg-neutral-900 text-neutral-50 p-4 min-h-screen w-2/3 ${
              openNav ? "flex" : "hidden"
            }`}
          >
            <div>
              <button onClick={handleNav}>
                <XMarkIcon className="w-6 h-6 my-4 ml-auto" />
              </button>
              <div className="mt-4 flex flex-col space-y-4">
                <Link to="/">HOME</Link>
                <Link to="/features">FEATURES</Link>
                <Link to="/">PORTFOLIO</Link>
                <Link to="/">RESUME</Link>
                <Link to="/">TESTIMONIAL</Link>
                <Link to="/">CLIENTS</Link>
                <Link to="/">PRICING</Link>
                <Link to="/">OTHERS</Link>
                <Link to="/">BLOG</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

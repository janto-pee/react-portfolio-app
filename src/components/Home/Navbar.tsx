import { HashLink as Link } from "react-router-hash-link";
import { Bars3Icon, SunIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import FixedNavbar from "../../utils/FixedNavbar";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { isVisible } = FixedNavbar();

  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav
      id="navbar"
      className={`w-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-md ${
        isVisible ? "fixed top-0 left-0 z-50 shadow-2xl" : "static"
      }`}
    >
      <div className="w-full p-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between gap-2 ">
          <Link smooth to="#navbar" className="flex items-center gap-2">
            <img
              src="/Image-7.png"
              alt=""
              className="w-8 lg:w-12 rounded-full border border-neutral-500"
            />
            <span>Rapid Startup 🔥</span>
          </Link>

          {/* row 2 */}
          <div className="flex gap-8 items-center text-neutral-500 ">
            <div className="hidden xl:flex gap-4 2xl:gap-8 items-center">
              <Link smooth to="#navbar">
                HOME
              </Link>
              <Link smooth to="#skills">
                SKILLS
              </Link>
              <Link smooth to="#portfolio">
                PORTFOLIO
              </Link>
              <Link smooth to="#resume">
                RESUME
              </Link>
              <Link smooth to="#testimonial">
                TESTIMONIAL
              </Link>
              <Link smooth to="#blog">
                BLOG
              </Link>

              <Link smooth to="#footer">
                OTHERS
              </Link>
            </div>
            <button className="rounded-full bg-[#1D2024] p-2 button-box-shadow4">
              <SunIcon className="h-6 w-6 text-neutral-50" aria-hidden="true" />
            </button>
            <Link
              smooth
              to="#contact"
              className="hidden xl:flex px-8 py-4 rounded-md text-secondary-500 button-box-shadow4 bg-[#202328]"
            >
              ✍️ CONTACTS
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
                <Link smooth to="#navbar">
                  HOME
                </Link>
                <Link smooth to="#features">
                  FEATURES
                </Link>
                <Link smooth to="#portfolio">
                  PORTFOLIO
                </Link>
                <Link smooth to="#resume">
                  RESUME
                </Link>
                <Link smooth to="#testimonial">
                  TESTIMONIAL
                </Link>
                <Link smooth to="#blog">
                  BLOG
                </Link>

                <Link smooth to="#footer">
                  OTHERS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

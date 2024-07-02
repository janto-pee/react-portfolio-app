import { Link } from "react-router-dom";
import Icon from "./Icon";
import { navigation } from "../../data/data";

const Footer = () => {
  const newDate = new Date().getFullYear();
  return (
    <div id="footer" className="w-full bg-neutral-900">
      <div className="container py-10 px-4 sm:px-6 lg:px-8 lg:py-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          <div className="col-span-full lg:col-span-1">
            <div className="flex items-center">
              <img
                src="/light-logo-2.png"
                alt=""
                className="h-10 me-5 rounded-full"
              />
              <a
                className="flex-none text-3xl font-semibold text-white"
                href="#"
                aria-label="logo"
              >
                Startup Club
              </a>
            </div>
            <div className="text-white w-48 mt-20">
              <Icon item2 />
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100 uppercase">Product</h4>

            <div className="mt-3 grid space-y-3">
              {navigation.solutions.map((item, index) => (
                <p key={index}>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </p>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100 uppercase">Company</h4>

            <div className="mt-3 grid space-y-3">
              {navigation.support.map((item, index) => (
                <p key={index}>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    {item.name}
                  </a>
                  {item.info && (
                    <span className="inline ms-1 text-xs bg-secondary-500 text-white py-1 px-2 rounded-lg">
                      {item.info}
                    </span>
                  )}
                </p>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="font-semibold text-gray-100 uppercase">
              Stay up to date
            </h4>

            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-secondary-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              {newDate}© Startup Club - <a href="#">Ayobami Adejumo</a> Terms
              Conditions & Policy.
            </p>
          </div>

          <div>
            {navigation.socials.map((item, index) => (
              <a
                key={index}
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary-500 transition-all duration-300"
                href="#"
              >
                <img
                  src={item.info}
                  alt=""
                  color="white"
                  className="text-white"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

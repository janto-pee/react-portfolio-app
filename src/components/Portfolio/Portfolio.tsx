import { HeartIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { Portfoio } from "../../data/data";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-neutral-900">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto py-20 px-4 lg:px-8 xl:px-16 text-center border-b border-black"
      >
        <h3 className="text-secondary-500 text-lg">
          💎 VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h3>
        <h2 className="mt-8 mb-16 uppercase text-neutral-300 text-3xl xl:text-6xl font-semibold ">
          My Portfolio
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
        >
          {Portfoio.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-[#202328] rounded-lg button-box-shadow4 "
            >
              <div className="overflow-hidden">
                <Link to={item.link}>
                  <img
                    src={item.image}
                    className=" w-full  text-secondary-900 rounded-md group-hover:scale-125 transition-all ease-in delay-300"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-between gap-2 my-6">
                <span className="text-secondary-500 text-lg">{item.stack}</span>
                <p className="flex items-center gap-4 text-neutral-400">
                  <HeartIcon className="w-4" />
                  <span>{item.views}</span>
                </p>
              </div>
              <Link to={item.link}>
                <h3 className="my-4 text-left text-2xl text-neutral-400">
                  {item.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

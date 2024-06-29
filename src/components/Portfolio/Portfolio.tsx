import { HeartIcon } from "@heroicons/react/24/outline";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";

const Portfolio = () => {
  const FeaturesList = [
    {
      id: 1,
      image: img1,
      title: "Business Stratagy I throw my self down",
      views: 20,
      stack: "Frontend",
    },
    {
      id: 2,
      image: img2,
      title: "App Development Lorem, ipsum dolor",
      views: 20,
      stack: "Backend",
    },
    {
      id: 3,
      image: img3,
      title: "Business Stratagy orem, ipsum lor od",
      views: 20,
      stack: "CICD",
    },
    {
      id: 4,
      image: img4,
      title: "Mobile App L consec tetur sicing",
      views: 20,
      stack: "IaC",
    },
    {
      id: 5,
      image: img5,
      title: "SEO Optimisation ectetur adip elit re",
      views: 20,
      stack: "Containers",
    },
    {
      id: 6,
      image: img6,
      title: "UX Consulting velit andae debitis",
      views: 20,
      stack: "cloud",
    },
  ];
  return (
    <div className="bg-neutral-900">
      <div className="max-w-7xl mx-auto  py-10 xl:py-20 text-center border-b border-black">
        <h3 className="text-secondary-500 text-lg">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h3>
        <h2 className="mt-8 mb-16 uppercase text-neutral-200 text-2xl xl:text-6xl font-semibold ">
          My Portfolio
        </h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 xl:gap-12">
          {FeaturesList.map((item, index) => (
            <div key={index} className="group px-6 bg-[#202328] rounded-md">
              <img
                src={item.image}
                className=" w-full  text-secondary-900 rounded-md"
              />
              <div className="flex items-center justify-between gap-2 my-6">
                <span className="text-secondary-500 text-lg">{item.stack}</span>
                <p className="flex items-center gap-4 text-neutral-400">
                  <HeartIcon className="w-4" />
                  <span>{item.views}</span>
                </p>
              </div>
              <h3 className="my-4 text-left text-2xl text-neutral-400">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

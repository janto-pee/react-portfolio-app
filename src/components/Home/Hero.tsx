import image1 from "../../assets/banner-02.jpg";
import Typewriter from "typewriter-effect";
import Icon from "./Icon";

const Hero = () => {
  return (
    <div id="hero" className="bg-neutral-900">
      <div className="max-w-7xl mx-auto w-full ">
        <div className="flex flex-col-reverse lg:flex-row justify-between py-10 lg:py-36 gap-4 lg:gap-8 xl:gap-12 border-b border-black">
          {/* first col */}
          <div className="lg:basis-3/5 py-10 px-4 lg:px-8">
            <h5 className="text-neutral-400">🖐️ WELCOME TO MY WORLD</h5>
            <div className="text-4xl md:text-6xl text-neutral-50 font-bold dark:text-gray-900 mt-8">
              <h2 className="my-4 ">
                Hi, I’m <span className="text-secondary-500">Janto Pee</span>
              </h2>
              <p>
                <Typewriter
                  options={{
                    strings: ["a Software Engineer", "a DevOps Engineer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
            <p className="my-8 text-lg text-neutral-400 max-w-xl md:max-w-2xl">
              Highly competent Software Engineer with over four years of
              experience, spearheading the development of large-scale software
              solutions and deploying intuitive solutions to meet customer
              design requirements.
            </p>
            <div className="max-w-[10rem] md:max-w-xl flex flex-col justify-start md:flex-row gap-8 md:justify-between items-center text-neutral-400">
              <Icon item1 title1 />
              <Icon item2 title2 />
            </div>
          </div>

          {/* second col */}
          <div className="lg:basis-2/5 relative flex items-center">
            <div className="hidden lg:flex bg-[#1F2125] button-box-shadow w-full mt-auto h-[30rem] "></div>
            <div className="lg:absolute lg:bottom-0 ">
              <img src={image1} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

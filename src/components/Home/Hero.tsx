import image1 from "../../assets/banner-01.png";
import Typewriter from "typewriter-effect";
import {
  AiFillGithub,
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div id="hero" className="bg-neutral-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between py-10 lg:py-20 gap-4 lg:gap-8 xl:gap-12 border-b border-black">
          {/* first col */}
          <div className="basis-3/5 py-10">
            <h5 className="text-neutral-400">WELCOME TO MY WORLD</h5>
            <div className="text-2xl md:text-6xl text-neutral-50 font-bold dark:text-gray-900 mt-8">
              <h2 className="my-4">
                Hi, I’m <span className="text-secondary-500">Jone Lee</span>
              </h2>
              <p>
                <Typewriter
                  options={{
                    strings: ["a Professional Coder", "a UI/UX Designer."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
            <p className="my-8 text-neutral-400 max-w-xl">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
            <div className="max-w-xl flex gap-8 justify-between items-center text-neutral-400">
              <div className="">
                <p className="uppercase mt-8 lg:mt-32 mb-6">Find With Me</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="p-4 rounded-md border border-neutral-900 button-box-shadow3">
                    <AiOutlineFacebook className=" text-lg" />
                  </p>
                  <p className="p-4 rounded-md border border-neutral-900 button-box-shadow3">
                    <AiOutlineTwitter className=" text-lg" />
                  </p>
                  <p className="p-4 rounded-md border border-neutral-900 button-box-shadow3">
                    <AiOutlineInstagram className=" text-lg" />
                  </p>
                </div>
              </div>
              <div>
                <p className=" uppercase mt-8 lg:mt-32 mb-6">Best Skills on</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="p-4 rounded-md border border-neutral-900 button-box-shadow3">
                    <AiFillGithub className="text-primary-500 text-lg" />
                  </p>
                  <p className="p-4 rounded-md border border-neutral-900 button-box-shadow3">
                    <AiOutlineDribbble className="text-green-500 text-lg" />
                  </p>
                  <p className="p-4 rounded-md border border-neutral-900 button-box-shadow3">
                    <AiOutlineBehance className="text-purple-500 text-lg" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second col */}
          <div className="basis-2/5 relative flex items-center">
            <div className="bg-[#1F2125] button-box-shadow w-full mt-auto h-[30rem]"></div>
            <div className="absolute bottom-0 ">
              <img src={image1} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

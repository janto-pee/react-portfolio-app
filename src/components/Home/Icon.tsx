import {
  AiFillGithub,
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Icon = ({
  item1,
  item2,
  title1,
  title2,
}: {
  item1?: boolean;
  title1?: boolean;
  title2?: boolean;
  item2?: boolean;
}) => {
  return (
    <>
      {item1 && (
        <div className="">
          <p
            className={`uppercase mt-8 lg:mt-30 mb-8 ${
              title1 ? "block" : "hidden"
            }`}
          >
            Find With Me
          </p>
          <div className="flex items-center justify-between gap-4">
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow4">
              <FaFacebook className=" text-lg" />
            </p>
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow4">
              <AiOutlineTwitter className=" text-lg" />
            </p>
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow4">
              <AiOutlineInstagram className=" text-lg" />
            </p>
          </div>
        </div>
      )}
      {item2 && (
        <div>
          <p
            className={`uppercase mt-8 lg:mt-30 mb-8 ${
              title2 ? "block" : "hidden"
            }`}
          >
            Best Skills on
          </p>
          <div className="flex items-center justify-between gap-4">
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow4">
              <AiFillGithub className="text-yellow-500 text-lg" />
            </p>
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow4">
              <AiOutlineDribbble className="text-green-500 text-lg" />
            </p>
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow4">
              <AiOutlineBehance className="text-purple-500 text-lg" />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Icon;

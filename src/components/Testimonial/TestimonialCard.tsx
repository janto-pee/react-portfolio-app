import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

export interface TestimonialCardInterface {
  userImage: string;
  userCompany: string;
  userPosition: string;
  userName: string;
  id: number;
  image: string;
  title: string;
  subtitle: string;
  rating: number;
  comment: string;
}

const TestimonialCard = ({ item }: { item: TestimonialCardInterface }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 py-10 bg-[#202328] gap-12">
      {/* blog card */}
      <div className="lg:col-span-1 group px-6 pt-6 pb-8 bg-[#202328] rounded-lg button-box-shadow4">
        <img
          src={item.userImage}
          className=" w-full  text-secondary-900 rounded-md"
        />
        <div className="flex items-center justify-between gap-2 my-6">
          <span className="text-secondary-500 text-lg">{item.userCompany}</span>
        </div>
        <h3 className="mt-4 text-left text-2xl text-neutral-400">
          {item.userName}
        </h3>
        <p className="mt-2 text-left text-neutral-400">{item.userPosition}</p>
      </div>
      {/* testimonial */}
      <div className="lg:col-span-2 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <ChatBubbleLeftIcon className="text-xl w-8 text-black" />
          <p className="flex gap-4 ">
            <span className="px-4 py-4 button-box-shadow4 text-neutral-400">
              <ArrowLeftIcon className="w-4" />
            </span>
            <span className="px-4 py-4 button-box-shadow4 text-neutral-400">
              <ArrowRightIcon className="w-4" />
            </span>
          </p>
        </div>
        <div className="button-box-shadow4 p-8 text-start ">
          <div className="flex items-center justify-between gap-2">
            <div className="space-y-2">
              <h3 className="text-2xl text-neutral-300 ">{item.title}</h3>
              <p className=" text-neutral-500 ">{item.subtitle}</p>
            </div>
            <p className="text-neutral-200 flex items-center gap-2 button-box-shadow4 px-4 py-2">
              {item.rating}
              <StarIcon className="w-4 text-yellow-500" />
            </p>
          </div>
          <p className="mb-4 mt-8 text-neutral-500 text-lg">{item.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

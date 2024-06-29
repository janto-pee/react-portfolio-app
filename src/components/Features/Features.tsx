import {
  ChartPieIcon,
  BuildingOfficeIcon,
  BuildingLibraryIcon,
  BoltIcon,
  PencilIcon,
  CalendarDaysIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const Features = () => {
  const FeaturesList = [
    {
      id: 1,
      icon: ChartPieIcon,
      title: "Business Stratagy",
      content:
        "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
    },
    {
      id: 2,
      icon: BuildingOfficeIcon,
      title: "App Development",
      content:
        "We’ll handle everything from to app development process until it is time to make your project live.",
    },
    {
      id: 3,
      icon: BuildingLibraryIcon,
      title: "Business Stratagy",
      content:
        "We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.",
    },
    {
      id: 4,
      icon: BoltIcon,
      title: "Mobile App",
      content:
        "Using our expertise in mobile application development to create beautiful pixel-perfect designs.",
    },
    {
      id: 5,
      icon: PencilIcon,
      title: "SEO Optimisation",
      content:
        "Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!",
    },
    {
      id: 6,
      icon: CalendarDaysIcon,
      title: "UX Consulting",
      content:
        "A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.",
    },
  ];
  return (
    <div className="bg-neutral-900">
      <div className="max-w-7xl mx-auto  py-10 xl:py-20">
        <h3 className="text-secondary-500 text-lg">FEATURES</h3>
        <h2 className="my-8 uppercase text-neutral-200 text-2xl xl:text-6xl font-semibold border-b border-black">
          What I do
        </h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 xl:gap-12">
          {FeaturesList.map((item, index) => (
            <div
              key={index}
              className="group px-14 py-10 bg-[#202328] button-box-shadow3"
            >
              <item.icon className="h-12 w-12  text-secondary-900" />
              <h3 className="my-6 text-3xl text-neutral-100">{item.title}</h3>
              <p className="mb-4 text-neutral-200">{item.content}</p>
              <ArrowLongRightIcon className="opacity-0 w-12 group-hover:opacity-100 text-secondary-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

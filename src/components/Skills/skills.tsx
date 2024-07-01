import {
  ChartPieIcon,
  BuildingOfficeIcon,
  BuildingLibraryIcon,
  BoltIcon,
  PencilIcon,
  CalendarDaysIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const Skills = () => {
  const SkillsList = [
    {
      id: 1,
      icon: ChartPieIcon,
      title: "Frontend",
      content:
        " specializes in creating and designing the user interface (UI) and user experience (UX) of websites",
    },
    {
      id: 2,
      icon: BuildingOfficeIcon,
      title: "Backend",
      content:
        "build and maintain the server-side logic, databases, and other components of a website",
    },
    {
      id: 3,
      icon: BuildingLibraryIcon,
      title: "Containerization",
      content:
        "build standardized packages where components of an app are bundled into a single container image ",
    },
    {
      id: 4,
      icon: BoltIcon,
      title: "CI/CD",
      content:
        "Build CI/CD pipeline that automates the entire software delivery process from build to deployment",
    },
    {
      id: 5,
      icon: PencilIcon,
      title: "Iac",
      content:
        "Use Terraform to provision your computing infrastructure instead of manual processes",
    },
    {
      id: 6,
      icon: CalendarDaysIcon,
      title: "Cloud",
      content:
        "use services such as AWS & Azure for the delivery of hosted computing services over the internet",
    },
  ];
  return (
    <div id="features" className="bg-neutral-900">
      <div className="text-center max-w-7xl mx-auto py-16 xl:py-20 px-4 border-b border-black">
        <h3 className="text-secondary-500 text-lg">🦺 SKILLS</h3>
        <h2 className="my-8 uppercase text-neutral-200 text-3xl xl:text-6xl font-semibold ">
          What I do
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {SkillsList.map((item, index) => (
            <div
              key={index}
              className="group text-start lg:text-center px-6 lg:px-14 py-10 bg-[#202328] button-box-shadow4"
            >
              <p className="flex lg:justify-center">
                <item.icon className="h-12 w-12  text-secondary-900 group-hover:text-secondary-500 transition ease-in-out delay-300" />
              </p>
              <h3 className="my-6 text-2xl lg:text-3xl text-neutral-300">
                {item.title}
              </h3>
              <p className="mb-4 text-neutral-400 lowercase">{item.content}</p>
              <p className="flex justify-center">
                <ArrowLongRightIcon className="opacity-0 w-12 group-hover:opacity-100 text-secondary-500 transition ease-in-out delay-300 " />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

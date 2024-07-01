import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import TestimonialCard, { TestimonialCardInterface } from "./TestimonialCard";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const TestimonialList: TestimonialCardInterface[] = [
    {
      userImage: "/avatar/Image-2.png",
      userCompany: "Startup Camp",
      userPosition: "Vice President Engineering",
      userName: "Betty Hakimi",
      id: 1,
      image: img1,
      title: "Android App Development",
      subtitle: "via upwork - March 4, 2015 - August 3, 2015",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor emque labore voluptas iure tempora officiis dicta veniam iste elig endi Atque doloremque labore voluptas iure tempora officiis dicta veniam iste eligendi consequatur!",
    },
    {
      userImage: "/avatar/Image-1.png",
      userCompany: "Edupedia AI",
      userPosition: "Principal Engineer",
      userName: "Bryan John",
      id: 1,
      image: img2,
      title: "DevOps Engineer",
      subtitle: "via upwork - March 4, 2015 - August 3, 2015",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor emque labore voluptas iure tempora officiis dicta veniam iste elig endi Atque doloremque labore voluptas iure tempora officiis dicta veniam iste eligendi consequatur!",
    },
    {
      userImage: "/avatar/Image-3.png",
      userCompany: "Startup Camp",
      userPosition: "Vice President Engineering",
      userName: "Nike Adele",
      id: 1,
      image: img3,
      title: "Android App Development",
      subtitle: "via upwork - March 4, 2015 - August 3, 2015",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor emque labore voluptas iure tempora officiis dicta veniam iste elig endi Atque doloremque labore voluptas iure tempora officiis dicta veniam iste eligendi consequatur!",
    },
  ];
  return (
    <div id="testimonial" className="bg-neutral-900">
      <div className="max-w-7xl mx-auto py-10 xl:py-20 text-center border-b border-black px-4">
        <h3 className="text-secondary-500 text-lg">WHAT CLIENT SAY</h3>
        <h2 className="my-8 uppercase text-neutral-200 text-3xl xl:text-6xl font-semibold ">
          TESTIMONIAL
        </h2>
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1">
          <Slider {...settings}>
            {TestimonialList.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialCard from "./TestimonialCard";
import { TestimonialList } from "../../data/data";

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

  return (
    <div id="testimonial" className="bg-neutral-900">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-4 xl:px-0 py-10 xl:py-20 text-center border-b border-black"
      >
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

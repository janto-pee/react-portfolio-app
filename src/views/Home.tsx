import Blog from "../components/Blog/Blog";
import Client from "../components/Client/Client";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import Resume from "../components/Resume/Resume";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Client />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

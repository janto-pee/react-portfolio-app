import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import Resume from "../components/Resume/Resume";
import Skills from "../components/Skills/skills";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

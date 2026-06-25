import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact /> 
      <Footer />

    </>
  );
}

export default HomePage;
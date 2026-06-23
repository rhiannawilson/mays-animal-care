import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from "../components/About";
import Services from "../components/Services";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default HomePage;
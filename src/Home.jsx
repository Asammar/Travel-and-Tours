import Card from "./Card";
import ContactUs from "./ContactUs";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <Card />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;

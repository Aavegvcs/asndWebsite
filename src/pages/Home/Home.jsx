import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import BrandStrip from "../../components/BrandStrip/BrandStrip";
import OurServices from "../../components/OurServices/OurServices";
import { HowDoSection } from "../../components/HowDoSection/HowDoSection";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandStrip />
      <OurServices />
      <HowDoSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;

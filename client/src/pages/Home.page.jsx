import React from "react";
import HeroSection from "../components/Home/HeroSection";
import WeOfferSection from "../components/Home/WeOfferSection";
import Collection from "../components/Home/Collection";
import Localities from "../components/Home/Localities";
import GetTheApp from "../components/Home/GetTheApp";
import ExploreSection from "../components/ExploreSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WeOfferSection />
      <Collection />
      <Localities />
      <GetTheApp />
      <ExploreSection />
      <Footer />
    </>
  );
};

export default Home;

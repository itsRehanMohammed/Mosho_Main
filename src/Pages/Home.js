import React from "react";
import Download from "../components/Home/Download";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Popular from "../components/Home/Popular";
import Service from "../components/Home/Service";
import Testimonial from "../components/Home/Testimonial";

const Home = ({ MenuDB }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular MenuDB={MenuDB} />
      <Service />
      <Testimonial />
      <Download />
      <Footer />
    </>
  );
};

export default Home;

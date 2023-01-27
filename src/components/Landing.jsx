import React from 'react'
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Landing
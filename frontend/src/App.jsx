import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/Workoutsessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMIcalculator from "./components/BMIcalculator";
import Footer from "./components/Footer";
import "./App.css";
import { ToastContainer } from "react-toastify";
import ScrollToHome from "./components/ScrollToHome";
  
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <BMIcalculator />
      <Contact />
      <Footer />
      <ScrollToHome/>
      <ToastContainer
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        theme="light"/>
    </>
  );
};

export default App;

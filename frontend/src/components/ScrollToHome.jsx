import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToHome = () => {
  const goToHome = () => {
    // If you have a home section with id="home"
    const home = document.getElementById("home");

    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className="scroll-home-btn"
      aria-label="Go to home"
      onClick={goToHome}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToHome;

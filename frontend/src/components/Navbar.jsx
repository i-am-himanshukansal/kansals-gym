import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    //scrollIntoView inBUild function
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="logo">
        <p>KANSAL's GYM</p>
      </div>

      <nav className="nav-links">
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("workout_session")}>Workouts</button>
        <button onClick={() => scrollToSection("gallery")}>Gallery</button>
        <button onClick={() => scrollToSection("pricing")}>Pricing</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <button onClick={() => scrollToSection("bmi")}>BMI</button>
        <button onClick={() => scrollToSection("footer")}>Footer</button>
      </nav>
    </header>
  );
};

export default Navbar;

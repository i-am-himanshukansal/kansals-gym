import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      {/* LEFT : Brand */}
      <div className="logo">
        <p>KANSAL&apos;s GYM</p>
      </div>

      {/* RIGHT : Navigation */}
      <nav className="nav-links">
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("workout_session")}>Workouts</button>
        <button onClick={() => scrollToSection("gallery")}>Gallery</button>
        <button onClick={() => scrollToSection("pricing")}>Pricing</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <button onClick={() => scrollToSection("bmi")}>BMI</button>
      </nav>
    </header>
  );
};

export default Navbar;

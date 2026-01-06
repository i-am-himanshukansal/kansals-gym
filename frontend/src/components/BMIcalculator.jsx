import React, { useState } from "react";
import { toast } from "react-toastify";

const BMIcalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!weight || !height || !gender) {
      toast.error("Please enter all required details");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (
      weight / (heightInMeters * heightInMeters)
    ).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are underweight");
    } else if (bmiValue < 25) {
      toast.success("You have a healthy weight");
    } else if (bmiValue < 30) {
      toast.warning("You are overweight. Regular exercise is recommended.");
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist."
      );
    }
  };

  return (
    <section className="bmi" id="bmi">
      <h1>BMI Calculator</h1>
      <p className="subtitle">
        Check your Body Mass Index instantly
      </p>

      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI} className="bmi-form">
            <div className="field">
              <label>Height (cm)</label>
              <input
                type="number"
                placeholder="e.g. 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Weight (kg)</label>
              <input
                type="number"
                placeholder="e.g. 65"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>

            <button type="submit" className="btn-primary">
              Calculate BMI
            </button>
          </form>

          {bmi && (
            <div className="result-card">
              <div>
                <h2>Your BMI</h2>
                <p>Based on the data you entered</p>
              </div>
              <div className="value">{bmi}</div>
            </div>
          )}
        </div>

        <div className="wrapper image-box">
          <img src="/bmi.jpg" alt="BMI Illustration" />
        </div>
      </div>
    </section>
  );
};

export default BMIcalculator;

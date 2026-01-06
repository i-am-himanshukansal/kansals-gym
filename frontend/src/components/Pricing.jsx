import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const pricing = [
  {
    imgUrl: "/pricing.jpg",
    title: "Quarterly",
    price: 10000,
    duration: "3 Months",
    length: 3,
  },
  {
    imgUrl: "/pricing.jpg",
    title: "Half-Yearly",
    price: 18000,
    duration: "6 Months",
    length: 6,
  },
  {
    imgUrl: "/pricing.jpg",
    title: "Yearly",
    price: 30000,
    duration: "12 Months",
    length: 12,
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>

      <div className="wrapper">
        {pricing.map((plan,id) => (
          <div className="card" key={id}>
            <img src={plan.imgUrl} alt={plan.title} />

            <div className="title">
              <h1>{plan.title} PACKAGE</h1>
              <h3>₹ {plan.price}</h3>
              <p>For {plan.duration}</p>
            </div>
            <div className="description">
              <p>
                <Check size={18} /> Access to all gym facilities
              </p>
              <p>
                <Check size={18} /> All-day free training
              </p>
              <p>
                <Check size={18} /> Free rest room
              </p>
              <p>
                <Check size={18} /> 24×7 skilled support
              </p>
              <p>
                <Check size={18} /> 20 days freezing option
              </p>

              <Link to="/">Join Now</Link>
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Pricing;

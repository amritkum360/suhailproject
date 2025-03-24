import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./SubscriptionSection.css"; // Custom styles
import { MdEmail } from "react-icons/md";

const SubscriptionSection = () => {
  return (
    <div className="subscription-section">
      <div className="container text-center">
        {/* <img src="/images/email-icon.png" alt="Email Icon" className="email-icon" /> */}
        <MdEmail size={50} className="email-icon text-warning" />
        <h4 className="fw-bold mt-3">Sign Up For Discounts and Updates</h4>
        <p>Get the latest offers, articles, and courses delivered to your inbox.</p>

        <div className="subscription-form">
          <input type="email" className="form-control" placeholder="Your Email (required)" />
          <button className="btn btn-success">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;

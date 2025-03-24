import React, { useState } from "react";

export default function GrpClassPlans() {
  const [selectedTab, setSelectedTab] = useState("60 MIN");

  const pricingData = {
    "30 MIN": [
      { days: "1 Day / Week", price: 20, oldPrice: 30, hours: 2, classes: 4 },
      { days: "2 Days / Week", price: 40, oldPrice: 60, hours: 4, classes: 8 },
      { days: "3 Days / Week", price: 60, oldPrice: 90, hours: 6, classes: 12 },
      { days: "4 Days / Week", price: 60, oldPrice: 90, hours: 6, classes: 12 },
    ],
    "45 MIN": [
      { days: "1 Day / Week", price: 25, oldPrice: 35, hours: 3, classes: 4 },
      { days: "2 Days / Week", price: 50, oldPrice: 75, hours: 6, classes: 8 },
      { days: "3 Days / Week", price: 75, oldPrice: 110, hours: 9, classes: 12 },
    ],
    "60 MIN": [
      { days: "1 Day / Week", price: 35, oldPrice: 45, hours: 4, classes: 4 },
      { days: "2 Days / Week", price: 70, oldPrice: 90, hours: 8, classes: 8 },
      { days: "3 Days / Week", price: 100, oldPrice: 125, hours: 12, classes: 12 },
    ],
  };

  return (
    <>
      {/* Header Section */}
      {/* <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          height: "250px",
          backgroundImage:
            "url('https://eilaf101.com/wp-content/uploads/2023/08/Pricing-Eilaf.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            textTransform: "uppercase",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          PRICING PLANS
        </h1>
      </div> */}

      {/* Pricing Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold text-dark">One-to-One Tuition Fees</h2>

        {/* Tabs */}
        <div className="d-flex justify-content-center my-3">
          {["30 MIN", "45 MIN", "60 MIN"].map((tab) => (
            <button
              key={tab}
              className={`btn mx-2 ${
                selectedTab === tab ? "btn-dark text-white" : "btn-outline-secondary"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="row mt-4">
          {pricingData[selectedTab].map((plan, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm p-4 border-0">
                <span className="badge bg-warning text-dark mb-2">{plan.days}</span>
                <h2 className="text-dark fw-bold">${plan.price}</h2>
                <p className="text-danger fw-bold">
                  instead of <s>${plan.oldPrice}</s>
                </p>
                <p className="text-muted">Per month</p>
                <ul className="list-unstyled text-start">
                  <li>✔ {plan.hours} Hours per Month</li>
                  <li>✔ {plan.classes} classes of {selectedTab} each</li>
                </ul>

                {/* Book Trial Button */}
                <button className="btn btn-primary w-100 mt-3">
                  Book Trial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import GrpClassPlans from "./grp-classes-fee";
import Footer from "../../Homepage/comp/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Plans() {
  const [selectedTab, setSelectedTab] = useState("Gulf Countries");
 
  const navigate = useNavigate()
  const pricingData = {
    "Gulf Countries": [
      
      {
        title: "FEES STARTING FROM",
        region: "For Gulf Countries",
        price: "SAR 199",
        oldPrice: "SAR 120",
        frequency: "Monthly",
        days: "6 days/week",
        course: "For All Courses",
        duration: "1 hour Class",
        link: "Click Here",
      },
    ],
    "India/Pakistan/Bangladesh": [
      {
        title: "FEES STARTING FROM",
        region: "For INDIA/PAKISTAN/BANGLADESH",
        price: "R$ 250",
        frequency: "Monthly",
        days: "6 days/week",
        details: "[Alternate days live session & alternate days test]",
        type: "Batch Class",
        course: "For Any Course",
        duration: "1 hour Class",
        link: "Click Here",
      },
      {
        title: "FEES STARTING FROM",
        region: "For INDIA/PAKISTAN/BANGLADESH",
        price: "R$ 2500",
        frequency: "Monthly",
        days: "6 days/week",
        details: "[Alternate days live session & alternate days test]",
        type: "ONE-ONE CLASS",
        course: "For Any Course",
        duration: "30 mins Class",
        link: "Click Here",
      },
      {
        title: "FEES STARTING FROM",
        region: "For INDIA/PAKISTAN/BANGLADESH",
        price: "R$ 2499",
        frequency: "Monthly",
        days: "6 days/week",
        details: "[Alternate days live session & alternate days test]",
        type: "ONE-ONE CLASS",
        course: "For Any Course",
        duration: "1 hour Class",
        link: "Click Here",
      },
    ],
    "U.S.A/U.K": [
      {
        title: "FEES STARTING FROM",
        region: "For United States of America/United Kingdom",
        price: "$ 40",
        frequency: "Monthly",
        days: "6 days/week",
        details: "[Alternate days live session & alternate days test]",
        type: "Batch Class",
        course: "For All Course",
        duration: "1 hour Class",
        link: "Click Here",
      },
    ],
  };

  return (
    <>
      {/* Header Section */}
      <div
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
            background: "rgba(0, 128, 0, 0.7)", // Green background with opacity
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          PRICING PLANS
        </h1>
      </div>

      {/* Pricing Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold" style={{ color: "#006400" }}>One-to-One Tuition Fees</h2>

        {/* Tabs */}
        <div className="d-flex justify-content-center my-3">
          {["Gulf Countries", "India/Pakistan/Bangladesh", "U.S.A/U.K"].map((tab) => (
            <button
              key={tab}
              className={`btn mx-2 ${
                selectedTab === tab ? "btn-success text-white" : "btn-outline-success"
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
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm p-4 border-0" style={{ backgroundColor: "#f0fff0" }}>
                <h5 className="fw-bold" style={{ color: "#006400" }}>{plan.title}</h5>
                <p className="text-muted">{plan.region}</p>
                <h2 style={{ color: "#006400" }}>{plan.price}</h2>
                {plan.oldPrice && (
                  <p className="text-danger fw-bold">
                    instead of <s>{plan.oldPrice}</s>
                  </p>
                )}
                <p className="text-muted">{plan.frequency}</p>
                <p style={{ color: "#006400" }}>{plan.days}</p>
                {plan.details && <p className="text-muted">{plan.details}</p>}
                {plan.type && <p style={{ color: "#006400" }}>{plan.type}</p>}
                <p style={{ color: "#006400" }}>{plan.course}</p>
                <p style={{ color: "#006400" }}>{plan.duration}</p>
                <button className="btn btn-success w-100 mt-3" onClick={() => navigate('/freetrail')}>  
                  {plan.link}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <GrpClassPlans /> */}
      <Footer />
    </>
  );
}
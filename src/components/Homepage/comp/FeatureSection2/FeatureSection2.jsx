import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const FeaturesSection2 = () => {
  const features = [
    {
      title: "Worldwide Recognition",
      description:
        "TarteeleQuran is serving since 2011 in more than 90 countries of the world including the USA, UK, Europe, Australia & Canada.",
      icon: "🌍",
    },
    {
      title: "24/7 Service",
      description:
        "We offer Quran lessons round the clock to make it possible for you and your kids to learn with the busiest schedules.",
      icon: "⏳",
    },
    {
      title: "Appraisal Certificate",
      description:
        "We award a completion certificate after the successful evaluation of the completed course that is posted to your mail address.",
      icon: "📜",
    },
    {
      title: "Easy Online Payments",
      description:
        "We have made it easy for you to process your invoices securely and safely via credit card, local bank transfers, and PayPal.",
      icon: "💳",
    },
    {
      title: "One-on-One Classes",
      description:
        "We are offering individual classes in brother-to-brother and sister-to-sister, with a one-on-one learning mechanism.",
      icon: "👨‍🏫",
    },
    {
      title: "Evaluation Reports",
      description:
        "Our quality control team will not monitor teachers only but will provide you with a progress report every month.",
      icon: "📊",
    },
    {
      title: "Online Panel",
      description:
        "We have a learning management system to keep a record of your progress and schedules online.",
      icon: "🖥️",
    },
    {
      title: "Alternative Teachers",
      description:
        "To ensure you won’t miss classes, we have alternative teachers to cover your sessions when needed.",
      icon: "👨‍🎓",
    },
    {
      title: "Multilingual Tutors",
      description:
        "We strive hard to hire expert Arab and Non-Arab, male and female tutors to teach in multiple languages.",
      icon: "🌎",
    },
  ];

  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="d-flex align-items-start">
                <div className="fs-2 text-success me-3">{feature.icon}</div>
                <div>
                  <h5 className="fw-bold text-dark">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;

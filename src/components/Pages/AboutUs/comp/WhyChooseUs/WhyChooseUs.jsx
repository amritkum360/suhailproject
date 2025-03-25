import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseUs = () => {
  return (
    <section className="container text-center my-5">
      <h2 className="fw-bold text-dark">WHY CHOOSE US?</h2>
      <p className="text-muted">
        We aid fellow Muslims across the globe to get closer to Allah through the Holy Quran.
      </p>

      <div className="row align-items-center mt-4">
        {/* Left Side */}
        <div className="col-md-4 text-center">
          <div className="mb-4">
            <img src="https://cdn-icons-png.flaticon.com/512/595/595067.png" alt="Flexible Timing" width="50" />
            <h5 className="fw-bold mt-3">Flexible Timing Schedule</h5>
            <p className="text-muted">
              Our classes & teachers are available 24/7, and you can choose a time that suits you.
            </p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/929/929455.png" alt="Free Trial" width="50" />
            <h5 className="fw-bold mt-3">Free Trial Classes</h5>
            <p className="text-muted">
              We offer 2 free trial classes for all courses to evaluate.
            </p>
          </div>
        </div>

        {/* Center Logo */}
        <div className="col-md-4 text-center">
          <img
            src="/logo.png"
            alt="Eilaf Institute"
            className="img-fluid"
            width="180"
          />
          <h4 className="fw-bold mt-3">ATIA INSTITUTE</h4>
          <p className="text-warning fw-bold">- ONLINE ARABIC & ISLAMIC STUDIES -</p>
        </div>

        {/* Right Side */}
        <div className="col-md-4 text-center">
          <div className="mb-4">
            <img src="https://cdn-icons-png.flaticon.com/512/3429/3429318.png" alt="Female Tutors" width="50" />
            <h5 className="fw-bold mt-3">Female Tutors Available</h5>
            <p className="text-muted">
              We have professional and experienced female tutors to teach you or your kids.
            </p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3076/3076811.png" alt="1-on-1 Classes" width="50" />
            <h5 className="fw-bold mt-3">1-on-1 Online Classes</h5>
            <p className="text-muted">
              We provide personalized, one-on-one online classes for effective learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

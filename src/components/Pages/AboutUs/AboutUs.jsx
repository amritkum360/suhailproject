import React from "react";
import Footer from "../../Homepage/comp/Footer/Footer";
import SubscriptionSection from "../../Homepage/comp/SubscriptionSection/SubscriptionSection";
import WhyChooseUs from "./comp/WhyChooseUs/WhyChooseUs";

const AboutUs = () => {
  return (
    <>
      <section className="container my-5">
        <div className="row align-items-center">
          {/* Left Content Section */}
          <div className="col-lg-6 order-1">
            <h2 className="fw-bold text-dark">About <span className="text-warning">EILAF</span></h2>

            {/* Image (Mobile: Below h2, Desktop: Right) */}
            <div className="d-block d-lg-none text-center my-3">
              <img 
                src="/quran-2.png" 
                alt="About EILAF" 
                className="img-fluid rounded"
              />
            </div>

            <p className="text-muted">
              <strong>EILAF</strong> is a professional online platform to learn Quran, Arabic Language, 
              and Islamic Studies for kids & adults through one-to-one online sessions provided by native Arab 
              male & female tutors.
            </p>
            <p className="text-muted">
              Our staff involves experienced Quran and Arabic teachers who use the most advanced 
              technology and new teaching techniques to make the learning of the Quran, Arabic, or 
              Islam online much more effective and interactive.
            </p>
            <p className="text-muted">
              Our tutors can communicate in Arabic and English fluently, making sure that 
              communication and learning are effective. Moreover, all learning sessions can be 
              scheduled according to the convenience of the students without any hassle.
            </p>
            <p className="text-muted">
              About Eilaf customizes courses, lessons, and teaching techniques as per student’s age, 
              knowledge, and interests. So, no matter your level or age, you or your children can start 
              learning Quran & Arabic without any hassle.
            </p>
            <p className="fw-bold text-warning">
              Start learning Quran free by booking 2 free trial classes now without any obligation to 
              continue learning later in case you are not satisfied with our courses or tutors.
            </p>
            <button className="btn btn-dark px-4 py-2">
              <a href="/" style={{ color: "white" }}>BROWSE OUR COURSES</a> 
            </button>
          </div>

          {/* Right Image Section (Desktop Only) */}
          <div className="col-lg-6 text-center order-lg-2 d-none d-lg-block">
            <img 
              src="/quran-2.png" 
              alt="About EILAF" 
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default AboutUs;

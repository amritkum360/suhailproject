import React from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaClock, FaAward } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Import the hook
import "./AboutSection.css"; // External CSS for styling

const AboutSection = () => {
  // Use the useInView hook to detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <section className="about-section2" ref={ref}>
      {/* Bottom Section with Statistics */}
      <div className="about-stats py-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* Experience */}
            <div className="col-md-3 col-2 mb-3">
              <div className="stat-box">
                <FaAward className="stat-icon" />
                <h3 className="fw-bold">
                  {inView ? <CountUp end={10} duration={3} /> : 0}+
                </h3>
                <p>YEARS</p>
              </div>
            </div>

            {/* Teachers */}
            <div className="col-md-3 col-2 mb-3">
              <div className="stat-box">
                <FaChalkboardTeacher className="stat-icon" />
                <h3 className="fw-bold">
                  {inView ? <CountUp end={15} duration={3} /> : 0}+
                </h3>
                <p>TEACHERS</p>
              </div>
            </div>

            {/* Students */}
            <div className="col-md-3 col-2 mb-3">
              <div className="stat-box">
                <FaUserGraduate className="stat-icon" />
                <h3 className="fw-bold">
                  {inView ? <CountUp end={300} duration={3} /> : 0}+
                </h3>
                <p>STUDENTS</p>
              </div>
            </div>

            {/* Teaching Hours */}
            <div className="col-md-3 col-2 mb-3">
              <div className="stat-box">
                <FaClock className="stat-icon" />
                <h3 className="fw-bold">
                  {inView ? <CountUp end={1000} duration={3} /> : 0}+
                </h3>
                <p>HOURS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
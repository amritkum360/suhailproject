// import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          {/* Left Content */}
          <motion.div
            className="col-lg-6 text-center text-lg-start text-white hero-content"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          >
            <p className="text-muted mb-2 fw-semibold">
              Learn with <span className="text-dark">ATIA</span>
            </p>
            <h1 className="fw-bold display-4" style={{ color: "#19473c" }}>
              Quran. Arabic. <br /> Islamic Studies.
            </h1>
            <p className="text-muted">
              <b> Best Quran & Arabic Tutors</b> ready to take you or your kids from Beginner to Pro level in a short time.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <a
                href="/freetrail"
                style={{ background: "#19473c", color: "#fff" }}
                className="btn fw-bold px-4 py-2 fw-semibold "
              >
                BOOK FREE TRIAL
              </a>
              <a
                href="/islamic-courses"
                className="btn fw-bold px-4 py-2 fw-semibold "
                style={{ background: "#c2912e", color: "#fff" }}
              >
                BROWSE COURSES
              </a>
            </div>
          </motion.div>

          {/* Right Section with Multiple Images */}
          <div className="col-lg-6 position-relative" style={{ zIndex: 2 }}>
            {/* First Image */}
            {/* <motion.img
              src="/sparkle.png" // Replace with your image URL
              alt="Hero Image 1"
              className="img-fluid rounded shadow moving-image"
              initial={{ x: "100%", y: "100%" }} // Start from bottom-right
              animate={{ x: "-100%", y: "-100%" }} // Move to top-left
              transition={{
                duration: 10, // Animation duration
                repeat: Infinity, // Loop infinitely
                ease: "linear", // Smooth linear movement
                delay: 0, // No delay for the first image
              }}
            /> */}
            {/* Second Image */}
            <motion.img
  src="/sparkle.png" // Replace with your image URL
  alt="Hero Image 2"
  className="img-fluid rounded moving-image"
  initial={{ x: "-100%", y: "-100%" }} // Start from top-left
  animate={{ x: "80%", y: "80%" }} // Move to bottom-right
  transition={{
    duration: 10, // Animation duration
    repeat: Infinity, // Loop infinitely
    ease: "linear", // Smooth linear movement
  }}
  style={{
    width: "1200px",
    marginBottom: "-20px",
    animation: "sparkle 60s linear infinite",
  }}
/>

          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="hero-bg"></div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/your-number"
        className="position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle p-3 shadow"
      >
        <FaWhatsapp size={30} />
      </a>
    </section>
  );
}
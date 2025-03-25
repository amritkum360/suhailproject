import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./StepsSection.css"; // Custom styles

const StepsSection = () => {
  const stepsRef = useRef(null);
  const isInView = useInView(stepsRef, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "Fill in The Free Trial Form",
      description:
        "Simply go to the registration page. You can register for free online Quran classes with our online Quran teachers just by filling in your name and contact information.",
      icon: "📝",
    },
    {
      title: "Schedule Free Trial Session",
      description:
        "Upon receiving your registration, we will contact you back to set your convenience time for a Free Trial Class and give you an overview of our teaching process.",
      icon: "📅",
    },
    {
      title: "Download Meeting App",
      description:
        "Download Zoom app or Skype to start taking the class at the scheduled appointment. (Skype ID or Zoom Room Link is provided upon appointment confirmation).",
      icon: "📹",
    },
  ];

  return (
    <section className="steps-section" ref={stepsRef}>
      <div className="container">
        {/* Title Animation */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How to Learn at ATIA in 3 Steps?
        </motion.h2>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="step-icon"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {step.icon}
              </motion.div>
              <motion.h4 className="step-number">STEP {index + 1}</motion.h4>
              <motion.h5 className="step-title">{step.title}</motion.h5>
              <motion.p className="step-description">{step.description}</motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;

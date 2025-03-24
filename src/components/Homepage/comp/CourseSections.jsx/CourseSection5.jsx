// Import Framer Motion
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseSections5() {
  const [isVisible, setIsVisible] = useState(false);


  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("course-section-5");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-5 bg-light" id="course-section-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section - Left Side */}
          <div className="col-md-6 order-2 order-md-1">
            <motion.h5
              className="fw-bold mb-4 mt-5"
              style={{color:"#19473c"}}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Arabic Language Course
            </motion.h5>
            <motion.h2
              className="mb-3"
              style={{ color: "#c2912e" }}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Learn Arabic Language
            </motion.h2>
            <motion.p
              className="lead mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Learn the Arabic language online with native Arab teachers who will take
              you from the absolute beginner level to fluency in Arabic. You or your
              kids will learn verbs and make perfect sentences with no grammar mistakes.
            </motion.p>
            <motion.div
              className="d-flex gap-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delays: 0.6, ease: "easeOut" }}
            >
             <button
  className="btn btn-lg fw-bold custom-btn-1"
  onClick={() => navigate('/freetrail')}
>
  BOOK FREE TRIAL
</button>

<button
  className="btn btn-lg fw-bold custom-btn-2"
  onClick={() => navigate('/islamic-courses')}
>
  VIEW COURSE
</button>
             </motion.div>
          </div>

          {/* Image Section - Right Side */}
          <div className="col-md-6 text-center order-1 order-md-2">
            <motion.div
              className="p-3 rounded d-inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="https://eilaf101.com/wp-content/uploads/2023/08/Learn-Arabic-Language-Eilaf.png"
                alt="Arabic Language Course"
                className="img-fluid rounded"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Import Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseSections2() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate()

  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("course-section-2");
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
    <section className="py-5" id="course-section-2" style={{backgroundColor:"rgb(246, 255, 254)"}}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section - Left Side */}
          <div className="col-md-6 text-center">
            <motion.img
              src="/section2.png"
              alt="Quran Reading Basics"
              className="img-fluid rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2,  ease: "easeOut" }}
            />
          </div>

          {/* Text Section - Right Side */}
          <div className="col-md-6 text-md-start mt-5 mt-md-0">
            <motion.h5
              className="fw-bold mb-3"
              style={{color:"#19473c"}}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Quran Recitation with <span style={{ color: "#19473c" }}>Tajweed</span> Course
            </motion.h5>
            <motion.h2
              className="mb-3"
              style={{ color: "#c2912e" }}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              Learn <span style={{ color: "#c2912e" }}>Quran</span> Recitation with Tajweed
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              Learn to recite the Quran with Tajweed through one-on-one sessions with the best Quran reciters & Sheikhs who guide you step-by-step until you recite the Quran the same way Prophet Muhammad (PBUH) recited it.
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
</button>       </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
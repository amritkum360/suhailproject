// Import Framer Motion
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseSections() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("course-section");
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
    <>
     <div className="row bg-light" id="row-629543701">
  <div id="col-1013642367" className="col small-12 large-12">
    <div className="col-inner text-center">
      <div 
        className="button-wrapper"
        style={{
          display: 'inline-block',
          position: 'relative'
        }}
        onMouseEnter={() => {
          document.querySelector('.testimonial-divider').style.width = '120px';
          document.querySelector('.testimonial-divider').style.height = '4px';
        }}
        onMouseLeave={() => {
          document.querySelector('.testimonial-divider').style.width = '60px';
          document.querySelector('.testimonial-divider').style.height = '3px';
        }}
      >
        <a
          to="/testimonial" 
          className="button primary is-underline is-large"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            fontSize: '24px',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#006400',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            overflow: 'hidden',
            fontWeight: '900',
            marginTop:'20px'
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>
            ALL TESTIMONIALS
          </span>
        </a>
        <div 
          className="testimonial-divider mx-auto" 
          style={{
            background: '#c2912e',
            width: '60px',
            height: '3px',
            transition: 'all 0.3s ease',
            marginTop: '10px'
          }}
          onMouseEnter={() => {
            document.querySelector('.testimonial-divider').style.width = '120px';
            document.querySelector('.testimonial-divider').style.height = '4px';
          }}
        ></div>
      </div>
    </div>
  </div>
</div>

    <section className="py-5 bg-light" id="course-section">
      
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 order-2 order-lg-1 text-lg-start">
            <motion.h5
              className="fw-bold mb-3 mt-5"
              style={{ color: "#19473c" }}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span style={{ color: "#19473c" }}>Quran</span> Reading Basics Course
            </motion.h5>
            <motion.h2
              className="mb-3"
              style={{ color: "#c2912e" }}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              Learn <span style={{ color: "#c2912e" }}>Quran</span> Reading Basics
            </motion.h2>
            <motion.p
              className="text-muted"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              Learn the basics of Quran reading online with the best tutors. Read Arabic letters, words, verses, and become fluent in reading the whole Quran.
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

          {/* Image Section */}
          <div className="col-lg-6 col-md-12 text-center order-1 order-lg-2">
            <motion.img
              src="/quran-2.png"
              alt="Quran Reading Basics"
              className="img-fluid rounded "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

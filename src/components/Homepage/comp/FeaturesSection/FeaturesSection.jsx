// import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegSmile, FaClock, FaUserGraduate } from "react-icons/fa";
import "./FeaturesSection.css"
export default function FeaturesSection() {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        {/* Mobile: Horizontal row | Desktop: 3 columns */}
        <div className="d-flex flex-nowrap flex-md-wrap align-items-center justify-content-center text-center gap-1 gap-md-3">
          
          {/* Free Trial Classes */}
          <div className="d-flex flex-column align-items-center px-2">
            <FaRegSmile size={40} className="text-warning mb-2" />
            <h6 className="fw-bold fs-6 fs-md-4">Free Trial</h6>
            <p className="d-none d-md-block text-light">
              2 free trial classes for all courses.
            </p>
            <a href="/freetrail" className="fw-bold text-warning text-decoration-none fs-6 fs-md-5">
              BOOK NOW
            </a>
          </div>

          {/* Flexible Timing */}
          <div className="d-flex flex-column align-items-center px-2">
            <FaClock size={40} className="text-warning mb-2" />
            <h6 className="fw-bold fs-6 fs-md-4">Flexible Timing</h6>
            <p className="d-none d-md-block text-light">
              24/7 available teachers.
            </p>
            <a href="/freetrail" className="fw-bold text-warning text-decoration-none fs-6 fs-md-5">
              BOOK NOW
            </a>
          </div>

          {/* Female Tutors */}
          <div className="d-flex flex-column align-items-center px-2">
            <FaUserGraduate size={40} className="text-warning mb-2" />
            <h6 className="fw-bold fs-6 fs-md-4">Female Tutors</h6>
            <p className="d-none d-md-block text-light">
              Experienced female tutors available.
            </p>
            <a href="/freetrail" className="fw-bold text-warning text-decoration-none fs-6 fs-md-5">
              BOOK NOW
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

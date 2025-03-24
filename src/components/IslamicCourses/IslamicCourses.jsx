// import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Homepage/comp/Footer/Footer";
import "./IslamicCourses.css"; // Custom CSS for hover effect

export default function IslamicCourses() {
  return (
    <>
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">QURAN RECITATION WITH TAJWEED</h1>
          <p className="lead">
            ELLAF offers personalized online Islamic studies such as: Quran, Arabic Language, Islamic Studies for both kids & adults.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Islamic Studies Course */}
          <div className="col-md-4">
            <div className="card h-100 shadow course-card">
              <img
                src="/quran-2.png"
                alt="Islamic Studies"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">QURAN RECITATION WITH TAJWEED</h3>
                <p className="card-text">
                  Our Islamic tutors can start with you from the basics of Quran and beliefs of Islam to advanced Quranic sciences and Islamic knowledge.
                </p>
                <a href="#" className="btn btn-primary">COURSE DETAILS</a>
              </div>
            </div>
          </div>
          {/* Islamic Studies Course */}
          <div className="col-md-4">
            <div className="card h-100 shadow course-card">
              <img
                src="/quran-2.png"
                alt="Islamic Studies"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">ISLAMIC STUDIES</h3>
                <p className="card-text">
                  Our Islamic tutors can start with you from the basics of Quran and beliefs of Islam to advanced Quranic sciences and Islamic knowledge.
                </p>
                <a href="#" className="btn btn-primary">COURSE DETAILS</a>
              </div>
            </div>
          </div>

          {/* New Muslim Converts Course */}
          <div className="col-md-4">
            <div className="card h-100 shadow course-card">
              <img
                src="/quran-2.png"
                alt="New Muslim Converts"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">LEARN DAILY SUPPLICATION</h3>
                <p className="card-text">
                  This course is a lifeline for new Muslims because they will learn all that they need to know about the Islamic religion.
                </p>
                <a href="#" className="btn btn-primary">COURSE DETAILS</a>
              </div>
            </div>
          </div>

          {/* The Five Pillars of Islam Course */}
          <div className="col-md-4">
            <div className="card h-100 shadow course-card">
              <img
                src="/quran-2.png"
                alt="Five Pillars of Islam"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">QURAN TAFSEER
                </h3>
                <p className="card-text">
                  All the information that Muslims want to know about those points will be provided to them in this course.
                </p>
                <a href="#" className="btn btn-primary">COURSE DETAILS</a>
              </div>
            </div>
          </div>

          {/* The Five Pillars of Islam Course */}
          <div className="col-md-4">
            <div className="card h-100 shadow course-card">
              <img
                src="/quran-2.png"
                alt="Five Pillars of Islam"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">ARABIC CLASSES
                </h3>
                <p className="card-text">
                  All the information that Muslims want to know about those points will be provided to them in this course.
                </p>
                <a href="#" className="btn btn-primary">COURSE DETAILS</a>
              </div>
            </div>
          </div>


          {/* The Five Pillars of Islam Course */}
          <div className="col-md-4">
            <div className="card h-100 shadow course-card">
              <img
                src="/quran-2.png"
                alt="Five Pillars of Islam"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">ADVANCE TAJWEED
                </h3>
                <p className="card-text">
                  All the information that Muslims want to know about those points will be provided to them in this course.
                </p>
                <a href="#" className="btn btn-primary">COURSE DETAILS</a>
              </div>
            </div>
          </div>


          {/* The Five Pillars of Islam Course */}
          <div className="col-md-4">
            <div className="card h-100 shadow course-card">
              <img
                src="/quran-2.png"
                alt="Five Pillars of Islam"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">Quran Memorization(HIFZ)

                </h3>
                <p className="card-text">
                  All the information that Muslims want to know about those points will be provided to them in this course.
                </p>
                <a href="#" className="btn btn-primary">COURSE DETAILS</a>
              </div>
            </div>
          </div>


          {/* The Five Pillars of Islam Course */}
          <div className="col-md-4">
            <div className="card h-100 shadow course-card">
              <img
                src="/quran-2.png"
                alt="Five Pillars of Islam"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-bold">NOORANI QAIDA
                </h3>
                <p className="card-text">
                  All the information that Muslims want to know about those points will be provided to them in this course.
                </p>
                <a href="#" className="btn btn-primary">COURSE DETAILS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <Footer />
    </>
  );
}
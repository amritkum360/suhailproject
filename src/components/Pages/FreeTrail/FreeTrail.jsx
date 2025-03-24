import React, { useState } from "react";
import Footer from "../../Homepage/comp/Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    course: "",
    time: "",
    date: "",
    notes: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // To track submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbyAe-YautlVEkZZumFQE1xbhDL3xD-nsxh-hK62xGeU4fnBKX-BHrz0LvGZTyjIZU6iLQ/exec";

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) // Ensure we parse the JSON response
      .then(() => {
        setSubmissionStatus("success"); // Show success message
        setFormData({
          name: "",
          email: "",
          mobile: "",
          country: "",
          course: "",
          time: "",
          date: "",
          notes: "",
        }); // Clear inputs
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmissionStatus("success"); // Still show success message
        setFormData({
          name: "",
          email: "",
          mobile: "",
          country: "",
          course: "",
          time: "",
          date: "",
          notes: "",
        }); // Ensure inputs are cleared even on error
      });
  };

  return (
    <>
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg p-4" style={{ backgroundColor: "#f0fff0" }}>
          <h2 className="text-center mb-4" style={{ color: "#006400" }}>📚 Book Free Trial</h2>
          {submissionStatus === "success" && (
            <div className="alert alert-success" role="alert">
              Request Submitted Successfully!
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="alert alert-danger" role="alert">
              Error in submitting the request. Please try again.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ borderColor: "#006400" }}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ borderColor: "#006400" }}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                style={{ borderColor: "#006400" }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="country"
                placeholder="Your Country"
                value={formData.country}
                onChange={handleChange}
                required
                style={{ borderColor: "#006400" }}
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                style={{ borderColor: "#006400" }}
              >
                <option value="">Choose Course</option>
                <option value="QURAN RECITATION WITH TAJWEED">QURAN RECITATION WITH TAJWEED</option>
                <option value="ISLAMIC STUDIES">ISLAMIC STUDIES</option>
                <option value="LEARN DAILY SUPPLICATION">LEARN DAILY SUPPLICATION</option>
                <option value="QURAN TAFSEER">QURAN TAFSEER</option>
                <option value="ARABIC CLASSES">ARABIC CLASSES</option>
                <option value="ADVANCE TAJWEED">ADVANCE TAJWEED</option>
                <option value="Quran Memorization(HIFZ)">Quran Memorization(HIFZ)</option>
                <option value="NOORANI QAIDA">NOORANI QAIDA</option>
                <option value="LEARN TEN QIRATS">LEARN TEN QIRATS</option>
                <option value="Urdu Classes">Urdu Classes</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: "#006400" }}>Choose The Time</label>
              <div className="d-flex flex-wrap gap-2">
                {["6:00", "6:30", "7:00", "7:30", "8:00", "8:30"].map((time) => (
                  <div key={time} className="btn-group" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="time"
                      id={`time-${time}`}
                      value={time}
                      onChange={handleChange}
                    />
                    <label className="btn btn-outline-success" htmlFor={`time-${time}`}>
                      {time}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label style={{ color: "#006400" }}>Choose The Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                style={{ borderColor: "#006400" }}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                name="notes"
                placeholder="Additional Notes"
                value={formData.notes}
                onChange={handleChange}
                style={{ borderColor: "#006400" }}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>
  );
};

export default FreeTrial;
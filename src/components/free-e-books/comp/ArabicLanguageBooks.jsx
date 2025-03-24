import React from "react";
import "./MushafsSection.css"; // Import custom CSS

const mushafs = [
  {
    id: 1,
    title: "Madinah Book",
    description: "You can download the series with many different resources from the series author’s Blog.",
  },
  {
    id: 2,
    title: "Al Arabiyyah Bayna Yadayk",
    description: "Arabic At Your Hands Series from the basic level and continues till mastering Arabic language.",
  },
  {
    id: 3,
    title: "Al Kitab Al Asasi ",
    description: "Al Kitab Al Asasi Series in Modern Standard Arabic for non-native speakers.",
  }
];

const ArabicLanguageBooks = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4 fw-bold text-uppercase">MUSHAFS</h2>
        <div className="row justify-content-center">
          {mushafs.map((mushaf) => (
            <div key={mushaf.id} className="col-md-4 mb-4">
              <div className="mushaf-card shadow-sm p-4 rounded">
                <div className="icon-container">
                  <img src="/quran-icon.png" alt="Quran Icon" className="quran-icon" />
                </div>
                <h5 className="fw-bold mt-3">{mushaf.title}</h5>
                <p className="text-muted">{mushaf.description}</p>
                <a href="#" className="btn btn-outline-success">DOWNLOAD NOW</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArabicLanguageBooks;

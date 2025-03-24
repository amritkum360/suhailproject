import React from "react";
import "./MushafsSection.css"; // Import custom CSS

const mushafs = [
  {
    id: 1,
    title: "مصحف المدينة",
    description: "The AL-Madinah Holy Quran is originally hard cover book with Uthmani Osmani Script.",
  },
  {
    id: 2,
    title: "مصحف التجويد مُلَوَّنٌ",
    description: "Colored Mushaf Al tajweed facilitates the provisions of reciting the Holy Quran using colors.",
  },
  {
    id: 3,
    title: "المصحف العثمانى (خط كبير)",
    description: "Al Quran Al-Kareem, (Large size) green colour Mushaf with Uthmani Osmani Script.",
  }
];

const FoundationBooks = () => {
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

export default FoundationBooks;

import React from "react";
import "./MushafsSection.css"; // Import custom CSS

const mushafs = [
  {
    id: 1,
    title: "Your Tajweed Made Easy",
    description: "A step by step guide to basic Tajweed rules with explanation notes to understand Tajweed rules.",
  },
  {
    id: 2,
    title: "Tajweed Rules (3 Parts)",
    description: "This Tajweed series consists of 3 books and Mostly covering all the levels from beginner to advanced. ",
  },
  {
    id: 3,
    title: "The Articulation Points of The Arabic Letters",
    description: "The Articulation points (Makharij) of the Arabic letters with pictures.",
  },
  {
    id: 4,
    title: "التجويد المُبَسَّطْ للمبتدئين",
    description: "Modern, simplified and comprehensive studies of all Tajweed rules for beginners.",
  },
  {
    id: 5,
    title: "الملخص المفيد فى علم التجويد",
    description: "Learn Tajweed with color coding of Tajweed rules. In addition to Questions & exercises.",
  },
  {
    id: 6,
    title: "Matn Tuhfatul-Atfal and Al-Jazariyah",
    description: "The Arabic text of the two poems most memorized by Tajweed learners.",
  }
];

const TajweedBooks = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4 fw-bold text-uppercase">Tajweed Books</h2>
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

export default TajweedBooks;

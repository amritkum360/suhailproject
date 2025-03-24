import React from "react";
import "./MushafsSection.css"; // Import custom CSS

const mushafs = [
  {
    id: 1,
    title: "The New Muslim Guide",
    description: "Simple rules and important Islamic guidelines for new Muslims in all aspects of life",
  },
  {
    id: 2,
    title: "Aqidah For Beginners",
    description: "13 lessons In Aqidah for beginners including: pillars of Iman, Belief in the unseen, etc. ",
  },
  {
    id: 3,
    title: "How To Pray",
    description: "Do you know how to perform Salah? This book is a complete guide to Faridah Salat",
  },
  {
    id: 4,
    title: "Hisnul Muslim",
    description: "Fortress of the Muslim is a book of Invocations from the Qur’an & Sunnah to protect the Muslim.",
  },
  {
    id: 5,
    title: "40 Hadiths for Children with Stories",
    description: "It puts a wonderful method to help children learn and embrace Hadith of Prophet Muhammad.",
  },
  {
    id: 6,
    title: "Tafseer of The Last Tenth of the noble Quran",
    description: "Explanation of the last 3 Juz from Quran with crucial matters in the life of a Muslim.",
  }
];

const IslamicStudiesBooks = () => {
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

export default IslamicStudiesBooks;

// import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Endrit Selita",
    location: "UK",
    image: "https://eilaf101.com/wp-content/uploads/2023/08/Avatar-Female.jpg",
    rating: 5,
    feedback:
      "Brilliant teacher, well spoken, makes sure you stop making mistakes, and makes the pronunciation of letters really easy.",
  },
  {
    id: 2,
    name: "Sarah Khan",
    location: "USA",
    image: "https://eilaf101.com/wp-content/uploads/2023/08/Avatar-Female.jpg",
    rating: 5,
    feedback:
      "Amazing experience! The tutors are very patient and knowledgeable. My kids love learning here.",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    location: "Canada",
    image: "https://eilaf101.com/wp-content/uploads/2023/08/Avatar-Female.jpg",
    rating: 5,
    feedback:
      "Highly recommend! The classes are flexible, and the teachers make learning enjoyable.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">OUR STUDENTS FEEDBACK</h2>
        
        <p className="text-muted mb-3">What do the people say about attarbiyahinternationalacademy.com?</p>
        <div className="divider mx-auto" style={{background:'#c2912e', marginBottom:"20px", width:'60px'}}></div>
    
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
          >
            {testimonials.map((testi) => (
              <SwiperSlide key={testi.id}>
  <div 
    className="bg-white p-4 text-center mx-auto d-flex flex-column align-items-center" 
    style={{ 
      maxWidth: "800px",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
  >
    <img
      src={testi.image}
      alt={testi.name}
      className="rounded-circle mb-3"
      width="100"
      style={{
        border: "3px solid #f8f9fa",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        objectFit: "cover"
      }}
    />
    <div className="mb-3 d-flex justify-content-center">
  {[...Array(testi.rating)].map((_, i) => (
    <FaStar key={i} className="text-warning mx-1" size={24} />
  ))}
</div>

    <p 
      className="fst-italic mb-4 px-3 text-center" 
      style={{
        fontSize: "1.1rem",
        lineHeight: "1.6",
        color: "#555"
      }}
    >
      {testi.feedback}
    </p>
    <h6 className="fw-bold mb-1" style={{color: "#19473c"}}>{testi.name}</h6>
    <span className="text-muted">{testi.location}</span>
  </div>
</SwiperSlide>
            ))}
          </Swiper>
          <button 
            className="prev-btn position-absolute top-50 start-0 translate-middle-y btn btn-light p-3" 
            style={{
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              border: "none",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <FaChevronLeft size={20} />
          </button>
          <button 
            className="next-btn position-absolute top-50 end-0 translate-middle-y btn btn-light p-3" 
            style={{
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              border: "none",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
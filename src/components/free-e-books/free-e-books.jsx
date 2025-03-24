import Footer from "../Homepage/comp/Footer/Footer";
import ArabicLanguageBooks from "./comp/ArabicLanguageBooks";
import FoundationBooks from "./comp/foundationBooks";
import IslamicStudiesBooks from "./comp/IslamicStudiesBooks";
import MushafsSection from "./comp/MushafsSection";
import TajweedBooks from "./comp/TajweedBooks";

export default function FreeEBooks() {
    return(
        <>
        <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          height: "250px",
          backgroundImage:
            "url('https://eilaf101.com/wp-content/uploads/2023/08/Pricing-Eilaf.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            textTransform: "uppercase",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Get The Best FREE Islamic E-BOOKS
        </h1>
      </div>
          <MushafsSection />
          <TajweedBooks />
          <FoundationBooks />
          <IslamicStudiesBooks />
          <ArabicLanguageBooks />
          <Footer />
      </>
    )
}
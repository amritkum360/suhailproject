import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HSection() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-white ">
        {/* Left side - Image */}
        <motion.div
        className="w-full md:w-1/2 p-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/course2.png" // Replace with your image path
          alt="Section Visual"
          className="rounded-xl w-full h-auto object-cover"
        />
      </motion.div>
  
        {/* Right side - Heading and Button */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-start justify-center space-y-4">
        <h2
  className="text-3xl font-bold text-center"
  style={{ color: "#19473c", fontWeight: "700" }}
>
Islamic Studies Courses
</h2>
          <p className="text-gray-600">This course will help you or your kids to learn various
islamic studies programs including but not limited to pillars of Islam, Fiqh, Aqidah, Tafsir, Hadith, Dua (Supplication), Islamic Manners, and Seerah of the Prophet Muhammad (PBUH). Our Islamic tutors can start with you from the basics of Quran and beliefs of Islam to advanced Quranic sciences and Islamic knowledge. Whether you are new revert to Islam or want to raise your children upon Islamic manners & teachings, this course is your key to achieve your goals.</p>
          <Link
  to="/freetrail"
  className="inline-block mt-6  text-white font-semibold py-2 px-6 rounded-lg transition duration-300" style={{background:"#19473c", fontSize:"22px", fontWeight:"700"}}
>
Book Free Trial Class
</Link>

        </div>
      </div>
    );
  }
  
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
Quran classes for females

</h2>
          <p className="text-gray-600">Muslims must teach their kids the holy Quran, but many parents have a lot of commitments and don’t have enough time to teach their kids, so we offer them this course. The Quran classes for kids aim to teach the kids the holy Quran by making them understand the meaning of each Ayat and also memorize the surah of the Quran. Kids can memorize the holy Quran faster than adults because of their fresh minds, and they also don’t have any compassion, so we need to teach them the holy Quran to understand and memorize it.</p>
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
  
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
online ijazah course

</h2>
          <p className="text-gray-600">This course will help you to get qualified for obtaining ijaza in quran Recitation with Tajweed or Quran Memorization (Hifz) through one-to-one online sessions with Ijazah certified Quran Sheikhs. At the end of course after passing tests & evaluations successfully, you will get the corresponding Ijazah certificate. During the course, our certified teachers will walk with you step-by-step from the basics of the Quran to the excellent level when you are ready to teach the words of Allah (SWT) to others.

</p>
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
  
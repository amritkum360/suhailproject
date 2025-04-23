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
online Quran reading
</h2>
          <p className="text-gray-600">The Online Quran Reading course is designed to help students learn how to read the holy Quran correctly and properly. This course’s purpose is to help non-Arabs or new Muslims read the holy Quran because it’s not a hard process, but it needs some help in the beginning until knowing some rules of Tajweed and how to pronounce Arabic letters correctly.</p>
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
  
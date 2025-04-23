import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import IslamicCourses from "./components/IslamicCourses/IslamicCourses";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Plans from "./components/Pages/fee-and-plans/fee-and-plans";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy";
import FreeTrail from "./components/Pages/FreeTrail/FreeTrail";
import Navbar from "./components/Homepage/comp/Nav/navbar";
import FreeEBooks from "./components/free-e-books/free-e-books";
import NooraniQaida from "./components/courses/Noorani Qaida/NooraniQaida";
import OnlineQuranReading from "./components/courses/Online Quran Reading/OnlineQuranReading";
import QuranClassesForAdults from "./components/courses/Quran Classes For Adults/QuranClassesForAdults";
import QuranClassesForBegginers from "./components/courses/Quran Classes For Beginners/QuranClassesForBegginers";
import QuranClassesForKids from "./components/courses/Quran Classes For Kids/QuranClassesForKids";
import QuranClassesForFemales from "./components/courses/Quran Classes For Females/QuranClassesForFemales";
import QuranReadingCoursesForKids from "./components/courses/Quran Reading Courses For Kids/QuranReadingCoursesForKids";
import QuranTajweedCourseForKids from "./components/courses/Quran Tajweed Course For Kids/QuranTajweedCourseForKids";
import SunniOnlineCourses from "./components/courses/Sunni Online Courses/SunniOnlineCourses";
import OnlineIjazahCourse from "./components/courses/Online Ijazah Course/OnlineIjazahCourse";
import QuranQiratClasses from "./components/courses/quran qirat classes/QuranQiratClasses";
import OnlineQuranMemorizationClasses from "./components/courses/Online Quran Memorization Classes/OnlineQuranMemorizationClasses";
import LearnReadQuranOnline from "./components/courses/Learn Read Quran Online/LearnReadQuranOnline";
import OnlineArabicGrammarCourse from "./components/courses/Online Arabic Grammar Course/OnlineArabicGrammarCourse";
import EgyptianArabicLanguageCourse from "./components/courses/Egyptian Arabic language course/EgyptianArabicLanguageCourse";
import OnlineArabicClasses from "./components/courses/online arabic classes/OnlineArabicClasses";
import ConversationalArabicCourse from "./components/courses/Conversational arabic course/ConversationalArabicCourse";
import IslamicStudiesCourses from "./components/courses/Islamic Studies Courses/IslamicStudiesCourses";
import NewMuslimConvertsCourse from "./components/courses/New Muslim Converts Course/NewMuslimConvertsCourse";
import QuranTafseercourse from "./components/courses/Quran Tafseer course/QuranTafseercourse";
import TheFivePillarsofIslamcourse from "./components/courses/The Five Pillars of Islam course/TheFivePillarsofIslamcourse";
// import Navbar from "./components/Navbar/Navbar"; // Navigation Component

export default function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/islamic-courses" element={<IslamicCourses />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/freetrail" element={<FreeTrail />} />
        <Route path="/free-e-books" element={<FreeEBooks />} />
        {/* Add more routes as needed */}
        <Route path="/noorani-qaida" element={<NooraniQaida />} />
        <Route path="/online-quran-reading" element={<OnlineQuranReading />} />
        <Route path="/quran-classes-for-adults" element={<QuranClassesForAdults />} />
        <Route path="/quran-classes-for-begginers" element={<QuranClassesForBegginers />} />
        <Route path="/quran-classes-for-kids" element={<QuranClassesForKids />} />
        <Route path="/quran-classes-for-females" element={<QuranClassesForFemales />} />
        <Route path="/quran-reading-courses-for-kids" element={<QuranReadingCoursesForKids />} />
        <Route path="/quran-tajweed-course-for-kids" element={<QuranTajweedCourseForKids />} />
        <Route path="/sunni-online-courses" element={<SunniOnlineCourses />} />
        <Route path="/quran-ijazah-course" element={<OnlineIjazahCourse />} />
        <Route path="/quran-qirat-classes" element={<QuranQiratClasses />} />
        <Route path="/online-quran-memorization-classes" element={<OnlineQuranMemorizationClasses />} />
        <Route path="/learn-read-quran-online" element={<LearnReadQuranOnline />} />
        <Route path="/online-arabic-grammar-course" element={<OnlineArabicGrammarCourse />} />
        <Route path="/egyptian-arabic-language-course" element={<EgyptianArabicLanguageCourse />} />
        <Route path="/online-arabic-classes" element={<OnlineArabicClasses />} />
        <Route path="/conversational-arabic-course" element={<ConversationalArabicCourse />} />
        <Route path="/islamic-studies-courses" element={<IslamicStudiesCourses />} />
        <Route path="/new-muslim-converts-course" element={<NewMuslimConvertsCourse />} />
        <Route path="/quran-tafseer-course" element={<QuranTafseercourse />} />
        <Route path="/the-five-pillars-of-islam-course" element={<TheFivePillarsofIslamcourse />} />
      </Routes>
    </Router>
  );
}

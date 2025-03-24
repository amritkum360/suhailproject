import AboutEilaf from "./comp/AboutEilaf/AboutEilaf";
import AboutSection from "./comp/AboutSection/AboutSection";
import CourseSections2 from "./comp/CourseSections.jsx/CourseSection2";
import CourseSections3 from "./comp/CourseSections.jsx/CourseSection3";
import CourseSections4 from "./comp/CourseSections.jsx/CourseSection4";
import CourseSections5 from "./comp/CourseSections.jsx/CourseSection5";
import CourseSections6 from "./comp/CourseSections.jsx/CourseSection6";
import CourseSections7 from "./comp/CourseSections.jsx/CourseSection7";
import CourseSections8 from "./comp/CourseSections.jsx/CourseSection8";
import CourseSections from "./comp/CourseSections.jsx/CourseSections";
import FeaturesSection2 from "./comp/FeatureSection2/FeatureSection2";
import FeaturesSection from "./comp/FeaturesSection/FeaturesSection";
import Footer from "./comp/Footer/Footer";
import HeroSection from "./comp/HeroSection/HeroSection";
import Navbar from "./comp/Nav/navbar";
import ResourceSection from "./comp/ResourceSection/ResourceSection";
import StepsSection from "./comp/StepsSection/StepsSection";
import SubscriptionSection from "./comp/SubscriptionSection/SubscriptionSection";
import Testimonials from "./comp/Testimonials/Testimonials";

export default function Homepage(){
    return(
        <>
        {/* <Navbar /> */}
        <HeroSection />
        <FeaturesSection />
        <div className="divider mx-auto" style={{background:'#c2912e', width:'100%'}}></div>
        <Testimonials />
        <AboutSection />
       
        <CourseSections />
        <CourseSections2 />
        <CourseSections3 />
        <CourseSections4 />
        <CourseSections5 />
        <CourseSections6 />
        <CourseSections7 />
        <CourseSections8 />
        <FeaturesSection2 />
        <StepsSection />
        <AboutEilaf />
        
        <ResourceSection />
        <SubscriptionSection />
        <Footer />
            </>
    )
}
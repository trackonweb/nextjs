import HeroSection from "@/components/courses_category/graphic_design";
import BestCourse from "@/components/courses_category/graphic_design/BestCourse";
import Certificate from "@/components/courses_category/graphic_design/Certificate";
import Faq from "@/components/courses_category/graphic_design/Faq";
import Learner from "@/components/courses_category/graphic_design/Learner";
import Technologies from "@/components/courses_category/graphic_design/Technologies";
import Enroll from "@/components/explore_courses/Enroll";


export default function Page(){
    return(
        <>
        
        <HeroSection/>
        <Technologies/>
        <BestCourse/>
         <Enroll/>
        <Certificate/>
        <Learner/>
        <Faq/>
        </>
    )
}

export function generateMetadata(){
    return {
        title: "Advanced Graphic Designing Course in Jaipur | Free Internship",
        description:
          `Join us! to create the most advanced graphic designs from scratch – Become a master in Adobe Photoshop, Illustrator, Coral Draw, InDesign, Lightroom, and Canva`,
       
    }
}
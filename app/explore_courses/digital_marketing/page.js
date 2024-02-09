import HeroSection from "@/components/courses_category/digital_marketing";
import BestCourse from "@/components/courses_category/digital_marketing/BestCourse";
import Certificate from "@/components/courses_category/digital_marketing/Certificate";
import Faq from "@/components/courses_category/digital_marketing/Faq";
import Learner from "@/components/courses_category/digital_marketing/Learner";
import Technologies from "@/components/courses_category/digital_marketing/Technologies";
import Enroll from "@/components/explore_courses/Enroll";

export default function Page (){
    return (
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
        title: "Best Digital Marketing Course with Internship in Jaipur",
        description:
          `Get the best digital marketing course with an internship in Jaipur at Trackonweb. Grow your skills and secure your future with our leading IT institute.`,
          
    }
  }
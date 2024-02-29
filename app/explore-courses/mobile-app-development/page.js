import HeroSection from "@/components/courses_category/mobileapp_development";
import BestCourse from "@/components/courses_category/mobileapp_development/BestCourse";
import Certificate from "@/components/courses_category/mobileapp_development/Certificate";
import Faq from "@/components/courses_category/mobileapp_development/Faq";
import Learner from "@/components/courses_category/mobileapp_development/Learner";
import Technologies from "@/components/courses_category/mobileapp_development/Technologies";
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
        title: "Learn Cross-Platform  with Flutter ",
        description:
          `Learn innovative cross-platform . Become a master in Android application development and iOS application development using Flutter`,
          
    }
  }
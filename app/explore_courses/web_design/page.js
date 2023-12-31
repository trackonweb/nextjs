import HeroSection from "@/components/courses_category/web_design";
import BestCourse from "@/components/courses_category/web_design/BestCourse";
import Certificate from "@/components/courses_category/web_design/Certificate";
import Faq from "@/components/courses_category/web_design/Faq";
import Learner from "@/components/courses_category/web_design/Learner";
import Technologies from "@/components/courses_category/web_design/Technologies";
import Enroll from "@/components/explore_courses/Enroll";

export default function Page (){
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
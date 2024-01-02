import HeroSection from "@/components/courses_category/ui_ux";
import BestCourse from "@/components/courses_category/ui_ux/BestCourse";
import Certificate from "@/components/courses_category/ui_ux/Certificate";
import Faq from "@/components/courses_category/ui_ux/Faq";
import Learner from "@/components/courses_category/ui_ux/Learner";
import Technologies from "@/components/courses_category/ui_ux/Technologies";
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
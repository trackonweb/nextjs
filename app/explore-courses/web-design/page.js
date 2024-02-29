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

export function generateMetadata(){
    return {
        title: "Responsive Web Design Expert course in Jaipur - [2024]",
        description:
          "Become a Responsive Web Design Expert. Join our web design course in Jaipur with a Free Internship in 2024. Call us at +91 8233330466 | Book your demo class now",
       
    }
}
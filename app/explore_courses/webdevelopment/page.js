import HeroSection from '@/components/courses_category/web_development';
import BestCourse from '@/components/courses_category/web_development/BestCourse';
import Certificate from '@/components/courses_category/web_development/Certificate';
import Faq from '@/components/courses_category/web_development/Faq';
import Learner from '@/components/courses_category/web_development/Learner';
import Technologies from '@/components/courses_category/web_development/Technologies';
import Enroll from '@/components/explore_courses/Enroll';

export default function Page() {
  return (
    <>
      <HeroSection />
      <Technologies />
      <BestCourse />
      <Enroll />
      <Certificate />
      <Learner />
      <Faq />
    </>
  );
}

export function generateMetadata(){
  return {
      title: "Master Web Development Training in Jaipur with free internship 2024",
      description:
        `Web development training in Jaipur with Free Internship and Certification. Learn HTML, CSS, JavaScript, ReactJS, and more. Join us to get training from Experts. Book your demo class now!`,
        
  }
}

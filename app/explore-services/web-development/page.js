
import Technologies from '@/components/courses_category/web_development/Technologies';
import WebDevelopmentServices from '@/components/services_category/web_development';
import Banner from '@/components/services_category/web_development/Banner';
import ClientReviews from '@/components/services_category/web_development/ClientReview';
import Faq from '@/components/services_category/web_development/Faq';
import FeaturedServices from '@/components/services_category/web_development/FeaturedServices';
import Offer from '@/components/services_category/web_development/Offer';



export default function page() {
  return (
    <>
    <WebDevelopmentServices/>
    <Offer/>
    <Technologies />
    <FeaturedServices/>
  
    <Banner/>
    <ClientReviews/> 
    <Faq />

      {/* <Customizable />
      <Creative />
 
      <Performence />
      <Discuss />
    */}
    </>
  );
}
export function generateMetadata(){
  return {
      title: "Best Website Development Company in Jaipur",
      description:
        `We offer best web development services including Php, Node Js, React,  WordPress,  Next Js, Python, Angular Js, Vue Js and Ecommerce development.`,
       
     
  }
}

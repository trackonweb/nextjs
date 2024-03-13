
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
  
    <Banner heading={'Unlock Clarity Unveiling Transparent Costs for Web App Development Services'}/>
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
      title: "Get the Best and Affordable Web Development Services",
      description:
        `Explore our top-notch web development services for healthcare, real estate, e-commerce, Small Business, and more. Affordable, responsive, and SEO-friendly websites. Hurry and call now at +91 8233330466.`,
       
     
  }
}

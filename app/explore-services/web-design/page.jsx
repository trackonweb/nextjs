
import WebServices from '@/components/services_category/web_design';
import ClientReviews from '@/components/services_category/web_design/ClientReview';



import Faq from '@/components/services_category/web_design/Faq';
import FeaturedServices from '@/components/services_category/web_design/FeaturedServices';
import Offer from '@/components/services_category/web_design/Offer';

import Technologies from '@/components/services_category/web_design/Technologies';
import Banner from '@/components/services_category/web_development/Banner';


export default function Page() {
  return (
    <>
     <WebServices/>
     <Offer/>
      <Technologies />
     <FeaturedServices/>
     {/* <Banner/> */}
     <ClientReviews/>
      <Faq />
    </>
  );
}
export function generateWebDesignMetadata() {
  return {
    title: "Transform Your Digital Presence with Trackonweb's Web Design Services",
    description:
      "Discover our professional web design solutions tailored for diverse industries. From healthcare to real estate, e-commerce, and small businesses, we offer affordable, responsive, and SEO-friendly websites. Call us now at +91 8233330466 to redefine your digital presence.",
  };
}

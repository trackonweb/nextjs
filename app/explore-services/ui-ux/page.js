
import UiuxServices from '@/components/services_category/ui_ux';
import ClientReviews from '@/components/services_category/ui_ux/ClientReview';


import Faq from '@/components/services_category/ui_ux/Faq';
import FeaturedServices from '@/components/services_category/ui_ux/FeaturedServices';
import Offer from '@/components/services_category/ui_ux/Offer';

import Technologies from '@/components/services_category/ui_ux/Technologies';
import Banner from '@/components/services_category/web_development/Banner';


export default function Page() {
  return (
    <>
    <UiuxServices/>
    <Offer/>
      <Technologies />
      <FeaturedServices/>
 {/* <Banner/> */}
 <ClientReviews/>
      <Faq />
    </>
  );
}
export function generateUiUxDesignMetadata() {
  return {
    title: "Crafting Seamless Experiences with Trackonweb UI/UX Design Mastery",
    description:
      "Immerse your audience in tailored UI/UX design solutions across healthcare, real estate, e-commerce, and small businesses. Our offerings prioritize affordability, responsiveness, and innovation. Call us at +91 8233330466 to shape a new era of digital interactions.",
  };
}

import Discuss from '@/components/common/Discuss';
import DigitalMarketingServices from '@/components/services_category/digital_marketing';
import ClientReviews from '@/components/services_category/digital_marketing/ClientReview';


import Faq from '@/components/services_category/digital_marketing/Faq';
import FeaturedServices from '@/components/services_category/digital_marketing/FeaturedServices';
import Offer from '@/components/services_category/digital_marketing/Offer';

import Technologies from '@/components/services_category/digital_marketing/Technologies';
import Banner from '@/components/services_category/web_development/Banner';


export default function Page() {
  return (
    <>
    <DigitalMarketingServices/>
    <Offer/>
      <Technologies />
     <FeaturedServices/>
     {/* <Banner/> */}
     <ClientReviews/>
      <Faq />
    </>
  );
}
export function generateDigitalMarketingMetadata() {
  return {
    title: "Get Noticed Online with Our Digital Marketing Services!",
    description:
      "We can help your business stand out online! Our services include improving search engine visibility, managing social media, creating engaging content, running online ads, and analyzing results. Reach your target audience and grow your online presence with us! Call us at +91 8233330466 to boost your business!",
  };
}

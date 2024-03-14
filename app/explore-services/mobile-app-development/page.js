
import AppDevelopmentServices from '@/components/services_category/mobileapp_development';
import ClientReviews from '@/components/services_category/mobileapp_development/ClientReview';

import Customizable from '@/components/services_category/mobileapp_development/Customizable';

import Faq from '@/components/services_category/mobileapp_development/Faq';
import FeaturedServices from '@/components/services_category/mobileapp_development/FeaturedServices';
import Offer from '@/components/services_category/mobileapp_development/Offer';

import Technologies from '@/components/services_category/mobileapp_development/Technologies';
import Banner from '@/components/services_category/web_development/Banner';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <AppDevelopmentServices/>
      <Offer/>

      {/* <Customizable /> */} <Technologies />
      <FeaturedServices/>
      <Banner heading={`
Boost Your Business with Our Mobile App Services. Reach Out Today for Custom Solutions That Fit Your Needs Perfectly!`}/>
     <ClientReviews/>
      <Faq />
    </>
  );
}
export function generateMobileAppMetadata() {
  return {
    title: "Get a Powerful Mobile App for Your Business!",
    description:
      "We create awesome mobile apps for both iPhone and Android. From the idea stage to making it live, we specialize in making user-friendly apps. Call us at +91 8233330466 to bring your app dreams to life!",
  };
}


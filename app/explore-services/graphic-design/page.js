
import GraphicDesignServices from '@/components/services_category/graphic_design';
import ClientReviews from '@/components/services_category/graphic_design/ClientReview';


import Faq from '@/components/services_category/graphic_design/Faq';
import FeaturedServices from '@/components/services_category/graphic_design/FeaturedServices';
import Offer from '@/components/services_category/graphic_design/Offer';

import Technologies from '@/components/services_category/graphic_design/Technologies';
import Banner from '@/components/services_category/web_development/Banner';


export default function Page() {
  return (
    <>
       <GraphicDesignServices/>
       <Offer/>
      <Technologies />
      <FeaturedServices/>
      <Banner/>
      <ClientReviews/>
      <Faq />
      {/* <Creative />
      <Performence />
      <Discuss />
     */}
    </>
  );
}
export function generateGraphicsDesignMetadata() {
  return {
    title: "Make Your Brand Shine with Amazing Graphic Design Services!",
    description:
      "We create eye-catching Logo Design, Branding, Print, Digital Media, Web Design, Packaging, Motion Graphics, Illustrations, Infographics, Typography, Social Media Graphics, Environmental Graphics, UI/UX Design and visuals that reflect your brand's uniqueness. Let us bring creativity to your business! Call us at +91 8233330466 to give your brand a visual boost!",
  };
}

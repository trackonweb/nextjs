import Discuss from '@/components/common/Discuss';
import GraphicDesignServices from '@/components/services_category/graphic_design';
import ClientReviews from '@/components/services_category/graphic_design/ClientReview';
import Creative from '@/components/services_category/graphic_design/Creative';
import Customizable from '@/components/services_category/graphic_design/Customizable';

import Faq from '@/components/services_category/graphic_design/Faq';
import FeaturedServices from '@/components/services_category/graphic_design/FeaturedServices';
import Offer from '@/components/services_category/graphic_design/Offer';
import Performence from '@/components/services_category/graphic_design/Performence';
import Technologies from '@/components/services_category/graphic_design/Technologies';
import Banner from '@/components/services_category/web_development/Banner';
import Image from 'next/image';
import Link from 'next/link';

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

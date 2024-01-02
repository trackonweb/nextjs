
'use client'

import Hero from '@/components/home/Hero';
import Technologies from '@/components/home/Technologies';
import Features from '@/components/home/Features';
import Partner from '@/components/home/Partner';
import Services from '@/components/home/Services';
import WhyTrackonweb from '@/components/home/WhyTrackonweb';
import Testimonials from '@/components/home/Testimonials';
import CounterUp from '@/components/home/CounterUp';
import Faq from '@/components/home/Faq';
import Blogs from '@/components/home/Blogs';
import Contact from '@/components/contact/Contact';


export default function Home() {
  return (
    <>
      
      <Hero />
      <Technologies />
      <Features />
      <Partner />
      <Services />
      <WhyTrackonweb />
      <Testimonials />
      <CounterUp />
      <Faq />
      <Blogs />
      <Contact />
    </>
  );
}

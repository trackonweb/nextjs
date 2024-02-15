'use client'

import React, { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Technologies from '@/components/home/Technologies';
import Features from '@/components/home/Features';
import Services from '@/components/home/Services';
import WhyTrackonweb from '@/components/home/WhyTrackonweb';
import Testimonials from '@/components/home/Testimonials';
import CounterUp from '@/components/home/CounterUp';
import Faq from '@/components/home/Faq';
import GetInTouch from '@/components/common/GetInTouch';
import Partner from '@/components/home/Partner';
import Blogs from '@/components/home/Blogs';

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Check if the component has already been shown
    const hasBeenShown = sessionStorage.getItem('hasBeenShown');

    if (!hasBeenShown) {
      // If it hasn't been shown, set the state and show the GetInTouch component
      setShowContact(true);
      // Set the flag in session storage to indicate that the component has been shown
      sessionStorage.setItem('hasBeenShown', 'true');
    }
  }, []);

  const handleCloseContact = () => {
    setShowContact(false);
  };

  useEffect(() => {
    // Set the overflow property of the body based on the state of showContact
    document.body.style.overflow = showContact ? 'hidden' : 'auto';

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showContact]);

  return (
    <div>
      {showContact && (
        <div className=''>
          <GetInTouch handleCloseContact={handleCloseContact}/>
        </div>
      )}
      <Hero />
      <Technologies />
      <Features />
      <Partner/>
      
      <Services />
      {/* <WhyTrackonweb /> */}
      <Testimonials />
      <CounterUp />
      
      <Faq />
      <Blogs/>
    </div>
  );
}

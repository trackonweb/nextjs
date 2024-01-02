'use client';

import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import Image from 'next/image';

const Chat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '8233330466';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    window.location.href = whatsappLink;
  };

  return (
    <div className="fixed bottom-4 left-4 m-3 overflow-hidden">
      <div onClick={handleWhatsAppClick} className="no-underline overflow-hidden cursor-pointer">
        {/* <div  aria-label="whatsapp" className="bg-green-500 rounded-full">
          <WhatsAppIcon className="text-white text-6xl" />
        </div> */}
        <Image src={'/WhatsApp.svg.webp'} width={60} height={60} alt='' />
      </div>
    </div>
  );
};

export default Chat;

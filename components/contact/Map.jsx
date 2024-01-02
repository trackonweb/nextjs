import React from 'react';

const Map = () => {
  const mapStyle = {
    border: '0',
    width: '100%', // Set width to 100%
    height: '450px',
  };

  return (
    <div className='w-full'> 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2244583598335!2d75.76469277430628!3d26.86460886215831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5b5e704f083b32b%3A0x54d7c0af8c0540fd!2sTrackonweb!5e0!3m2!1sen!2sin!4v1703314887148!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

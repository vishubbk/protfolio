// components/About/About.jsx
import React from 'react';
import Popular from '../Popular';
import lottie from 'lottie-web';

import './contact-main.css';

// Define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Contact = () => {
  return (
    <>
    <div className="container">
     <div className="left">
      <div className="heading">
Contact-Us
      </div>
      <div className="text">
Need to get  in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below
      </div>
     </div>
     <div className="right"></div>
    </div>
    </>
  );
}

export default Contact;

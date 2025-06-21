import React from 'react';
import ContactBanner from '../../Components/contact/ConatctBanner';
import ContactUs from '../../Components/contact/ContactUs';
import MapSection from '../../Components/contact/MapSection';

const ContactPage = () => {
  return (
    <>
      <ContactBanner title="Contact Us" />
      <ContactUs />
      <MapSection />
    </>
  );
};

export default ContactPage;

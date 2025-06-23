import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components from Components/Pages
import FaqComp from '../../Components/Pages/FaqComponents';
import PageHeroSection from '../../Components/Pages/PageHeroSectionComponents';
import OuerMenu2 from '../../Components/Pages/OurMenuComponents';
import ErrorSection from '../../Components/Pages/ErrorComponents';

const Pages = () => {
  return (
    <Routes>
      {/* FAQ Page */}
      <Route path="/faq" element={<FaqComp />} />

      {/* Menu Page */}
      <Route
        path="/menu"
        element={
          <>
            <PageHeroSection />
            <OuerMenu2 />
          </>
        }
      />

      {/* 404 Page */}
      <Route path="/not-found" element={<ErrorSection />} />
      <Route path="*" element={<ErrorSection />} />
    </Routes>
  );
};

export default Pages;

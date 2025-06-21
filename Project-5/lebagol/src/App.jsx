// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import HeaderSection from './Components/HeaderComponents';
import FooterComponents from './Components/FooterComponents';

// Blog Standard Components
import BlogStandard from './Components/Blog/BlogStandard'

// Page-Level Components
import BlogHome from './Pages/Blog/BlogHome';
import SingleBlog from './Components/Blog/SingleBlog';
import SingleHeroSection from './Components/Blog/SingleHeroSectionComponents';
import SingleBlogSecondComponents from './Components/Blog/SingleBlogSecondComponents';

import ContactBanner from './Components/contact/ConatctBanner';
import ContactUs from './Components/contact/ContactUs';
import MapSection from './Components/contact/MapSection';
import HeroSection from './Components/blog/HeroSection';

function App() {
  return (
    <div>
      <HeaderSection />
       <Routes>
        {/* Blog Page */}
        <Route
          path="/blog"
          element={
            <>
              <HeroSection/>
              <BlogStandard/>
            </>
          }
        />

        {/* Blog GrideView Page */}
        <Route path="/blog/GrideView" element={<BlogHome />} />

        {/* Single Blog Page */}
        <Route
          path="/blog/:id"
          element={
            <>
              <SingleHeroSection />
              <SingleBlog />
              <SingleBlogSecondComponents />
            </>
          }
        />

        {/* Contact Us Page */}
        <Route
          path="/contact-us"
          element={
            <>
              <ContactBanner title="Contact Us" />
              <ContactUs />
              <MapSection />
            </>
          }
        />
      </Routes>

      <FooterComponents />
    </div>
  );
}

export default App;

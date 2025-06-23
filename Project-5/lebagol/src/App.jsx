import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderSection from './Components/HeaderComponents';
import FooterComponents from './Components/FooterComponents';

// Our Story
import AboutUs from './Components/OurStory/OurStoryComponents';

// Blog
import BlogStandard from './Components/Blog/BlogStandard';
import BlogStandardSecond from './Components/Blog/BlogStandardSecondComponents';
import BlogHome from './Pages/Blog/BlogHome';
import SingleBlog from './Components/Blog/SingleBlog';
import SingleHeroSection from './Components/Blog/SingleHeroSectionComponents';

// Contact
import ContactBanner from './Components/contact/ConatctBanner';
import ContactUs from './Components/contact/ContactUs';
import MapSection from './Components/contact/MapSection';
import HeroSection from './Components/blog/HeroSection';
import BlogPagination from './components/blog/PaginationComponents';

// Pages
import Pages from './Pages/Pages/Pages'

function App() {
  return (
    <div>
      <HeaderSection />
      <Routes>

        {/* OurStory  */}
        <Route
          path="/OurStory" element={<AboutUs />} />

        {/* Blog List */}
        <Route
          path="/blog"
          element={
            <>
              <HeroSection />
              <BlogStandard />
              <BlogPagination/>
            </>
          }
        />

        {/* Blog 2 List */}
        <Route
          path="/blog/2"
          element={
            <>
              <HeroSection />
              <BlogStandardSecond />
              <BlogPagination />
            </>
          }
        />
        {/* Blog Grid View */}
        <Route path="/blog/GrideView" element={<BlogHome />} />

        {/* Single Blog */}
        <Route
          path="/blog/:id"
          element={
            <>
              <SingleHeroSection />
              <SingleBlog />
            </>
          }
        />

        {/* Contact Page */}
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

        {/* All Pages */}
        <Route path="/*" element={<Pages />} />

      </Routes>
      <FooterComponents />
    </div>
  );
}

export default App;

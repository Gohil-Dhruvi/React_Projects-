import React from 'react';
import CardComponents from './Components/CardComponents';
import HeroSection from './Components/HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPagination from './Components/PaginationComponents';
import SingleBlog from './Components/SingleBlog';
import HeaderSection from './Components/HeaderComponents';
import FooterComponents from './Components/FooterComponents';
import SingleHeroSection from './Components/SingleHeroSectionComponents';
import SingleBlogSecondComponents from './Components/SingleBlogSecondComponents';


function App() {


  return (
    <div>
      <HeaderSection />
      <SingleHeroSection />

      {/* Blog Post Pages */}
      {/* <HeroSection />
      <CardComponents />
      <BlogPagination /> */}

      <SingleBlog />
     
      <FooterComponents />
    </div>
  );
}

export default App;
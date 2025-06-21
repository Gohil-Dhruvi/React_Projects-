import React from 'react';
import HeroSection from '../../Components/blog/HeroSection';
import CardComponents from '../../components/blog/CardComponents';
import BlogPagination from '../../components/blog/PaginationComponents';

const BlogHome = () => {
  return (
    <>
      <HeroSection />
      <CardComponents />
      <BlogPagination />
    </>
  );
};

export default BlogHome;

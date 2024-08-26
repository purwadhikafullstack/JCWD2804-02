import CreateProduct from '@/components/CreateProductPage/CreateProduct';
import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar />
      <CreateProduct />
      <Footer />
    </div>
  );
};

export default page;

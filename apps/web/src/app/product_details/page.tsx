import React from 'react';
import ProductDetails from '@/components/ProductDetailsPage/ProductDetails';
import Navbar from '@/components/HomePage/Navbar';
import Footer from '@/components/HomePage/Footer';

const page = () => {
  return (
    <div className="overflow-x-hidden h-screen">
      <div>
        <Navbar />
        <ProductDetails />
        <Footer />
      </div>
    </div>
  );
};

export default page;

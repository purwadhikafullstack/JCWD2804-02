'use client';
import React from 'react';
import Carousel from '@/components/HomePage/carousel';
import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';
import ProductCard from '@/components/HomePage/ProductCard';

const page = () => {
  const images = [
    '/images/pespor.png',
    '/images/wtf.png',
    '/images/joyland.png',
    '/images/synchronize.webp',
    '/images/lalala.jpg',
  ];

  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  return (
    <div className="overflow-x-hidden h-screen bg-white">
      <div className="z-10">
        <Navbar />
      </div>
      <div className="justify-center flex mt-7">
        <Carousel images={images} />
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          imageUrl="https://via.placeholder.com/300"
          name="Fresh Apples"
          price="20.000"
          unit="1kg"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/300"
          name="Organic Bananas"
          price="40.000"
          unit="1kg"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/300"
          name="Red Tomatoes"
          price="20.000"
          unit="500g"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/300"
          name="Red Tomatoes"
          price="20.000"
          unit="500g"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/300"
          name="Red Tomatoes"
          price="20.000"
          unit="500g"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/300"
          name="Red Tomatoes"
          price="20.000"
          unit="500g"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/300"
          name="Red Tomatoes"
          price="20.000"
          unit="500g"
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/300"
          name="Red Tomatoes"
          price="20.000"
          unit="500g"
          onAddToCart={handleAddToCart}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;

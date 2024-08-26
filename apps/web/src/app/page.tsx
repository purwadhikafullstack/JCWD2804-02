'use client';
import React, { useEffect, useState } from 'react';
import Carousel from '@/components/HomePage/Carousel';
import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';
import ProductCard from '@/components/HomePage/ProductCard';
import CategoryCard from '@/components/HomePage/CategoryCard';
import BenefitCard from '@/components/HomePage/BenefitCard';
import { requestLocation, Coordinates } from '@/utils/locationPermission';

const page = () => {
  const [longlat, setLonglat] = useState<Coordinates>();

  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
  ];

  const handleDetails = () => {
    window.location.href = '/product_details';
  };

  const requestPermissions = async () => {
    try {
      const location = await requestLocation();
      if (location) {
        alert('Permission allowed');
      } else {
        alert('Permission denied');
      }
      setLonglat(location);
    } catch (error) {
      console.error('error : ', error);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <div className="overflow-x-hidden h-screen bg-white">
      <div className="z-10">
        <Navbar />
      </div>
      <div className="justify-center flex mt-7">
        <Carousel images={images} />
      </div>
      <div className="p-8 bg-white">
        <h2 className="text-2xl ml-8 font-semibold text-gray-700">
          Produk Rekomendasi
        </h2>
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <ProductCard
            imageUrl="/images/bimoli.webp"
            name="Minyak Bimoli"
            price="45.000"
            unit="5 L"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="/images/bimoli.webp"
            name="Minyak Bimoli"
            price="45.000"
            unit="5 L"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="/images/bimoli.webp"
            name="Minyak Bimoli"
            price="45.000"
            unit="5 L"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Organic Bananas"
            price="40.000"
            unit="1kg"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Red Tomatoes"
            price="20.000"
            unit="500g"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Red Tomatoes"
            price="20.000"
            unit="500g"
            onDetails={handleDetails}
          />
        </div>
      </div>
      <div className="p-8 bg-gradient-to-r from-primary via-secondary to-third">
        <h2 className="mb-8 text-2xl text-center font-semibold text-white">
          Kategori Kebutuhan Produk
        </h2>
        <div className="flex space-x-16 justify-center overflow-x-auto">
          <CategoryCard imageUrl="/images/food.jpg" title="Makanan" />
          <CategoryCard imageUrl="/images/drink.png" title="Minuman" />
          <CategoryCard imageUrl="/images/house.jpg" title="Rumah" />
          <CategoryCard imageUrl="/images/dapur.jpg" title="Dapur" />
          <CategoryCard imageUrl="/images/mom.jpg" title="Ibu & Anak" />
          <CategoryCard imageUrl="/images/health.jpg" title="Kesehatan" />
          <CategoryCard imageUrl="/images/petfood.jpg" title="Pet Food" />
        </div>
      </div>
      <div className="p-8 bg-white">
        <h2 className="text-2xl ml-8 font-semibold text-gray-700">
          Produk Terbaru
        </h2>
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Fresh Apples"
            price="20.000"
            unit="1kg"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Fresh Apples"
            price="20.000"
            unit="1kg"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Fresh Apples"
            price="20.000"
            unit="1kg"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Organic Bananas"
            price="40.000"
            unit="1kg"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Red Tomatoes"
            price="20.000"
            unit="500g"
            onDetails={handleDetails}
          />
          <ProductCard
            imageUrl="https://via.placeholder.com/300"
            name="Red Tomatoes"
            price="20.000"
            unit="500g"
            onDetails={handleDetails}
          />
        </div>
      </div>
      <div className="p-8 bg-gradient-to-r from-third via-secondary to-primary">
        <h2 className="mb-8 text-2xl text-center font-semibold text-white">
          Yuk berbelanja di PasarKita dan dapatkan Keuntungannya!
        </h2>
        <div className="flex space-x-16 justify-center overflow-x-auto">
          <BenefitCard
            imageUrl="/images/gratis.jpg"
            title="Gratis Ongkir"
            description="Tanpa Minimal Transaksi"
          />
          <BenefitCard
            imageUrl="/images/sameday.webp"
            title="Sameday Delivery"
            description="Pesanan Diantar Lebih Cepat"
          />
          <BenefitCard
            imageUrl="/images/produk.png"
            title="Produk Lengkap"
            description="Lengkap? Ya, PasarKita!"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;

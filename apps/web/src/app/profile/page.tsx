import React from 'react';
import Profile from '@/components/ProfilePage/Profile';
import Navbar from '@/components/HomePage/Navbar';
import Footer from '@/components/HomePage/Footer';

const page = () => {
  return (
    <div className="overflow-x-hidden bg-gray-50 h-screen">
      <div>
        <Navbar />
        <Profile />
        <Footer />
      </div>
    </div>
  );
};

export default page;

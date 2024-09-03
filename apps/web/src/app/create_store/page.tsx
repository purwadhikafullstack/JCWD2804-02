import CreateStore from '@/components/CreateStore/index';
import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';
import React from 'react';

const CreateStorePage = () => {
  return (
    <div>
      <Navbar />
      <CreateStore/>
      <Footer />
    </div>
  );
};

export default CreateStorePage;

import CreateProduct from '@/components/CreateProductPage/index';
import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';

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

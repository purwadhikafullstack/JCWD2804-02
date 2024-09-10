import ProductDetails from '../../../components/ProductDetailsPage'
import Navbar from '../../../components/HomePage/Navbar';
import Footer from '../../../components/HomePage/Footer';

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

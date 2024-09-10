import Navbar from '@/components/HomePage/Navbar';
import Footer from '@/components/HomePage/Footer';
import SearchPage from '@/components/SearchProductPage/index';

const page = () => {
  return (
    <div className="overflow-x-hidden h-screen">
      <div>
        <Navbar />
        <SearchPage />
        <Footer />
      </div>
    </div>
  );
};

export default page;

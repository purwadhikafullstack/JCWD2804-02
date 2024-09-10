import CreateStore from '@/components/CreateStore/index';
import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';

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

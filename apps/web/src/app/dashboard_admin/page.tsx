import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';
import AdminPage from '@/components/DashboardAdmin';

const DashboardAdmin = () => {
  return (
    <div>
      <Navbar />
      <AdminPage role={'SUPERADMIN'} />
      <Footer />
    </div>
  );
};

export default DashboardAdmin;

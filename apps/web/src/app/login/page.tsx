'use client';
import Footer from "../../components/HomePage/Footer";
import Login from '../../components/LoginPage/Login';
import LogoLogin from '../../components/LoginPage/logoLogin';

const Page = () => {
  return (
    <div className="overflow-x-hidden bg-white h-screen">
      <div className="flex justify-center">
        <LogoLogin />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;

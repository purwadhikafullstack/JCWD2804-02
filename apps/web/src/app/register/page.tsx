'use client';
import Register from '@/components/RegisterPage/register';
import LogoRegister from '@/components/RegisterPage/logoRegister';

const page = () => {
  return (
    <div className="overflow-x-hidden bg-white h-screen ">
      <div className="flex justify-center">
        <LogoRegister />
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
};

export default page;

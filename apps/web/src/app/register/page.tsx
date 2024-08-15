'use client';
import Register from '@/components/RegisterForm/register';
import LogoRegister from '@/components/RegisterForm/logoRegister';

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

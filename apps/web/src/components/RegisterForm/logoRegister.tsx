import { useRouter } from 'next/navigation';
import React from 'react';

const logoRegister = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/home');
  };

  return (
    <div className="flex w-1/4 h-full justify-center pt-5">
      <img
        onClick={handleClick}
        src="/images/logo.png"
        alt="logo"
        className="w-[60%] cursor-pointer"
      />
    </div>
  );
};

export default logoRegister;

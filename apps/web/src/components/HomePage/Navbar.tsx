'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    router.push('/');
  };

  const onClick = () => {
    router.push('/profile');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <div className="font-bold text-xl">
          <img
            onClick={handleClick}
            src="/images/logo.png"
            alt="logo"
            className="w-[40%] cursor-pointer"
          />
        </div>

        {/* hamburger menu button */}
        <div className="md:flex lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        <ul className="flex space-x-6 ml-4">
          <a
            href="/login"
            className="hover:underline text-orange-600 cursor-pointer"
          >
            Login
          </a>
          <a
            href="/register"
            className="hover:underline text-orange-600 cursor-pointer"
          >
            Register
          </a>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md bg-white py-1 px-3 text-black"
          />
        </div>
        <div className="relative">
          <img
            onClick={onClick}
            src="/images/avatar.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        </div>

        {isOpen && (
          <div className="md:flex lg:hidden bg-primary">
            <nav className="flex flex-col space-y-2 px-4 py-2">
              <a
                href="/login"
                className="text-md font-semibold hover:text-secondary"
              >
                Log in
              </a>
              <a
                href="/register"
                className="text-md font-semibold hover:text-secondary"
              >
                Register
              </a>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

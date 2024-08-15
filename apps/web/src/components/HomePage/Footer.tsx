import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-center text-black py-8">
      <div className="mb-4 flex items-center justify-center">
        <img src="/images/logo-1.png" alt="" />
      </div>
      <div className="mb-4">
        <h2 className="font-bold text-lg">Pasar Kita</h2>
        <p className="font-semibold">Provide Your Family since 2024</p>
      </div>
      <div className="mb-4 text-sm">
        <p>Copyright © 2024 Pasar Kita</p>
      </div>
      <div className="flex justify-center space-x-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <FaYoutube />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

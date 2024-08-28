// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const Navbar: React.FC = () => {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     router.push('/');
//   };

//   const onClick = () => {
//     router.push('/profile');
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
//       <div className="flex items-center">
//         <div className="font-bold text-xl">
//           <img
//             onClick={handleClick}
//             src="/images/logo.png"
//             alt="logo"
//             className="w-[40%] cursor-pointer"
//           />
//         </div>

//         {/* hamburger menu button */}
//         <div className="md:flex lg:hidden flex items-center">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//               />
//             </svg>
//           </button>
//         </div>

//         <ul className="flex space-x-6 ml-4">
//           <a
//             href="/login"
//             className="hover:underline text-orange-600 cursor-pointer"
//           >
//             Login
//           </a>
//           <a
//             href="/register"
//             className="hover:underline text-orange-600 cursor-pointer"
//           >
//             Register
//           </a>
//           <a
//             href="/search_product"
//             className="hover:underline text-orange-600 cursor-pointer"
//           >
//             Search Product
//           </a>
//           <a
//             href="/create_product"
//             className="hover:underline text-orange-600 cursor-pointer"
//           >
//             Create Product
//           </a>
//         </ul>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search"
//             className="border rounded-md bg-white py-1 px-3 text-black"
//           />
//         </div>
//         <div className="relative">
//           <img
//             onClick={onClick}
//             src="/images/avatar.png"
//             alt="User Avatar"
//             className="h-8 w-8 rounded-full cursor-pointer"
//           />
//         </div>

//         {isOpen && (
//           <div className="md:flex lg:hidden bg-primary">
//             <nav className="flex flex-col space-y-2 px-4 py-2">
//               <a
//                 href="/login"
//                 className="text-md font-semibold hover:text-secondary"
//               >
//                 Log in
//               </a>
//               <a
//                 href="/register"
//                 className="text-md font-semibold hover:text-secondary"
//               >
//                 Register
//               </a>
//               <a
//                 href="/search_product"
//                 className="text-md font-semibold hover:text-secondary"
//               >
//                 Search Product
//               </a>
//               <a
//                 href="/create_product"
//                 className="text-md font-semibold hover:text-secondary"
//               >
//                 Create Product
//               </a>
//             </nav>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClear } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

const Navbar = ({ showSearch = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('auth-token');
    setIsLoggedIn(!!token);
  }, []);

  const applyFilter = (query: string | number | boolean) => {
    let queryString = String(query); // Convert to string
    if (typeof queryString === 'string' && queryString.trim()) {
      const encodedQuery = encodeURIComponent(queryString.trim());
      router.push(`/search_product?search=${encodedQuery}`);
    } else {
      router.push(`/search_product`);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const clearAllCookies = () => {
    const allCookies = Cookies.get();
    for (const cookieName in allCookies) {
      Cookies.remove(cookieName);
    }
  };

  const handleLogout = () => {
    Swal.fire({
      icon: 'success',
      iconColor: '#6a7fc1',
      title: 'You are logged out',
      text: 'You have successfully logged out',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#6a7fc1',
      background: '#9CB6DD',
    }).then((result) => {
      if (result.isConfirmed) {
        clearAllCookies();
        setIsLoggedIn(false);
        router.push('/');
      }
    });
  };

  const handleSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      applyFilter(searchQuery);
    }
  };

  const handleToggleSearch = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    if (window.innerWidth <= 1024) {
      router.push(`/search_product`);
    }
  };

  return (
    <div className="sticky top-0 p-3 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image src="/images/logo.png" alt="logo" width={130} height={10} />
        </div>

        {/* Mobile: Search Icon and Hamburger Icon */}
        <div className="flex items-center lg:hidden">
          <button onClick={handleToggleSearch} className="mr-4">
            <FaSearch size={24} className="text-primary" />
          </button>
          <GiHamburgerMenu
            size={32}
            className="cursor-pointer text-primary"
            onClick={toggleMenu}
          />
        </div>

        {/* Desktop: Search Input and Menu */}
        <div className="hidden lg:flex items-center flex-grow ">
          {showSearch && (
            <div className="relative flex-grow text-md ml-4 flex items-center">
              <div className="relative flex items-center w-[300px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search..."
                  className="rounded-md p-2 ml-2 pr-20 text-gray-600 w-full h-8 bg-gray-100"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-10 top-1/2 transform -translate-y-1/2"
                  >
                    <MdClear className="text-gray-600" />
                  </button>
                )}
              </div>
              <button
                onClick={() => applyFilter(searchQuery)}
                className="absolute left-[265px] top-1/2 transform -translate-y-1/2"
              >
                <FaSearch className="text-gray-600" />
              </button>
            </div>
          )}
          <div className="flex gap-4 items-center ml-auto">
            <a
              href="/create_product"
              className="text-primary text-md font-semibold hover:underline"
            >
              Create Product
            </a>
            <a
              href="/search_product"
              className="text-primary text-md font-semibold hover:underline"
            >
              Search Product
            </a>
            {!isLoggedIn ? (
              <>
                <a
                  href="/login"
                  className="text-text text-md font-semibold border-2 border-none rounded-md py-1 px-3 bg-primary hover:bg-secondary"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="text-text text-md font-semibold border-2 border-none rounded-md py-1 px-3 bg-primary hover:bg-secondary"
                >
                  Register
                </a>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="text-text text-md font-bold border-2 border-none rounded-md py-1 px-3 bg-primary hover:bg-secondary"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Input */}
      {showSearchInput && (
        <div className="lg:hidden border-t border-gray-600 p-4">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search..."
              className="rounded-md p-1 pl-4 pr-8 text-gray-600 w-full h-8 bg-gray-100"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-8 top-1/2 transform -translate-y-1/2"
              >
                <MdClear className="text-gray-600" />
              </button>
            )}
            <button
              onClick={() => applyFilter(searchQuery)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <FaSearch className="text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a
          href="/create_product"
          className="block text-primary text-sm font-semibold hover:underline p-4 border-t border-gray-600"
        >
          Create Product
        </a>
        <a
          href="/search_product"
          className="block text-primary text-sm font-semibold hover:underline p-4 border-t border-gray-600"
        >
          Search Product
        </a>
        {!isLoggedIn ? (
          <>
            <a
              href="/login"
              className="block text-primary text-md font-semibold hover:underline p-4 border-t border-gray-600"
            >
              Login
            </a>
            <a
              href="/register"
              className="block text-primary text-md font-semibold hover:underline p-4 border-t border-gray-600"
            >
              Register
            </a>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="block text-primary text-md font-semibold hover:underline p-4 border-t border-gray-600"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

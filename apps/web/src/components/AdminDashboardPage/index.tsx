import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-orange-700 text-white p-6">
        <h1 className="text-xl text-orange-100 font-bold mb-4">PasarKita</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="font-semibold flex items-center p-2 text-orange-950 hover:text-orange-400">
                <span className="ml-2">Dashboard</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 font-semibold text-orange-950 hover:text-orange-400">
                <span className="ml-2">Insight</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 font-semibold text-orange-950 hover:text-orange-400">
                <span className="ml-2">Transaction</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="/create_store" className="flex items-center p-2 font-semibold text-orange-950 hover:text-orange-400">
                <span className="ml-2">Store</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="/create_product" className="flex items-center p-2 font-semibold text-orange-950 hover:text-orange-400">
                <span className="ml-2">Product</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 font-semibold text-orange-950 hover:text-orange-400">
                <span className="ml-2">Income</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 font-semibold text-orange-950 hover:text-orange-400">
                <span className="ml-2">Promote</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 font-semibold text-orange-950 hover:text-orange-400">
                <span className="ml-2">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-200">{children}</main>
    </div>
  );
};

export default Layout;

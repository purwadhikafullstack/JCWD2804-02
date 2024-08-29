'use client';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '@/api/apiUrl';

interface Event {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: string;
  image: string;
}

const SearchPage: React.FC = () => {
  const [products, setProducts] = useState<Event[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-5">
      <div>
        <h1 className="text-5xl text-center text-primary font-bold">
          Search Product
        </h1>
      </div>
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap -mx-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 px-6 mb-12 lg:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-secondary mb-4">
                Filter
              </h2>
              <div>
                <label className="block text-secondary">Category</label>
                <select className="w-full mt-2 px-4 py-2 border text-gray-500 bg-white rounded-lg focus:outline-none focus:shadow-outline">
                  <option>All</option>
                  <option>Makanan</option>
                  <option>Minuman</option>
                  <option>Rumah</option>
                  <option>Dapur</option>
                  <option>Ibu & Anak</option>
                  <option>Kesehatan</option>
                  <option>Pet Food</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 px-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-secondary">
                Products
              </h2>
              <input
                type="text"
                placeholder="Search product"
                className="w-full lg:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline bg-white text-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer w-full sm:w-72 p-5 shadow-2xl bg-secondary flex flex-col items-center text-primary text-center rounded-lg"
                >
                  <img
                    src={product.image}
                    alt="product"
                    className="rounded-[20%] w-3/5 h-28 lg:w-11/12 sm:w-4/5"
                  />
                  <h3 className="mt-4 mb-2 text-lg font-bold">
                    {product.name}
                  </h3>
                  <p className="mt-2 mb-2 text-sm">{product.category}</p>
                  <p className="mt-2 mb-2 text-sm">{product.stock}</p>
                  <p className="mt-2 mb-2 text-sm">
                    {formatter.format(product.price)}
                  </p>
                  <a
                    href={`/product_details/${product.id}`}
                    className="mt-2 mb-2 bg-primary text-white rounded-md p-2 hover:bg-secondary"
                  >
                    Beli!
                  </a>
                </div>
              ))}
            </div>

            {/* Recommended Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-secondary">
                Recommended for you
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recommended Product Cards */}
                <div className="bg-secondary rounded-lg shadow-md p-6">
                  <img
                    src="/images/bimoli.webp"
                    alt="Recommended Product"
                    className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white">
                      Minyak Bimoli
                    </h3>
                    <p className="text-gray-200">5 L</p>
                    <p className="text-gray-200">Rp. 45.000</p>
                    <button className="mt-4 w-full bg-primary hover:bg-third text-white py-2 rounded-lg">
                      Beli
                    </button>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg shadow-md p-6">
                  <img
                    src="/images/bimoli.webp"
                    alt="Recommended Product"
                    className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white">
                      Minyak Bimoli
                    </h3>
                    <p className="text-gray-200">5 L</p>
                    <p className="text-gray-200">Rp. 45.000</p>
                    <button className="mt-4 w-full bg-primary hover:bg-third text-white py-2 rounded-lg">
                      Beli
                    </button>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg shadow-md p-6">
                  <img
                    src="/images/bimoli.webp"
                    alt="Recommended Product"
                    className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white">
                      Minyak Bimoli
                    </h3>
                    <p className="text-gray-200">5 L</p>
                    <p className="text-gray-200">Rp. 45.000</p>
                    <button className="mt-4 w-full bg-primary hover:bg-third text-white py-2 rounded-lg">
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;

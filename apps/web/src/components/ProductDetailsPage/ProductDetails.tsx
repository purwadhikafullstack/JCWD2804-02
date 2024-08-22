'use client';
import React, { useState } from 'react';

const page: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl flex">
        <div className="flex-shrink-0">
          <img
            src="/images/bimoli.webp"
            alt="Product Image"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
        <div className="ml-8">
          <h2 className="text-3xl font-bold text-gray-900">Bimoli Minyak 5L</h2>
          <p className="text-xl font-semibold text-gray-700 mt-2">
            Rp45.000,00
          </p>
          <p className="mt-4 text-gray-600">
            Deskripsi Produk
            <br />
            Belanja kebutuhan sehari-hari sekarang super mudah, cukup gerakin
            jari di smartphone atau laptop. Gak perlu keluar rumah atau hadapin
            macet, PasarKita bikin semuanya jadi dekat.
          </p>
          <div className="mt-2">
            <span className="text-gray-700">Jumlah Pembelian</span>
            <div className="flex items-center mt-2">
              <button
                onClick={handleDecrement}
                className="px-2 py-1 bg-secondary rounded-l-md hover:bg-third"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b border-gray-200"
              />
              <button
                onClick={handleIncrement}
                className="px-2 py-1 bg-secondary rounded-r-md hover:bg-third"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary"
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

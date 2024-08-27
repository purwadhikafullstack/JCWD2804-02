'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CreateProduct: React.FC = () => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    image: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { name, category, price, stock, image } = productData;
      const productPrice = parseFloat(price);

      await axios.post('http://localhost:8000/api/product', {
        name,
        category,
        price: productPrice,
        stock,
        image,
      });

      Swal.fire({
        title: 'Success',
        text: 'Product created!',
        icon: 'success',
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-5xl text-center text-primary font-bold mb-6">
          Create a Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
              value={productData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
              value={productData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="makanan">Makanan</option>
              <option value="minuman">Minuman</option>
              <option value="rumah">Rumah</option>
              <option value="dapur">Dapur</option>
              <option value="ibuanak">Ibu & Anak</option>
              <option value="kesehatan">Kesehatan</option>
              <option value="pet">Pet Food</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700"
            >
              Stock
            </label>
            <input
              type="text"
              name="stock"
              id="stock"
              className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
              value={productData.stock}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-secondary"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;

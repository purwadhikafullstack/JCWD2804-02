import { getAllProducts } from '@/api/apiUrl';
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: string;
  image: string;
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer w-full p-5 shadow-md bg-gray-50 flex flex-col items-center text-primary text-center rounded-lg"
        >
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-3/5 h-44 object-cover"
          />
          <h3 className="mt-4 mb-2 text-lg font-bold">{product.name}</h3>
          <p className="text-sm mb-2">{product.category}</p>
          <p className="text-sm mb-2">Stok: {product.stock}</p>
          <p className="text-sm mb-2">{formatter.format(product.price)}</p>
          <a
            href={`/product_details/${product.id}`}
            className="mt-4 mb-2 w-full bg-primary text-white rounded-md p-2 hover:bg-third"
          >
            Beli!
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  unit: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  price,
  unit,
  onAddToCart,
}) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="p-4">
        <h3 className="text-gray-600 font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{unit}</p>
        <div className="mt-2">
          <span className="text-gray-600 font-bold text-xl">Rp {price}</span>
        </div>
        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

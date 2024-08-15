import React from 'react';

type CategoryCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 w-24 h-24 rounded-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>
      <p className="text-center text-md py-2 font-medium text-white">{title}</p>
      <p className="text-center text-sm font-medium text-white">
        {description}
      </p>
    </div>
  );
};

export default CategoryCard;

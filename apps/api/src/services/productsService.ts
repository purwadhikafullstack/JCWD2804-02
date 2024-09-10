import { prisma } from '@/prisma.ts';
import { Products } from '@/utils/interface.ts';

export const createProduct = async (products: Products) => {
  const productsData = {
    name: products.name,
    category: products.category,
    price: products.price,
    stock: products.stock,
    image: products.image,
  };

  return await prisma.products.create({ data: productsData });
};

export const getAllProducts = async () => {
  return await prisma.products.findMany({
    include: {
      Store: true,
      Order: true,
    },
  });
};

export async function getProductById(id: number) {
  return await prisma.products.findUnique({
    where: { id },
    include: {
      Store: true,
      Order: true,
    },
  });
}

export const updateProduct = async (id: number, products: Products) => {
  const productsData = {
    name: products.name,
    category: products.category,
    price: products.price,
    stock: products.stock,
    image: products.image,
  };

  return await prisma.products.update({ where: { id }, data: productsData });
};

export const deleteProduct = async (id: number) => {
  return await prisma.products.delete({ where: { id } });
};

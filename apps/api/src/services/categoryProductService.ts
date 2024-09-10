import { prisma } from '@/prisma.ts';
import { Category } from '@/utils/interface.ts';

export const createCategory = async (category: Category) => {
  const existingCategory = await prisma.category.findUnique({
    where: { name: category.name },
  });

  if (existingCategory) {
    throw new Error('Category with this name already exists');
  }

  const categoryData = {
    name: category.name,
  };

  return await prisma.category.create({ data: categoryData });
};

export const getAllCategories = async () => {
  return await prisma.category.findMany({
    include: {
      Products: true,
    },
  });
};

export async function getCategoryById(id: number) {
  return await prisma.category.findUnique({
    where: { id },
    include: {
      Products: true,
    },
  });
}

export const updateCategory = async (id: number, category: Category) => {
  const existingCategory = await prisma.category.findUnique({
    where: { name: category.name },
  });

  if (existingCategory && existingCategory.id !== id) {
    throw new Error('Category with this name already exists');
  }

  const categoryData = {
    name: category.name,
  };

  return await prisma.category.update({ where: { id }, data: categoryData });
};

export const deleteCategory = async (id: number) => {
  return await prisma.category.delete({ where: { id } });
};

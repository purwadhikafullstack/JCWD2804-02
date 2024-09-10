import { Request, Response } from 'express';
import * as categoryService from '@/services/categoryProductService.ts';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).send(category);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).send(categories);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(Number(id));
    if (category) {
      res.status(200).send(category);
    } else {
      res.status(404).send({ message: 'Category not found' });
    }
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await categoryService.updateCategory(Number(id), req.body);
    res.status(200).send(category);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await categoryService.deleteCategory(Number(id));
    res.status(200).send({ message: 'Category deleted successfully' });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

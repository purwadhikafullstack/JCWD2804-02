import { Request, Response } from 'express';
import * as productsService from '@/services/productsService.ts';
import { Products } from '@/utils/interface.ts';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, price, stock, image, storeId, categoryId } =
      req.body;
    const product: Products = {
      name: name,
      category: category,
      price: price,
      stock: stock,
      image: image,
      storeId: storeId,
      categoryId: categoryId,
    };
    const products = await productsService.createProduct(product);
    res.status(201).send(products);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).send(products);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const products = await productsService.getProductById(Number(id));
    if (products) {
      res.status(200).send(products);
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const products = await productsService.updateProduct(Number(id), req.body);
    res.status(200).send(products);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const products = await productsService.deleteProduct(Number(id));
    res.status(200).send({ message: 'Product deleted successfully' });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

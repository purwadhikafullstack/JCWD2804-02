import { Request, Response } from 'express';
import * as productsService from '../services/productsService.ts';
import { Products } from '@/utils/interface.ts';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, price, stock, storeId } = req.body;
    const product: Products = {
      name: name,
      category: category,
      price: price,
      stock: stock,
      storeId: storeId,
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

// export const assignStoreAdmin = async (
//   req: Request,
//   res: Response,
// ): Promise<void> => {
//   const { storeAdminId, storeId } = req.body;

//   // Validasi input
//   if (typeof storeAdminId !== 'number' || typeof storeId !== 'number') {
//     res.status(400).json({ message: 'Invalid input' });
//     return;
//   }

//   try {
//     const updatedStoreAdmin = await productsService.assignStoreAdminToStore(
//       storeAdminId,
//       storeId,
//     );
//     res.status(200).json({
//       message: 'Store Admin assigned to Store successfully',
//       data: updatedStoreAdmin,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       message: 'Failed to assign Store Admin to Store',
//       error: error.message,
//     });
//   }
// };

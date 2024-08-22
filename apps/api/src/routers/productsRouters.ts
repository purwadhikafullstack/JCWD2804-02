import { Router } from 'express';
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
} from '../controllers/productsController.ts';

const router = Router();

router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.get('/product', getAllProducts);
router.get('/product/:id', getProductById);
router.delete('/product/:id', deleteProduct);

export default router;

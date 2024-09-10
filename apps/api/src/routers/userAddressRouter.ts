import { Router } from 'express';
import {
  createAddress,
  getAddressesByUserId,
  deleteAddress,
  updateAddress,
  setPrimaryAddress,
} from '@/controllers/userAddressController.ts';

const router = Router();

router.post('/users/:userId/addresses', createAddress);
router.get('/users/:userId/addresses', getAddressesByUserId);
router.delete('/addresses/:id', deleteAddress);
router.put('/addresses/:id', updateAddress);
router.patch('/addresses/:id/primary', setPrimaryAddress);

export default router;

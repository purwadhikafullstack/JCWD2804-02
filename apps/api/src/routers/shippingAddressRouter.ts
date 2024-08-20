import { Router } from 'express';
import {
  createAddressController,
  getAllAddressesByUserIdController,
  getAddressByIdController,
  updateAddressController,
  deleteAddressController
} from '../controllers/shippingAddressController.ts';
import {
  validateCreateAddress,
  validateUpdateAddress
} from '../middlewares/validateAddress.ts';

const router = Router();

router.post('/shipping-addresses', validateCreateAddress, createAddressController);
router.get('/shipping-addresses/user/:userId', getAllAddressesByUserIdController);
router.get('/shipping-addresses/:id', getAddressByIdController);
router.put('/shipping-addresses/:id', validateUpdateAddress, updateAddressController);
router.delete('/shipping-addresses/:id', deleteAddressController);

export default router;

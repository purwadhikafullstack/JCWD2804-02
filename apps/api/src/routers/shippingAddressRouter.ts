import { Router } from "express";
import {
    setShippingAddress,
    getAddresses,
    getAddressById,
    updateAddress,
    deleteAddress,  
} from "../controllers/shippingAddressController";

const router = Router();

router.post("/shipping-address", setShippingAddress);
router.get("/shipping-addresses", getAddresses);
router.get("/shipping-addresses/:id", getAddressById);
router.put("/shipping-addresses/:id", updateAddress);
router.delete("/shipping-addresses/:id", deleteAddress);

export default router;
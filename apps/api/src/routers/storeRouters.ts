import { Router } from "express";
import {
  createStore,
  updateStore,
  getAllStore,
  getStoreById,
  deleteStore,
} from "../controllers/storeController.ts";

const router = Router();

router.post("/store", createStore);
router.put("/store/:id", updateStore);
router.get("/store", getAllStore);
router.get("/store/:id", getStoreById);
router.delete("/store/:id", deleteStore);

export default router;

import { Router } from "express";
import {
  createStore,
  updateStore,
  getAllStore,
  getStoreById,
  deleteStore,
  assignStoreAdmin,
} from "../controllers/storeController.ts";

import { superAdminOnly } from "@/middlewares/isSuperAdmin.ts";

const router = Router();

router.post("/store", superAdminOnly, createStore);
router.put("/store/:id", superAdminOnly, updateStore);
router.get("/store", superAdminOnly, getAllStore);
router.get("/store/:id", superAdminOnly, getStoreById);
router.delete("/store/:id", superAdminOnly, deleteStore);
router.post('/assign-store-admin', superAdminOnly, assignStoreAdmin);

export default router;

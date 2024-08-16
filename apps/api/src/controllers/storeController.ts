import { Request, Response } from "express";
import * as storeService from "../services/storeServices.ts";

export const createStore = async (req: Request, res: Response) => {
  try {
    const store = await storeService.createStore(req.body);
    res.status(201).send(store);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const getAllStore = async (req: Request, res: Response) => {
  try {
    const store = await storeService.getAllStore();
    res.status(200).send(store);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const getStoreById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const store = await storeService.getStoreById(Number(id));
    if (store) {
      res.status(200).send(store);
    } else {
      res.status(404).send({ message: "Store not found" });
    }
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const updateStore = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const store = await storeService.updateStore(Number(id), req.body);
    res.status(200).send(store);
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const deleteStore = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const store = await storeService.deleteStore(Number(id));
    res.status(200).send({ message: "Store deleted successfully" });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const assignStoreAdmin = async (req: Request, res: Response): Promise<void> => {
  const { storeAdminId, storeId } = req.body;

  // Validasi input
  if (typeof storeAdminId !== 'number' || typeof storeId !== 'number') {
      res.status(400).json({ message: "Invalid input" });
      return;
  }

  try {
      const updatedStoreAdmin = await storeService.assignStoreAdminToStore(storeAdminId, storeId);
      res.status(200).json({
          message: 'Store Admin assigned to Store successfully',
          data: updatedStoreAdmin
      });
  } catch (error: any) {
      res.status(500).json({
          message: 'Failed to assign Store Admin to Store',
          error: error.message,
      });
  }
};

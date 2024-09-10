import { Request, Response } from 'express';
import {
  createAddress,
  getAllAddressesByUserId,
  getAddressById,
  updateAddress,
  deleteAddress,
} from '@/services/shippingAddressServices.ts';

// Controller untuk membuat alamat baru
export const createAddressController = async (req: Request, res: Response) => {
  try {
    const { userId, address, cityId, isPrimary } = req.body;
    const newAddress = await createAddress(userId, address, cityId, isPrimary);
    return res.status(201).send({
      data: newAddress,
    });
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

// Controller untuk mendapatkan semua alamat berdasarkan userId
export const getAllAddressesByUserIdController = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = Number(req.params.userId);
    const addresses = await getAllAddressesByUserId(userId);
    return res.status(200).send({
      data: addresses,
    });
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

// Controller untuk mendapatkan alamat berdasarkan id
export const getAddressByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const address = await getAddressById(id);
    if (address) {
      return res.status(200).send({
        data: address,
      });
    } else {
      return res.status(404).send({ message: 'Address not found' });
    }
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

// Controller untuk memperbarui alamat
export const updateAddressController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { address, cityId, isPrimary } = req.body;
    const updatedAddress = await updateAddress(id, address, cityId, isPrimary);
    return res.status(200).send({
      message: 'Successfully updated address',
      data: updatedAddress,
    });
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

// Controller untuk menghapus alamat
export const deleteAddressController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await deleteAddress(id);
    return res.status(204).send({ message: 'Successfully deleted address' });
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

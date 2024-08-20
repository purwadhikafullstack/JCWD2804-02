import { Request, Response } from 'express';
import * as shippingAddressServices from '../services/shippingAddressServices.ts';

export const setShippingAddress = async (req: Request, res: Response) => {
  try {
    const { userId, addressId, address, isPrimary } = req.body;

    if (addressId) {
      // Update existing address
      const updatedAddress = await shippingAddressServices.updateAddress(addressId, address, isPrimary);
      res.status(200).send(updatedAddress);
    } else {
      // Create new address
      const addresses = await shippingAddressServices.getAddressById(userId);
      if (isPrimary && addresses.length > 0) {
        const primaryAddress = addresses.find((a: { isPrimary: any; }) => a.isPrimary);
        if (primaryAddress) {
          await shippingAddressServices.updateAddress(primaryAddress.id, primaryAddress.address, false);
        }
      }
      const newAddress = await shippingAddressServices.createAddress({ userId, address, isPrimary });
      res.status(201).send(newAddress);
    }
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const getAddresses = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const addresses = await shippingAddressServices.getAddressById(Number(userId));
    res.status(200).send(addresses);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const getAddressById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const address = await shippingAddressServices.getAddressById(Number(id));
    if (address) {
      res.status(200).send(address);
    } else {
      res.status(404).send({ message: 'Address not found' });
    }
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const updateAddress = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { address, isPrimary } = req.body;

  try {
    const updatedAddress = await shippingAddressServices.updateAddress(Number(id), address, isPrimary);
    res.status(200).send(updatedAddress);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};

export const deleteAddress = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await shippingAddressServices.deleteAddress(Number(id));
    res.status(200).send({ message: 'Address deleted successfully' });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};

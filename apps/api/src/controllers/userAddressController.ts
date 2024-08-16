import { Request, Response } from "express";
import * as userAddressService from "../services/userAddressServices.ts";

export const createAddress = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { address, isPrimary } = req.body;

    const newAddress = await userAddressService.createAddress(
      Number(userId),
      address,
      isPrimary
    );
    res.status(201).send(newAddress);
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const getAddressesByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const addresses = await userAddressService.getAddressesByUserId(
      Number(userId)
    );

    if (addresses.length === 0) {
      return res.status(404).send({ message: "No addresses found for this user." });
    }

    res.status(200).send(addresses);
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const deleteAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userAddressService.deleteAddress(Number(id));
    res.status(204).send();
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const updateAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { address, isPrimary } = req.body;

    const updatedAddress = await userAddressService.updateAddress(
      Number(id),
      address,
      isPrimary
    );
    res.status(200).send(updatedAddress);
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const setPrimaryAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updatedPrimaryAddress = await userAddressService.setPrimaryAddress(
      Number(id)
    );
    res.status(200).send(updatedPrimaryAddress);
  } catch (error: any) {
    res.status(500).send({
      error: error.message,
    });
  }
};

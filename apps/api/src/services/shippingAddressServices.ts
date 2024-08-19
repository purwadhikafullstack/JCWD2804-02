import { prisma } from '../prisma.ts';
import { Prisma } from '@prisma/client';

interface CreateAddressInput {
  userId: number;
  address: string;
  isPrimary: boolean;
}

export const createAddress = async ({ userId, address, isPrimary }: CreateAddressInput) => {
  if (isPrimary) {
    await prisma.address.updateMany({
      where: { userId },
      data: { isPrimary: false },
    });
  }

  const addressData: Prisma.AddressCreateInput = {
    userId,
    address,
    isPrimary,
  };

  return await prisma.address.create({ data: addressData });
};

export const getAllAddressesByUserId = async (userId: number) => {
  return await prisma.address.findMany({
    where: { userId },
  });
};

export const getAddressById = async (id: number) => {
  return await prisma.address.findUnique({
    where: { id },
  });
};

export const updateAddress = async (id: number, address: string, isPrimary: boolean) => {
  if (isPrimary) {
    const addressToUpdate = await prisma.address.findUnique({ where: { id } });

    if (addressToUpdate) {
      await prisma.address.updateMany({
        where: { userId: addressToUpdate.userId },
        data: { isPrimary: false },
      });
    }
  }

  const addressData: Prisma.AddressUpdateInput = {
    address,
    isPrimary,
  };

  return await prisma.address.update({
    where: { id },
    data: addressData,
  });
};

export const deleteAddress = async (id: number) => {
  return await prisma.address.delete({
    where: { id },
  });
};

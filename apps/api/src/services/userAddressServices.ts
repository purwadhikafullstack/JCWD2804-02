import { prisma } from '../prisma.ts';

export const createAddress = async (
  userId: number,
  address: string,
  isPrimary: boolean,
) => {
  if (isPrimary) {
    await prisma.address.updateMany({
      where: { userId },
      data: { isPrimary: false },
    });
  }

  return await prisma.address.create({
    data: {
      address,
      isPrimary,
      userId,
    },
  });
};

export const getAddressesByUserId = async (userId: number) => {
  return await prisma.address.findMany({
    where: { userId },
  });
};

export const deleteAddress = async (addressId: number) => {
  return await prisma.address.delete({
    where: { id: addressId },
  });
};

export const updateAddress = async (
  addressId: number,
  address: string,
  isPrimary: boolean,
) => {
  if (isPrimary) {
    const addressToUpdate = await prisma.address.findUnique({
      where: { id: addressId },
    });

    if (addressToUpdate) {
      await prisma.address.updateMany({
        where: { userId: addressToUpdate.userId },
        data: { isPrimary: false },
      });
    }
  }

  return await prisma.address.update({
    where: { id: addressId },
    data: { address, isPrimary },
  });
};

export const setPrimaryAddress = async (addressId: number) => {
  const addressToSetPrimary = await prisma.address.findUnique({
    where: { id: addressId },
  });

  if (!addressToSetPrimary) {
    throw new Error('Address not found.');
  }

  await prisma.address.updateMany({
    where: { userId: addressToSetPrimary.userId },
    data: { isPrimary: false },
  });

  return await prisma.address.update({
    where: { id: addressId },
    data: { isPrimary: true },
  });
};

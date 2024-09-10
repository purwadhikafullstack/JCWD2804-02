import { prisma } from '@/prisma.ts';

interface CreateAddressInput {
  userId: number;
  address: string;
  isPrimary: boolean;
  cityId: string; // Tambahkan properti cityId
  cityName: string; // Tambahkan properti cityName
  province: string; // Tambahkan properti province
  postalCode: string; // Tambahkan properti postalCode
}

export const createAddress = async ({
  userId,
  address,
  isPrimary,
  cityId,
  cityName,
  province,
  postalCode,
}: CreateAddressInput) => {
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
      cityId, // Tambahkan cityId
      cityName, // Tambahkan cityName
      province, // Tambahkan province
      postalCode, // Tambahkan postalCode
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
  cityId?: string, // Tambahkan cityId jika ingin memperbarui
  cityName?: string, // Tambahkan cityName jika ingin memperbarui
  province?: string, // Tambahkan province jika ingin memperbarui
  postalCode?: string, // Tambahkan postalCode jika ingin memperbarui
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
    data: {
      address,
      isPrimary,
      cityId, // Tambahkan cityId jika diperbarui
      cityName, // Tambahkan cityName jika diperbarui
      province, // Tambahkan province jika diperbarui
      postalCode, // Tambahkan postalCode jika diperbarui
    },
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

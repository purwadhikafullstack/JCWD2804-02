import { prisma } from "../prisma.ts";
import { Store } from "../utils/interface.ts";
import { Prisma } from "@prisma/client";

export const createStore = async (store: Store) => {
  const storeData: Prisma.StoreCreateInput = {
    store_name: store.store_name,
    description: store.description,
    location: store.location,
    SuperAdmin: {
      connect: { id: store.superAdminId } // menghubungkan ke SuperAdmin berdasarkan ID
    },
    // Properti lain seperti Products, Order, Payment perlu dihubungkan atau diatur sesuai kebutuhan
  };

  return await prisma.store.create({ data: storeData });
};

export const getAllStore = async () => {
  return await prisma.store.findMany();
};

export async function getStoreById(id: number) {
  return prisma.store.findUnique({
    where: { id }
  });
}

export const updateStore = async (id: number, store: Store) => {
  const storeData: Prisma.StoreUpdateInput = {
    store_name: store.store_name,
    description: store.description,
    location: store.location,
    SuperAdmin: {
      connect: { id: store.superAdminId } // menghubungkan ke SuperAdmin berdasarkan ID
    },
    // Properti lain seperti Products, Order, Payment perlu dihubungkan atau diatur sesuai kebutuhan
  };

  return await prisma.store.update({ where: { id }, data: storeData });
};

export const deleteStore = async (id: number) => {
  return await prisma.store.delete({ where: { id } });
};

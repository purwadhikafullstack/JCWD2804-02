import { prisma } from "../prisma.ts";
import { Store } from "../utils/interface.ts";
import { Prisma } from "@prisma/client";

export const createStore = async (store: Store) => {
  const storeData: Prisma.StoreCreateInput = {
    store_name: store.store_name,
    description: store.description,
    location: store.location,
    latitude: store.latitude,
    longitude: store.longitude,
    isMainStore: store.isMainStore,
    SuperAdmin: {
      connect: { id: store.superAdminId }  // Menghubungkan ke SuperAdmin berdasarkan ID
    }
  };

  return await prisma.store.create({ data: storeData });
};

export const getAllStore = async () => {
  return await prisma.store.findMany({
    include: {
      SuperAdmin: true,
      Products: true,
      Order: true,
      Payment: true,
      StoreAdmin: true
    }
  });
};

export async function getStoreById(id: number) {
  return await prisma.store.findUnique({
    where: { id },
    include: {
      SuperAdmin: true,
      Products: true,
      Order: true,
      Payment: true,
      StoreAdmin: true
    }
  });
}

export const updateStore = async (id: number, store: Store) => {
  const storeData: Prisma.StoreUpdateInput = {
    store_name: store.store_name,
    description: store.description,
    location: store.location,
    latitude: store.latitude,
    longitude: store.longitude,
    isMainStore: store.isMainStore,
    SuperAdmin: {
      connect: { id: store.superAdminId }  // Menghubungkan ke SuperAdmin berdasarkan ID
    }
  };

  return await prisma.store.update({ where: { id }, data: storeData });
};

export const deleteStore = async (id: number) => {
  return await prisma.store.delete({ where: { id } });
};
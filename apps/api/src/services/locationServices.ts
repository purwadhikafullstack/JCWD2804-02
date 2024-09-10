import { prisma } from '@/prisma.ts';

interface LocationInput {
  id: number;
  longitude: number;
  latitude: number;
}

const saveLocation = async (location: LocationInput) => {
  // Update lokasi berdasarkan storeId
  const updatedStore = await prisma.store.update({
    where: { id: location.id },
    data: {
      latitude: location.latitude,
      longitude: location.longitude,
    },
  });

  return updatedStore;
};

export { saveLocation };

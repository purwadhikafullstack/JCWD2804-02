import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Location {
    storeId: number;
    latitude: number;
    longitude: number;
}

const saveLocation = async (location: Location) => {
    // Update lokasi berdasarkan storeId
    const updatedStore = await prisma.store.update({
        where: { id: location.storeId },
        data: {
            latitude: location.latitude,
            longitude: location.longitude,
        },
    });

    return updatedStore;
};

export { saveLocation };
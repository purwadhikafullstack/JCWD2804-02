import { Request, Response } from 'express';
import { saveLocation } from '@/services/locationServices.ts';

export const setLocation = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id, longitude, latitude } = req.body;

  // Validasi input
  if (
    typeof id !== 'number' ||
    typeof longitude !== 'number' ||
    typeof latitude !== 'number'
  ) {
    res.status(400).json({ message: 'Invalid input' });
    return;
  }

  try {
    // Menggunakan service untuk menyimpan lokasi
    const updatedStore = await saveLocation({ id, longitude, latitude });

    res.status(200).json({
      message: 'Location updated successfully',
      data: updatedStore,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to update location',
      error: error.message,
    });
  }
};

import axios from 'axios';
import { prisma } from '@/prisma.ts';
import { Address } from '@/utils/interface.ts';

const RAJAONGKIR_API_KEY = process.env.RAJAONGKIR_API_KEY;
const RAJAONGKIR_URL = 'https://api.rajaongkir.com/starter/city';

const getCityFromRajaOngkir = async (cityId: string) => {
  const response = await axios.get(RAJAONGKIR_URL, {
    params: { id: cityId },
    headers: { key: RAJAONGKIR_API_KEY },
  });

  if (response.data.rajaongkir.status.code !== 200) {
    throw new Error('Failed to fetch city data from RajaOngkir');
  }

  return response.data.rajaongkir.results;
};

export const createAddress = async (
  userId: number,
  address: string,
  cityId: string,
  isPrimary: boolean,
) => {
  // Ambil data kota dari RajaOngkir
  const cityData = await getCityFromRajaOngkir(cityId);

  // Jika alamat baru diatur sebagai alamat utama, nonaktifkan alamat utama yang lain
  if (isPrimary) {
    await prisma.address.updateMany({
      where: { userId },
      data: { isPrimary: false },
    });
  }

  // Siapkan data alamat yang akan disimpan ke database
  const addressData = {
    userId,
    address,
    cityId: cityData.city_id,
    cityName: cityData.city_name,
    province: cityData.province,
    postalCode: cityData.postal_code,
    isPrimary,
  };

  // Simpan alamat ke database
  return await prisma.address.create({ data: addressData });
};

// Fungsi untuk mendapatkan semua alamat milik user berdasarkan userId
export const getAllAddressesByUserId = async (userId: number) => {
  return await prisma.address.findMany({
    where: { userId },
  });
};

// Fungsi untuk mendapatkan alamat berdasarkan id alamat
export const getAddressById = async (id: number) => {
  return await prisma.address.findUnique({
    where: { id },
  });
};

// Fungsi untuk memperbarui alamat berdasarkan id
export const updateAddress = async (
  id: number,
  address: string,
  cityId: string,
  isPrimary: boolean,
) => {
  // Ambil data kota dari RajaOngkir
  const cityData = await getCityFromRajaOngkir(cityId);

  // Jika alamat diatur sebagai alamat utama, nonaktifkan alamat utama yang lain
  if (isPrimary) {
    const addressToUpdate = await prisma.address.findUnique({ where: { id } });

    if (addressToUpdate) {
      await prisma.address.updateMany({
        where: { userId: addressToUpdate.userId },
        data: { isPrimary: false },
      });
    }
  }

  // Siapkan data alamat yang akan diperbarui
  const addressData = {
    address,
    cityId: cityData.city_id,
    cityName: cityData.city_name,
    province: cityData.province,
    postalCode: cityData.postal_code,
    isPrimary,
  };

  // Perbarui alamat di database
  return await prisma.address.update({
    where: { id },
    data: addressData,
  });
};

// Fungsi untuk menghapus alamat berdasarkan id
export const deleteAddress = async (id: number) => {
  return await prisma.address.delete({
    where: { id },
  });
};

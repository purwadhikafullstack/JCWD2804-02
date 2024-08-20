import axios from 'axios';

const RAJAONGKIR_API_KEY = process.env.RAJAONGKIR_API_KEY;
const RAJAONGKIR_URL = 'https://api.rajaongkir.com/starter/cost';

export const getShippingCost = async (originId: string, destinationId: string, weight: number, courier: string) => {
    try {
      const response = await axios.get(RAJAONGKIR_URL, {
        params: {
          origin: originId,
          destination: destinationId,
          weight: weight,
          courier: courier,
        },
        headers: {
          key: RAJAONGKIR_API_KEY,
        },
      });
  
      return response.data;
    } catch (error) {
      throw new Error('Error fetching shipping cost');
    }
  };
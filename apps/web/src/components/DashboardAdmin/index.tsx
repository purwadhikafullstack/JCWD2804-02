"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Store {
  id: number;
  store_name: string;
}

interface AdminProps {
  role: 'SUPERADMIN' | 'STOREADMIN';
  stores?: Store[];
  currentStoreId?: number;
}

const AdminPage: React.FC<AdminProps> = ({ role, stores, currentStoreId }) => {
  const [selectedStore, setSelectedStore] = useState<number | null>(currentStoreId || null);

  const handleStoreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStore(Number(event.target.value));
  };

  return (
    <div className="p-4">
      {role === 'SUPERADMIN' ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">SuperAdmin Dashboard</h1>
          <label className="block mb-2">Pilih Toko</label>
          <select
            className="border p-2 mb-4"
            onChange={handleStoreChange}
            value={selectedStore || ''}
          >
            <option value="">Pilih Toko</option>
            {stores?.map((store) => (
              <option key={store.id} value={store.id}>
                {store.store_name}
              </option>
            ))}
          </select>
          {selectedStore && (
            <a href={`/store/${selectedStore}`}>
              <button className="bg-blue-500 text-white px-4 py-2">Kelola Toko</button>
            </a>
          )}
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">StoreAdmin Dashboard</h1>
          <a href={`/store/${currentStoreId}`}>
            <button className="bg-blue-500 text-white px-4 py-2">Kelola Toko Saya</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default AdminPage;

// Mock data fetching, ideally, you'd fetch this from an API.
// export const getServerSideProps = async () => {
//   // Mocking user role and stores data
//   const role = 'SUPERADMIN'; // Change to 'STOREADMIN' for testing
//   const stores = role === 'SUPERADMIN' ? [
//     { id: 1, store_name: 'Toko A' },
//     { id: 2, store_name: 'Toko B' },
//   ] : undefined;
//   const currentStoreId = role === 'STOREADMIN' ? 1 : undefined;

//   return {
//     props: {
//       role,
//       stores,
//       currentStoreId,
//     },
//   };
// };

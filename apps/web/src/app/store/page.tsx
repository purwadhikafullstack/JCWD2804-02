// "use client"
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// interface Product {
//   id: number;
//   name: string;
//   stock: number;
// }

// const StorePage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
//   const [quantity, setQuantity] = useState<number>(0);
//   const [type, setType] = useState<'penambahan' | 'pengurangan'>('penambahan');
//   const [description, setDescription] = useState<string>('');

//   useEffect(() => {
//     if (id) {
//       // Fetch products for the store
//       axios.get(`/api/store/${id}/products`)
//         .then((response) => {
//           setProducts(response.data);
//         })
//         .catch((error) => {
//           console.error("Failed to fetch products:", error);
//         });
//     }
//   }, [id]);

//   const handleUpdateStock = async () => {
//     if (!selectedProduct) return;

//     try {
//       const response = await axios.post('/api/update-stock', {
//         productId: selectedProduct,
//         quantity,
//         type,
//         description,
//       });
//       alert('Stok berhasil diperbarui');
//     } catch (error) {
//       console.error("Failed to update stock:", error);
//       alert('Gagal memperbarui stok');
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Kelola Stok Produk di Toko {id}</h1>
//       <div>
//         <label className="block mb-2">Pilih Produk</label>
//         <select
//           className="border p-2 mb-4 w-full"
//           onChange={(e) => setSelectedProduct(Number(e.target.value))}
//         >
//           <option value="">Pilih Produk</option>
//           {products.map((product) => (
//             <option key={product.id} value={product.id}>
//               {product.name} (Stok: {product.stock})
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedProduct && (
//         <>
//           <div>
//             <label className="block mb-2">Jumlah</label>
//             <input
//               type="number"
//               className="border p-2 mb-4 w-full"
//               value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//             />
//           </div>
//           <div>
//             <label className="block mb-2">Tipe Pembaruan</label>
//             <select
//               className="border p-2 mb-4 w-full"
//               value={type}
//               onChange={(e) => setType(e.target.value as 'penambahan' | 'pengurangan')}
//             >
//               <option value="penambahan">Penambahan</option>
//               <option value="pengurangan">Pengurangan</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-2">Deskripsi</label>
//             <textarea
//               className="border p-2 mb-4 w-full"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//           <button
//             className="bg-blue-500 text-white px-4 py-2"
//             onClick={handleUpdateStock}
//           >
//             Perbarui Stok
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default StorePage;

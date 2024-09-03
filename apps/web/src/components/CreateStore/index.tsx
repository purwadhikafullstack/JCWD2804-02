'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const CreateStore: React.FC = () => {
  const [storeData, setStoreData] = useState({
    store_name: '',
    description: '',
    location: '',
    latitude: '',
    longitude: '',
    isMainStore: false,
  });

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setStoreData((prevData) => ({
      ...prevData,
      [name]: name === 'isMainStore' ? value === 'yes' : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { store_name, description, location, latitude, longitude, isMainStore } = storeData;

      await axios.post('http://localhost:8000/api/store', {
        store_name,
        description,
        location,
        latitude,
        longitude,
        isMainStore,
      });

      Swal.fire({
        title: 'Success',
        text: 'Store created!',
        icon: 'success',
      });
    } catch (error) {
      console.error('Error creating store:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to create store.',
        icon: 'error',
      });
    }
  };

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
        setStoreData((prevData) => ({
          ...prevData,
          latitude: e.latlng.lat.toString(),
          longitude: e.latlng.lng.toString(),
        }));
      },
    });

    return latitude && longitude ? (
      <Marker position={[latitude, longitude]} />
    ) : null;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-5xl text-center text-primary font-bold mb-6">
          Create a Store
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="store_name"
              className="block text-sm font-medium text-gray-700"
            >
              Store Name
            </label>
            <input
              type="text"
              name="store_name"
              id="store_name"
              className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
              value={storeData.store_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Store Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
              value={storeData.description}
              onChange={handleChange}
            />
          </div>
          <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Location Selector
            </h2>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker />
            </MapContainer>

            {error && <p className="mt-4 text-red-500">{error}</p>}

            {latitude && longitude && (
              <div className="mt-4">
                <p>
                  <strong>Latitude:</strong> {storeData.latitude}
                </p>
                <p>
                  <strong>Longitude:</strong> {storeData.longitude}
                </p>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="isMainStore"
              className="block text-sm font-medium text-gray-700"
            >
              Main Store
            </label>
            <select
              name="isMainStore"
              id="isMainStore"
              className="mt-1 block w-full p-2 border bg-white text-black border-gray-300 rounded-md"
              value={storeData.isMainStore ? 'yes' : 'no'}
              onChange={handleChange}
              required
            >
              <option value="">Main Store</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-secondary"
            >
              Create Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;

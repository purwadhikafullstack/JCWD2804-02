export interface Coordinates {
  longitude: number;
  latitude: number;
}

export const requestLocation = (): Promise<Coordinates> => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (err) => {
          reject({ error: err.message });
        },
      );
    } else {
      reject({ error: 'Geolocation is not supported by this browser.' });
    }
  });
};

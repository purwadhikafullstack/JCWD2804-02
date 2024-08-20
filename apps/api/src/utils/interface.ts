// Enum untuk menentukan peran pengguna
export enum Role {
  SUPERADMIN = 'SUPERADMIN',
  STOREADMIN = 'STOREADMIN',
  USER = 'USER'
}

// Interface untuk SuperAdmin
export interface SuperAdmin {
  id: number;
  name: string;
  email: string;
  phone: number;
  password: string;
  address: string;
  Store: Store[];          // Relasi dengan Store
  StoreAdmin: StoreAdmin[]; // Relasi dengan StoreAdmin
}

// Interface untuk Store
export interface Store {
  id: number;
  store_name: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  isMainStore: boolean;
  superAdminId: number;     // Foreign key ke SuperAdmin
  SuperAdmin?: SuperAdmin;  // Relasi ke SuperAdmin
  Products: Products[];     // Relasi dengan Products
  Order: Order[];           // Relasi dengan Order
  Payment: Payment[];       // Relasi dengan Payment
  StoreAdmin: StoreAdmin[]; // Relasi dengan StoreAdmin
}

// Interface untuk StoreAdmin
export interface StoreAdmin {
  id: number;
  name: string;
  email: string;
  phone: number;
  password: string;
  address: string;
  storeId: number;         // Foreign key ke Store
  Store?: Store;           // Relasi ke Store
  superAdminId: number;    // Foreign key ke SuperAdmin
  SuperAdmin?: SuperAdmin; // Relasi ke SuperAdmin
}

// Interface untuk Products
export interface Products {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  storeId: number;  // Foreign key ke Store
  Store?: Store;    // Relasi ke Store
  Order: Order[];   // Relasi dengan Order
}

// Interface untuk Order
export interface Order {
  id: number;
  date: Date;
  status: string;
  storeId: number;     // Foreign key ke Store
  Store?: Store;       // Relasi ke Store
  userId: number;      // Foreign key ke User
  User?: User;         // Relasi ke User
  productId: number;   // Foreign key ke Products
  Products?: Products; // Relasi ke Products
  Payment: Payment[];  // Relasi dengan Payment
}

// Interface untuk Payment
export interface Payment {
  id: number;
  total_amount: number;
  method: string;
  date: Date;
  status: string;
  orderId: number;  // Foreign key ke Order
  Order?: Order;    // Relasi ke Order
  storeId: number;  // Foreign key ke Store
  Store?: Store;    // Relasi ke Store
}

// Interface untuk User
export interface User {
  id: number;
  name: string;
  phone: number;
  email: string;
  password: string;
  status: string;
  role: Role;        // Enum role
  Order: Order[];    // Relasi dengan Order
  Addresses: Address[]; // Relasi dengan Address
}

// Interface untuk Address
export interface Address {
  id: number;
  isPrimary: boolean;
  userId: number;  // Foreign key ke User
  address: string;
  cityId: string;
  cityName: string;
  province: string;
  postalCode: string;
  User?: User;     // Relasi ke User
}

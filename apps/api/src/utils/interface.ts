export enum Role {
  SUPERADMIN = 'SUPERADMIN',
  STOREADMIN = 'STOREADMIN',
  USER = 'USER',
}

export interface SuperAdmin {
  id: number;
  name: string;
  email: string;
  phone: number;
  password: string;
  address: string;
}

export interface Store {
  id: number;
  store_name: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  isMainStore: boolean;
  Products: Products[];
  Order: Order[];
  Payment: Payment[];
  StoreAdmin: StoreAdmin[];
}

export interface StoreAdmin {
  id: number;
  name: string;
  email: string;
  phone: number;
  password: string;
  address: string;
  storeId: number;
  Store?: Store;
}

export interface Products {
  id?: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  storeId: number;
  Store?: Store;
  categoryId: number;
  Category?: Category;
}

export interface Order {
  id: number;
  date: Date;
  status: string;
  storeId: number;
  Store?: Store;
  userId: number;
  User?: User;
  productId: number;
  Products?: Products;
  Payment: Payment[];
}

export interface Payment {
  id: number;
  total_amount: number;
  method: string;
  date: Date;
  status: string;
  orderId: number;
  Order?: Order;
  storeId: number;
  Store?: Store;
}

export interface User {
  id: number;
  name: string;
  phone: number;
  email: string;
  password: string;
  status: string;
  role: Role;
  Order: Order[];
  Addresses: Address[];
}

export interface Address {
  id: number;
  isPrimary: boolean;
  userId: number;
  address: string;
  cityId: string;
  cityName: string;
  province: string;
  postalCode: string;
  User?: User;
}

export interface Category {
  id: number;
  name: string;
  Products: Products[];
}

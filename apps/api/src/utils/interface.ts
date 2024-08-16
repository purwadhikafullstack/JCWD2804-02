export interface SuperAdmin {
    id: number;
    name: string;
    email: string;
    phone: number;
    password: string;
    address: string;
    Store?: Store[];
    StoreAdmin?: StoreAdmin[];
  }
  
  export interface Store {
    longitude: any;
    isMainStore: any;
    latitude: any;
    id: number;
    store_name: string;
    description: string;
    location: string;
    superAdminId: number;
    SuperAdmin?: SuperAdmin;
    Products?: Products[];
    Order?: Order[];
    Payment?: Payment[];
    StoreAdmin?: StoreAdmin[];
  }
  
  export interface StoreAdmin {
    id: number;
    name: string;
    email: string;
    phone: number;
    password: string;
    address: string;
    storeId: number;
    superAdminId: number;
    Store?: Store;
    SuperAdmin?: SuperAdmin;
  }
  
  export interface Products {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    storeId: number;
    Store?: Store;
    Order?: Order[];
  }
  
  export interface Order {
    id: number;
    date: Date;
    status: string;
    storeId: number;
    userId: number;
    productId: number;
    Store?: Store;
    User?: User;
    Products?: Products;
    Payment?: Payment[];
  }
  
  export interface Payment {
    id: number;
    total_amount: number;
    method: string;
    date: Date;
    status: string;
    orderId: number;
    storeId: number;
    Order?: Order;
    Store?: Store;
  }
  
  export interface User {
    id: number;
    name: string;
    address: string;
    phone: number;
    email: string;
    password: string;
    status: string;
    Order?: Order[];
  }
  
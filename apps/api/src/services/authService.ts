import { prisma } from '../prisma.ts';

export interface User {
  id: number;
  name: string;
  address: string;
  phone: number;
  email: string;
  password: string;
  status: string;
}

export const register = async (auth: User) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: auth.email },
  });
  if (existingUser) {
    throw new Error('Email is already in use');
  }
};

export const login = async (auth: User) => {
  const user = await prisma.user.findUnique({
    where: { email: auth.email },
  });
  if (!user) throw new Error('User not found');
};

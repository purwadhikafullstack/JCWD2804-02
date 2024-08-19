import { prisma } from '../prisma.ts';
import bcrypt from 'bcryptjs';

export interface User {
  name?: string;
  address?: string;
  phone?: string;
  email: string;
  password: string;
  Order?: any;
}

export const register = async (auth: User) => {
  const hashedPassword = await bcrypt.hash(auth.password, 10);
  const user = await prisma.user.findUnique({
    where: { email: auth.email },
  });
  if (user?.email) {
    throw new Error('Email is already in use');
  }
  const existingUser = await prisma.user.create({
    data: { email: auth.email, password: auth.password },
  });

  console.log(user);

  return existingUser;
};

export const login = async (auth: User) => {
  const user = await prisma.user.findUnique({
    where: { email: auth.email },
  });
  if (!user) throw new Error('User not found');

  const valid = await bcrypt.compare(auth.password, user.password);
  if (!valid) throw new Error('Invalid password');
  return user;
};

export function getUsers() {
  throw new Error('Function not implemented.');
}

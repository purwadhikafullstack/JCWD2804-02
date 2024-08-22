import passport from 'passport';
import { prisma } from '../prisma.ts';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Request, Response, NextFunction } from 'express';

export interface User {
  name?: string;
  address?: string;
  phone?: string;
  email: string;
  password: string;
  Order?: any;
}

export const register = async (auth: User) => {
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
  return user;
};

export const configureGoogleOAuth = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: 'http://localhost:8000/api/auth/google/callback',
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: Function,
      ) => {
        // Lakukan sesuatu dengan profile Google user di sini (misal: mencari atau membuat user di database)
        return done(null, profile);
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user: any, done) => {
    done(null, user);
  });
};

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

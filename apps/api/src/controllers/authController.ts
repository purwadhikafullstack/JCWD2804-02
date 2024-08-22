import { Request, Response } from 'express';
import * as authService from '../services/authService.ts';
import { generateToken } from '../utils/jwt.ts';
import passport from 'passport';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, address, phone, email, password, Order } = req.body;
    const bodyRequest: authService.User = {
      name: name,
      address: address,
      phone: phone,
      email: email,
      password: password,
      Order: Order,
    };
    const user = await authService.register(bodyRequest);
    if (!user) {
      throw new Error('User register failed');
    }
    res.status(201).send({
      message: 'User registered successfully',
    });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const bodyRequest: authService.User = {
      email: email,
      password: password,
    };
    const user = await authService.login(bodyRequest);
    if (!user) {
      throw new Error('User login failed');
    }
    const token = generateToken(user.id);
    res.status(200).send({
      message: 'User logged in',
      token: token,
      role: user.role,
    });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

export const googleAuthCallback = passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login',
});

export const logout = (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send('Failed to logout');
    }
    res.redirect('/');
  });
};

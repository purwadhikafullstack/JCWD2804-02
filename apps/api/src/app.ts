import express, { Application } from 'express';
import session from 'express-session';
import passport from 'passport';
import { configureGoogleOAuth } from './services/authService.ts';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import storeRouter from '@/routers/storeRouters.ts';
import productsRouter from '@/routers/productsRouters.ts';
import locationRouter from '@/routers/locationRouter.ts';
import authRouter from '@/routers/authRouter.ts';
import userAddressRouter from '@/routers/userAddressRouter.ts';
import shippingAddressRouter from '@/routers/shippingAddressRouter.ts';
// import categoryProductRouter from '@/routers/categoryProductRouter.ts';
import emailRouter from '@/routers/emailRouter.ts';

dotenv.config({
  path: path.resolve(process.cwd(), '.env.development'),
});
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
configureGoogleOAuth();

app.use(express.json());
app.use('/api', storeRouter);
app.use('/api', productsRouter);
app.use('/api', locationRouter);
app.use('/api/auth', authRouter);
app.use('/api', shippingAddressRouter);
app.use('/api', userAddressRouter);
// app.use('/api', categoryProductRouter);
app.use('/api/email', emailRouter);

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});

export default app;

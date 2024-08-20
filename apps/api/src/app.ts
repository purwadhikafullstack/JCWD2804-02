import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
  Application,
} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import storeRouter from '../src/routers/storeRouters.ts';
import locationRouter from '../src/routers/locationRouter.ts';
import authRouter from '../src/routers/authRouter.ts';
import userAddressRouter from '../src/routers/userAddressRouter.ts'
import shippingAddressRouter from '../src/routers/shippingAddressRouter.ts'


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

app.use(express.json());
app.use("/api", storeRouter);
app.use("/api", locationRouter);
app.use("/api/auth", userAddressRouter);
app.use("/api", shippingAddressRouter);



app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});

export default app;

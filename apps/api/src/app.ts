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

dotenv.config({
  path: path.resolve(process.cwd(), '.env.development')
});
const app: Application = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
})

export default app;
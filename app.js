import 'babel-polyfill';
import 'babel-core/register';
import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import CatApiController from './controllers';

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV === 'production'
      ? 'https://sort-cat.herokuapp.com'
      : 'http://localhost:3000'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET'
  );
  next();
});

app.use('/api/v1', router);

app.get('/', (req, res) => {
  CatApiController.ping(req, res);
});
app.all('*', (req, res) => {
  CatApiController.handleInvalidRoute(req, res);
});
const port = parseInt(process.env.PORT, 10) || 8000;

app.listen(port, () => console.log(`server live on port ${port}`));
export default app;

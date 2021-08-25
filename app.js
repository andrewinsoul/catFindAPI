import 'babel-polyfill';
import 'babel-core/register';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    status: 'success',
    message: 'welcome to cat find API'
  });
});
app.all('*', (req, res) => {
  res.status(404).send({
    status: 'error',
    error: 'invalid route, not found'
  });
});
const port = parseInt(process.env.PORT, 10) || 8000;

app.listen(port, () => console.log(`server live on port ${port}`));
export default app;

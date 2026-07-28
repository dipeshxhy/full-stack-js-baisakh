import express from 'express';
import productRouter from './routes/product.route.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});
app.use('/api/products', productRouter);
export default app;

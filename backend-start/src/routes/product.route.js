import { Router } from 'express';
import * as productController from '../controllers/product.controller.js';
const productRouter = Router();

productRouter.post('/', productController.createProduct).get('/', productController.getProducts);
productRouter
  .get('/:id', productController.getProductById)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

export default productRouter;

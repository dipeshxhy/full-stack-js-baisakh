import Product from '../models/product.model.js';

const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const product = await Product.create({
    name,
    price,
    description,
  });
  res.status(201).json({
    success: true,
    data: product,
    message: 'Product created successfully',
  });
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    data: products,
    message: 'Products fetched successfully',
  });
};
const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }
  res.status(200).json({
    success: true,
    data: product,
    message: 'Product fetched successfully',
  });
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const product = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }
  res.status(200).json({
    success: true,
    data: product,
    message: 'Product updated successfully',
  });
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }
  res.status(200).json({
    success: true,
    data: product,
    message: 'Product deleted successfully',
  });
};

export { createProduct, getProductById, getProducts, updateProduct, deleteProduct };

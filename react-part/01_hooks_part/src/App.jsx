import { useState } from 'react';
import AddProduct from './components/AddProduct';
import ShowProducts from './components/ShowProducts';
const productsData = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is product 1',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is product 2',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://via.placeholder.com/150',
    description: 'This is product 3',
  },
];
const App = () => {
  const [products, setProducts] = useState(productsData);
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <AddProduct addProduct={addProduct} />
      <ShowProducts products={products} />
    </div>
  );
};
export default App;

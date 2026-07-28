import ProductCard from './ProductCrad';

const ShowProducts = ({ products }) => {
  localStorage.removeItem('products');
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ShowProducts;

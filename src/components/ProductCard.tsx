import { IProduct } from '../types';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = () => {
  return (
    <div className="border rounded mb-2 p-3">
      <h2>{product.title}</h2>
    </div>
  );
};

export default ProductCard;

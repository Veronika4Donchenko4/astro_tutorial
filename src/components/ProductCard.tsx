import type { IProduct } from '../types';
import { useState } from 'preact/hooks';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [details, setDetails] = useState(false);

  const toggle = () => setDetails((prev) => !prev);
  return (
    <div className="border rounded mb-2 p-3">
      <h2 className="text-lg">{product.title}</h2>
      <p className="font-bold">{product.price}</p>

      <button
        onClick={toggle}
        className="border py-2 px-4 bg-yellow-400 text-white"
      >
        Toggle Description
      </button>

      {details && <p>{product.description}</p>}
    </div>
  );
};

export default ProductCard;

import type { Products } from "../../types/product";

type productItemProps = {
  products: Products[];
};
export default function ProductItem({ products }: productItemProps) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <img src={product.image} alt={product.title} width="100" />
        </div>
      ))}
    </div>
  );
}

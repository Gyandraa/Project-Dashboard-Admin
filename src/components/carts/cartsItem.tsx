import type { Carts } from "../../types/carts";

type cartsItemProps = {
  carts: Carts[];
};
export default function CartsItem({ carts }: cartsItemProps) {
  return (
    <div>
      {carts.map((cart) => (
        <div key={cart.id}>
          <h3>Cart ID: {cart.id}</h3>
          <p>Title: {cart.title}</p>
          <p>Date: {cart.date}</p>
          <ul>
            {cart.products.map((product, index) => (
              <li key={index}>
                Product ID: {product.productId}, Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

import { useCart } from "../Context/CartContext";

export default function Cart() {
  const { state } = useCart();

  return (
    <>
      <h1>I am Cart</h1>
      {state.cart.map((item) => (
        <li>{item.id}</li>
      ))}
    </>
  );
}

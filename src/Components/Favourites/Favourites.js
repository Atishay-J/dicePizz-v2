import { useCart } from "../Context/CartContext";

export default function Favourites() {
  const value = useCart();

  return (
    <>
      <h1>I am Favourites</h1>
      {value.state.favourites.map((item) => (
        <li>{item.id}</li>
      ))}
    </>
  );
}

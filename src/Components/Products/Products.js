import { data } from "../../Data";
import { ProductCard, useCart } from "../index";

export default function Products() {
  const value = useCart();

  console.log("value", value);

  return (
    <>
      <h1>I am products</h1>
      {data.map((item) => (
        <li className="listStyleNone" key={item.id}>
          <ProductCard
            item={item}
            reducerState={value.state}
            dispatch={value.dispatch}
          />
        </li>
      ))}
    </>
  );
}

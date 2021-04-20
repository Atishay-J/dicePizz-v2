import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ item, reducerState, dispatch }) {
  return (
    <div className="productCardContainer">
      <h1>{item.name}</h1>
      <p>
        Price: {item.price} {reducerState.value}
      </p>
      {console.log(
        "ReducerId",
        reducerState.cart.find((itemInCart) => itemInCart.id === item.id)
      )}
      {reducerState.cart.find((itemInCart) => itemInCart.id === item.id) ? (
        <Link to="/cart">
          <button>Goto cart</button>
        </Link>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", payload: { id: item.id } })
          }
        >
          Add to Cart
        </button>
      )}
      <div className="addToFavContainer">
        <input
          class="heartBtn"
          type="checkbox"
          checked={reducerState.favourites.find(
            (itemsInFav) => itemsInFav.id === item.id
          )}
          onChange={() =>
            dispatch({ type: "TOGGLE_FAVOURITES", payload: { id: item.id } })
          }
        />
      </div>
    </div>
  );
}

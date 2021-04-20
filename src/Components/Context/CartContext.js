import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const initState = {
  cart: [],
  favourites: [],
  value: "value from reducer",
  isItemInCart: false,
};

const cartReducer = (state, action) => {
  console.log("Dispatch worked");

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        isItemInCart: true,
        cart: [...state.cart, { id: action.payload.id }],
      };

    case "TOGGLE_FAVOURITES":
      if (state.favourites.find((item) => item.id === action.payload.id)) {
        console.log(
          "Togglinggg",
          state.favourites.filter((item) => item.id !== action.payload.id)
        );
        return {
          ...state,
          favourites: state.favourites.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }

      return {
        ...state,
        favourites: [...state.favourites, { id: action.payload.id }],
      };

    default:
      return state;
  }
};

//   ***** CART PROVIDER  *****

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

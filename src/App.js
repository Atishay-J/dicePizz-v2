import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Products, Cart, Favourites, Navbar } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/favourite" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;

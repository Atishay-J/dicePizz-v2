import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> ||
        <Link to="/cart">Cart</Link> ||
        <Link to="/favourite">Favourite</Link>
      </nav>
    </>
  );
}

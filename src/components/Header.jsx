import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartItems } = useCart();

  return (
    <header style={{ padding: "1rem" }}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
}

export default Header;


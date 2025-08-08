import { useCart } from "../context/CartContext";
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.thumbnail,
    };
    addToCart(cartItem);
  };

  return (
    <div className={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;




















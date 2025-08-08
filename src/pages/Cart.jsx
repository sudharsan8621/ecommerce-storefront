import { useCart } from "../context/CartContext";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  // Calculate total cart value
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              {/* ✅ Fallback image if item.image is missing */}
              <img
                src={item.image || "https://via.placeholder.com/100"}
                alt={item.name}
                className={styles.image}
              />

              <div className={styles.details}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>

                <div className={styles.controls}>
                  <span>Quantity: </span>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className={styles.totalSection}>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;



import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import styles from "../styles/ProductDetails.module.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Product not found", err));
  }, [id]);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      },
    });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p className={styles.price}>₹{product.price}</p>
        <p>Rating: ⭐ {product.rating}</p>
        <p className={styles.desc}>{product.description}</p>
        <button onClick={handleAddToCart} className={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;

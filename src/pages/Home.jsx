// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import styles from "../styles/Home.module.css";

// function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then(res => res.json())
//       .then(data => setProducts(data.products))
//       .catch(error => console.error("Error fetching products:", error));
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h1>All Products</h1>
//       <div className={styles.grid}>
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
// import styles from "../styles/Home.module.css";

// function Home() {
//   return (
//     <div className={styles.container}>
//       <p>Welcome to our store!</p>
//     </div>
//   );
// }

// export default Home;
// import styles from "../styles/Home.module.css";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className={styles.container}>
//       <section className={styles.hero}>
//         <div className={styles.content}>
//           <h1>Welcome to <span>ShopEasy</span></h1>
//           <p>Your one-stop destination for trendy and affordable shopping.</p>
//           <Link to="/products" className={styles.ctaButton}>Start Shopping</Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    // Disable scroll when Home is active
    document.body.style.overflow = "hidden";

    // Re-enable scroll when leaving Home
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Welcome to <span>ShopEasy</span></h1>
          <p>Your one-stop destination for trendy and affordable shopping.</p>
          <Link to="/products" className={styles.ctaButton}>Start Shopping</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

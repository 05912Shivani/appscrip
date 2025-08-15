import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
   // Functional component that receives a single `product` object as a prop
  return (
    <article className={styles.card} aria-labelledby={`p-${product.id}`}>
  {/* Product Image */}
      <img src={product.image} alt={product.title} className={styles.image} />  
        {/* Product Info Section */}
      <div className={styles.info}>
        {/* Product Title */}
        <h3 id={`p-${product.id}`} className={styles.title}>{product.title}</h3>
        {/* Product Price */}
        <p className={styles.price}>${product.price}</p>
          {/* Like / Wishlist Icon */}
        <span className="like">{product.liked ? '❤️' : '🤍'}</span>
      </div>
    </article>
  );
}

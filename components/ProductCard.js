import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <article className={styles.card} aria-labelledby={`p-${product.id}`}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h3 id={`p-${product.id}`} className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
        <span className="like">{product.liked ? '❤️' : '🤍'}</span>
      </div>
    </article>
  );
}

import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from mettā muse.</p>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className={styles.footerMain}>
        <div className={styles.footerCol}>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={`${styles.footerCol} ${styles.contactInfo}`}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <p className={styles.smallText}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>

        <div className={`${styles.footerCol} ${styles.socialPayment}`}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" />
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" />
            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" />
            <img src="https://img.icons8.com/ios-filled/50/000000/apple-pay.png" alt="Apple Pay" />
            <img src="https://img.icons8.com/color/48/000000/stripe.png" alt="Shop Pay" />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

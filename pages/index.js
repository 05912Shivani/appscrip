import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";  // Next.js component to manage <head> elements (title, meta tags, scripts)
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Sidebar from "@/components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home({ products }) {
  const [sortBy, setSortBy] = useState("RECOMMENDED");    // State for sorting method (default is "RECOMMENDED")
  const [showFilter, setShowFilter] = useState(true);     // State to toggle filter sidebar visibility
  const [selectedCategories, setSelectedCategories] = useState([]);   // State to store selected categories from Sidebar filter

  // Filter products based on selected categories
  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((p) => selectedCategories.includes(p.category))    // Show only matching categories
      : products;    // If no category selected, show all products

  // Sort the filtered products based on sortBy value
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "PRICE : HIGH TO LOW":
        return b.price - a.price;
      case "PRICE : LOW TO HIGH":
        return a.price - b.price;
      case "NEWEST FIRST":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // Schema.org structured data for SEO
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sortedProducts.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: p.title,
        image: p.image,
        description: p.description,
        sku: String(p.id),
        brand: p.category || "Appscrip Store",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: p.price,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
    {/* SEO meta tags and JSON-LD script */}
      <Head>
        <title>DISCOVER OUR PRODUCTS</title>
        <meta
          name="description"
          content="Discover top-quality products — responsive PLP demo (SSR) built with Next.js."
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* Page Title */}
        <h1 className={styles.pageTitle}>DISCOVER OUR PRODUCTS</h1>
        <h2 className={styles.subTitle}>
          Handpicked items — responsive listing powered by SSR
        </h2>

        {/* Top Controls */}
        <div className={styles.topControls}>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={styles.hideFilterBtn}
          >
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.sortSelect}
          >
            {[
              "RECOMMENDED",
              "NEWEST FIRST",
              "POPULAR",
              "PRICE : HIGH TO LOW",
              "PRICE : LOW TO HIGH",
            ].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Flex layout */}
        <div className={styles.layout}>
          {showFilter && (
            <Sidebar
              products={products}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          )}
          <section className={styles.grid} aria-label="Products">
            {sortedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
// Server-side data fetching (SSR)
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");  // Fetch products from Fake Store API
  const products = await res.json();   // Parse JSON response
  return { props: { products } };    // Pass products as props to component
}

# Appscrip Task – Shikha Sharma

This is **Appscrip PLP Task** based on the given [Figma Design](https://www.figma.com/file/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP?type=design).  
The project is built using **Next.js** with **Server-Side Rendering (SSR)** and a mock API (`https://fakestoreapi.com/`).  
It includes responsive UI, filter functionality, sorting, SEO optimizations, and schema markup.

---

## 🚀 Features

### ✅ Functional Requirements
- **Product Listing Page** styled per the Figma design.
- **Filter Sidebar** with accordion sections.
- **"IDEAL FOR" filter** that works with FakeStore API categories:
  - Men → `"men's clothing"`
  - Women → `"women's clothing"`
  - Baby & Kids → dummy mapping
- **Dynamic item count** (e.g., `3425 ITEMS`) updates based on filters.
- **Sorting**: Recommended, Newest, Popular, Price High→Low, Price Low→High.
- **Show/Hide filter sidebar**.
- **Responsive design** for mobile, tablet, and desktop.

### 🛠 Technical Requirements
- **Server-Side Rendering (SSR)** using `getServerSideProps`.
- **SEO Optimization**:
  - Page title & meta description
  - H1 & H2 tags
  - Image `alt` attributes
  - JSON-LD Schema Markup in `<head>`.
- **Minimal dependencies** — mostly native Next.js/React.
- **Mock API** integration (`https://fakestoreapi.com/`).
- **Hosted publicly** on Netlify/Vercel.

---




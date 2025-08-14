// import { useState } from 'react';
// import styles from '../styles/Sidebar.module.css';

// export default function Sidebar() {
//   const filters = [
//     'IDEAL FOR',
//     'OCCASION',
//     'WORK',
//     'FABRIC',
//     'SEGMENT',
//     'SUITABLE FOR',
//     'RAW MATERIALS',
//     'PATTERN',
//   ];

//   const [expanded, setExpanded] = useState({});

//   const toggleSection = (section) => {
//     setExpanded((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const idealForOptions = ['Men', 'Women', 'Baby & Kids'];

//   return (
//     <aside className={styles.filterSidebar}>
//       <div className={styles.itemCount}>3425 ITEMS</div>

//       <div className={styles.filterCheckbox}>
//         <input type="checkbox" id="customizable" />
//         <label htmlFor="customizable">Customizable</label>
//       </div>

//       {filters.map((section) => (
//         <div key={section} className={styles.filterSection}>
//           <div
//             className={styles.filterHeader}
//             onClick={() => toggleSection(section)}
//           >
//             <span>{section}</span>
//             <span>{expanded[section] ? '▲' : '▼'}</span>
//           </div>

//           {expanded[section] && (
//             <div className={styles.filterContent}>
//               {section === 'IDEAL FOR' ? (
//                 <ul className={styles.filterList}>
//                   <li className={styles.filterText}>All</li>
//                   <li className={styles.filterText}>Unselect all</li>
//                   {idealForOptions.map((opt) => (
//                     <li key={opt}>
//                       <label>
//                         <input type="checkbox" />
//                         {opt}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 'All'
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </aside>
//   );
// }


import { useState } from "react";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar({
  products,
  selectedCategories,
  setSelectedCategories,
}) {
  const filters = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  const categoryMap = {
    Men: "men's clothing",
    Women: "women's clothing",
    "Baby & Kids": "baby-kids", // No products in API
  };

  const idealForOptions = ["Men", "Women", "Baby & Kids"];
  const [expanded, setExpanded] = useState({ "IDEAL FOR": true });

  const toggleSection = (section) => {
    setExpanded((prev) => ({
      [section]: !prev[section], // Only one section open
    }));
  };

  const handleCheckboxChange = (category) => {
    const mappedCategory = categoryMap[category];
    setSelectedCategories((prev) =>
      prev.includes(mappedCategory)
        ? prev.filter((c) => c !== mappedCategory)
        : [...prev, mappedCategory]
    );
  };

  const itemCount = products.filter((p) =>
    selectedCategories.length > 0
      ? selectedCategories.includes(p.category)
      : true
  ).length;

  return (
    <aside className={styles.filterSidebar}>
      <div className={styles.itemCount}>{itemCount} ITEMS</div>

      <div className={styles.filterCheckbox}>
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">Customizable</label>
      </div>

      {filters.map((section) => (
        <div key={section} className={styles.filterSection}>
          <div
            className={styles.filterHeader}
            onClick={() => toggleSection(section)}
          >
            <span>{section}</span>
            <span>{expanded[section] ? "▲" : "▼"}</span>
          </div>

          {expanded[section] && (
            <div className={styles.filterContent}>
              {section === "IDEAL FOR" ? (
                <ul className={styles.filterList}>
                  <li
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                      marginBottom: "0.5rem",
                    }}
                    onClick={() => setSelectedCategories([])}
                  >
                    Unselect All
                  </li>
                  {idealForOptions.map((opt) => (
                    <li key={opt}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(
                            categoryMap[opt]
                          )}
                          onChange={() => handleCheckboxChange(opt)}
                        />
                        {opt}
                      </label>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>All</span>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}

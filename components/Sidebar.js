import { useState } from "react";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar({
  products,   // All products fetched from API
  selectedCategories,   // Array of currently selected categories
  setSelectedCategories,   // Function to update selected categories
}) {
  // Filter section headings
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
// Map display names to actual category values from API
  const categoryMap = {
    Men: "men's clothing",
    Women: "women's clothing",
    "Baby & Kids": "baby-kids", 
  };
// Options shown under "IDEAL FOR"
  const idealForOptions = ["Men", "Women", "Baby & Kids"];
  const [expanded, setExpanded] = useState({ "IDEAL FOR": true });  // State to store which filter sections are expanded (default: IDEAL FOR is open)

  // Toggle expand/collapse for a section
  const toggleSection = (section) => {
    setExpanded((prev) => ({
      [section]: !prev[section],  // Toggle only the clicked section
    }));
  };
// Handle checkbox click for a category
  const handleCheckboxChange = (category) => {
    const mappedCategory = categoryMap[category];  // Map to API category
    setSelectedCategories((prev) =>
      prev.includes(mappedCategory)
        ? prev.filter((c) => c !== mappedCategory)  // Remove category if already selected
        : [...prev, mappedCategory]    // Add category if not selected
    );
  };
// Count how many products match selected categories
  const itemCount = products.filter((p) =>
    selectedCategories.length > 0
      ? selectedCategories.includes(p.category)  // Filter only if categories are selected
      : true    // Otherwise show all
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

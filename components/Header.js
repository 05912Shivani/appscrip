import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  // State to toggle the language menu dropdown
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  // State to toggle the profile menu dropdown
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();// Next.js router for navigation

  const handleProfileClick = () => {    // Toggle profile menu visibility
    setShowProfileMenu((prev) => !prev);
  };

  return (
    <header
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div
        style={{ fontWeight: 700, fontSize: "1.2rem", cursor: "pointer" }}
        onClick={() => router.push("/")}
      >
        LOGO
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "1.5rem", fontWeight: 500 }}>
        <a
          href="https://www.myntra.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
        <a
          href="https://www.behance.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Skills
        </a>
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stories
        </a>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      {/* Icons  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
        }}
      >
        {/* Just icons, no redirect */}
        <span style={{ cursor: "default" }}>🔍</span>
        <span style={{ cursor: "default" }}>❤️</span>
        <span style={{ cursor: "default" }}>🛍️</span>

        {/* Profile */}
        <div style={{ position: "relative" }}>
          <span style={{ cursor: "pointer" }} onClick={handleProfileClick}>
            👤
          </span>
          {showProfileMenu && (
            <div
              style={{
                position: "absolute",
                top: "2rem",
                right: 0,
                background: "#fff",
                border: "1px solid #ddd",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderRadius: "4px",
                padding: "0.5rem",
              }}
            >
              <p
                style={{
                  margin: 0,
                  padding: "0.5rem",
                  cursor: "default",
                  color: "#555",
                }}
              >
                My Profile
              </p>
              <p
                style={{ margin: 0, padding: "0.5rem", cursor: "pointer" }}
                onClick={() => alert("Logged out")}
              >
                Logout
              </p>
            </div>
          )}
        </div>

        {/* Language */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.2rem",
            cursor: "pointer",
          }}
          onClick={() => setShowLanguageMenu((prev) => !prev)}
        >
          <span>ENG</span>
          <span style={{ fontSize: "0.7rem" }}>▼</span>
          {showLanguageMenu && (
            <div
              style={{
                position: "absolute",
                top: "2rem",
                right: "-2rem",
                background: "#fff",
                border: "1px solid #ddd",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderRadius: "4px",
                padding: "0.5rem",
              }}
            >
              <p
                style={{ margin: 0, padding: "0.5rem", cursor: "pointer" }}
                onClick={() => alert("Language set to ENG")}
              >
                ENG
              </p>
              <p
                style={{ margin: 0, padding: "0.5rem", cursor: "pointer" }}
                onClick={() => alert("Language set to HIN")}
              >
                HIN
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


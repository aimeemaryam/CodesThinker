import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/image1.webp';

const Navbar = () => {
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverItem, setHoverItem] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav
      style={{
        background: "#0b0654",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "12px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.8s ease",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "150px",
          height: "55px",
        }}
      />

      {/* Navbar Links */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "55px",
          margin: 0,
          padding: 0,
        }}
      >
        {["Home", "About", "Services", "Projects", "Team", "Contact"].map(
          (item) => (
            <li key={item}>
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }
                onMouseEnter={() => setHoverItem(item)}
                onMouseLeave={() => setHoverItem("")}
                style={{
                  color: hoverItem === item ? "#87D8F7" : "#fff",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "600",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "color .3s ease",
                }}
              >
                {item}

                {/* Animated Underline */}
                <span
                  style={{
                    marginTop: "6px",
                    height: "3px",
                    width: hoverItem === item ? "100%" : "0%",
                    backgroundColor: "#fff",
                    transition: "width .35s ease",
                    borderRadius: "10px",
                  }}
                ></span>
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Login Button */}
      <button
        style={{
          background: "linear-gradient(90deg, #0b0654, #4169E1)",
          color: hoverBtn ? "#0b0654" : "#fff",
          border: "1px solid #fff",
          padding: "10px 37px",
          borderRadius: "30px",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all .35s ease",
          transform: hoverBtn ? "scale(1.05)" : "scale(1)",
          boxShadow: hoverBtn
            ? "0 8px 18px rgba(255,255,255,0.35)"
            : "none",
        }}
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
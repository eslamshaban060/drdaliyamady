"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Container } from "react-bootstrap";
import Logo from "./Logo/Logo";
import Nav from "./nav/Nav";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const hight = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", hight);
    return () => window.removeEventListener("scroll", hight);
  });

  return (
    <header
      style={{
        backgroundColor: showHeader ? "#fff" : "transparent",
        paddingTop: showHeader ? "0" : "10px",
      }}
      className={`w-100  ${styles.header}`}
    >
      <Container className={`d-flex justify-content-between`}>
        {/* logo */}
        <div>
          <Logo />
        </div>

        {/* nav bar */}
        <div>
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;

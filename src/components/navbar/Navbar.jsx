import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Links from "./links/Links";
const links = [
  { title: "Home Page", path: "/" },
  { title: "About Page", path: "/about" },
  { title: "Contact Page", path: "/contact" },
  { title: "Blog Page", path: "/blog" },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;

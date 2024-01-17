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
      <div>Logo</div>
      <div>
        <Link href="/">Home Page</Link>
        <Link href="/about">About Page</Link>
        <Link href="/contact">Contact Page</Link>
        <Link href="/blog">Blog Page</Link>
      </div>
    </div>
  );
};

export default Navbar;

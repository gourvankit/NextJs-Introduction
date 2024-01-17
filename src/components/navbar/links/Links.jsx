"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";
import "./links.module.css";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const session = true;
const isAdmin = true;
const Links = () => {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title}></NavLink>
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
          )}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
      )}
    </div>
  );
};

export default Links;

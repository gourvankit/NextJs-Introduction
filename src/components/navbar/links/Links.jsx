import Link from "next/link";
import React from "react";
const links = [
  { title: "Home Page", path: "/" },
  { title: "About Page", path: "/about" },
  { title: "Contact Page", path: "/contact" },
  { title: "Blog Page", path: "/blog" },
];
const Links = () => {
  return (
    <div>
      {links.map((link) => {
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>;
      })}
    </div>
  );
};

export default Links;

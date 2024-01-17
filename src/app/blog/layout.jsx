import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>This is a blog layout</h1>
      {children}
    </div>
  );
};

export default Layout;

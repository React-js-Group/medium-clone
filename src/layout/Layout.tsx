import Footer from "./footer/Footer";
import Header from "./header/Header";
import React from "react";
import MainTest from "./MainTest";
import BlogsTest from "./BlogsTest";
import HeaderTop from "./header/HeaderTop";

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderTop />
      {/* <MainTest /> */}

      {/* <BlogsTest /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

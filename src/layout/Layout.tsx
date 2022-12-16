import Footer from "./footer/Footer";
import Header from './header/Header';
import React from 'react';
import MainTest from './MainTest';
import BlogsTest from './BlogsTest';

const Layout = () => {
    return (
        <div>
            <Header/>
            <MainTest/>
            <div style={{display:"flex",padding:"20px 80px"}} >
            <BlogsTest/>
            <Footer/>
            </div>
        </div>
    );
};

export default Layout;
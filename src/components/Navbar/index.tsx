import React from "react";
import MainNavbar from "./MainNavbar";

interface NavbarProps {
  scroll: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scroll }): JSX.Element => {
  return (
    <>
      <MainNavbar scroll={scroll} />
    </>
  );
};

export default Navbar;

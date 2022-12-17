import React from "react";
import MainNavbar from "./MainNavbar";
import UserNavbar from "./UserNavbar";

interface NavbarProps {
  scroll: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scroll }): JSX.Element => {
  return (
    <>
      <MainNavbar scroll={scroll} />
      {/* <UserNavbar /> */}
    </>
  );
};

export default Navbar;

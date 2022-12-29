import MainNavbar from "./MainNavbar";
import UserNavbar from "./UserNavbar";

interface NavbarProps {
  scroll: boolean;
  token: unknown | null;
}

const Navbar: React.FC<NavbarProps> = ({ scroll, token }): JSX.Element => {
  return <>{token ? <UserNavbar /> : <MainNavbar scroll={scroll} />}</>;
};

export default Navbar;

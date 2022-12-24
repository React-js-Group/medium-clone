import Body from "../Body/Body";
import SideBar from "../sideBar";
import classes from "./Page.module.scss";
interface OptionsProps {
  children: any;
  sideBar: Array<String>;
}
const Page: React.FC<OptionsProps> = ({
  children,
  sideBar,
}): JSX.Element => {
  return (
    <div className={classes.container}>
      <SideBar sideBar={sideBar} />
      {children}
    </div>
  );
};

export default Page;

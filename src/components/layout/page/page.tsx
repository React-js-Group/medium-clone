import Body from "../Body/Body";
import SideBar from "../sideBar/SideBar";
import classes from "./Page.module.scss";
interface OptionsProps {
  children: any;
}
const Page: React.FC<OptionsProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className={classes.container}>
      <SideBar />
      <Body />
    </div>
  );
};

export default Page;

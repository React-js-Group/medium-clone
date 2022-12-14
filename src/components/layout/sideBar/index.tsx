import BookMarkSideBar from "./BookmarkSideBar/BookMarkSideBar";
import classes from "./SideBar.module.scss";
interface OptionsProps {
  sideBar: any;
}
const SideBar: React.FC<OptionsProps> = ({
  sideBar,
}): JSX.Element => {
  return (
    <div className={classes.SideBar}>
      {sideBar == "BookMark" && <BookMarkSideBar />}
    </div>
  );
};

export default SideBar;

import Link from "next/link";
import classes from "./BookMarkMenu.module.scss";

const BookMarkMenu: React.FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <li>
          <Link href="/">سیو</Link>
        </li>
        <li>
          <Link href="/">هایلایت</Link>
        </li>
      </ul>
    </div>
  );
};

export default BookMarkMenu;

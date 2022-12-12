import FeedItem from "../feedItem/FeedItem";
import classes from "./FeedList.module.scss";

const FeedList: React.FC = (): JSX.Element => {
  return (
    <div className={classes.Container}>
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
};

export default FeedList;

import FeedList from "./FeedList/FeedList";
import classes from "./FeedBox.module.scss";
import FeedLabel from "./FeedsBoxLabels/FeedsBoxLabel";

const FeedBox: React.FC = (): JSX.Element => {
  return (
    <div className={classes.Container}>
      <FeedList />
      <FeedLabel />
    </div>
  );
};

export default FeedBox;

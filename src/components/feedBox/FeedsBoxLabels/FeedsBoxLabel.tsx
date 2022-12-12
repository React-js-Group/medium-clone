import FeedLabelItem from "./FeedLabelItem/FeedLabelItem";
import classes from "./FeedsBoxLabel.module.scss";

const FeedBoxLabel: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={classes.Container}>
        <h3 className={classes.LabelBoxTitle}>
          Discover more of what matters to you
        </h3>
        <div className={classes.labelItems}>
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
          <FeedLabelItem />
        </div>
      </div>
    </>
  );
};

export default FeedBoxLabel;

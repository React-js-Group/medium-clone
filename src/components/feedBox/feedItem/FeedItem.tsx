import classes from "./FeedItem.module.scss";
import Image from "next/image";
import feedImg from "../../../../Img/1.png";
import bookMark from "../../../../Img/bookMark.svg";

const myLoader = (src: any) => {
  return src;
};
const FeedItem: React.FC = (): JSX.Element => {
  return (
    <div className={classes.feedItem}>
      <div className={classes.feedDes}>
        <h2>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ
        </h2>
        <h3>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ
        </h3>
        <div className={classes.footer}>
          <div className={classes.footerRight}>
            <div className={classes.date}>اسفند 1401</div>
            <div className={classes.readTime}>7 دقیقه</div>
            <div className={classes.label}>سلامتی</div>
          </div>
          <div className={classes.footerLeft}>
            <Image
              width={30}
              src={bookMark}
              alt={"bookMark"}
              className={classes.bookmarkImg}
            />
          </div>
        </div>
      </div>
      <div className={classes.Image}>
        <Image src={feedImg} alt={"post_title"} />
      </div>
    </div>
  );
};

export default FeedItem;

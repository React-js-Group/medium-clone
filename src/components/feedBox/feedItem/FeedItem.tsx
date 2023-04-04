import classes from './FeedItem.module.scss'
import Image from 'next/image'
import bookMark from '../../../../public/images/bookMark.svg'
import Link from 'next/link'
import Mark from 'components/Mark'

const myLoader = (src: any) => {
    return src
}

interface FeedItemProps {
    item: any
    key?: number
}

const FeedItem: React.FC<FeedItemProps> = ({ item }): JSX.Element => {
    const tags = item.tags.split(',')

    const myLoader = ({ src }) => {
        return `https://medium.pythonanywhere.com${src}`
    }

    return (
        <>
            <div className={classes.feedItem}>
                <div className={classes.ProfileInfoBox}>
                    <div className={classes.ProfileInfo}>
                        <Link href={`/@${item.user.name}`}>
                            <div className={classes.profileBox}>
                                <Image
                                    src={`${item.user.profile}`}
                                    loader={myLoader}
                                    width={30}
                                    height={30}
                                    alt="profile"
                                    className={classes.profileImg}
                                />
                                <div className={classes.profileItem}>
                                    {item.user.name}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={classes.feedDesBox}>
                    <div className={classes.titleBox}>
                        <Link href={`/Posts/${item.id}`}>
                            <h2>{item.title}</h2>
                        </Link>
                        <div className={classes.bookMarkMark}>
                            <Mark item={item} />
                        </div>
                    </div>

                    <div className={classes.feedDes}>
                        <div className={classes.feedDescription}>
                            <p>{item.description}</p>
                            <div className={classes.feedTags}>
                                {tags.map((item) => (
                                    <div className={classes.feedTag}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={classes.Image}>
                            <Image
                                src={`${item.files.file} `}
                                alt={'post_title'}
                                loader={myLoader}
                                width={300}
                                height={300}
                                className={classes.feedItemImg}
                            />
                        </div>
                    </div>

                    {/* <div className={classes.footer}>
                        {tags.map(
                            (item, i) =>
                                i < 2 && (
                                    <div className={classes.label} key={i + 1}>
                                        {item}
                                    </div>
                                )
                        )}
                    </div> */}

                    <div className={classes.footer}>
                        <div className={classes.footerRight}>
                            <div className={classes.date}>اسفند 1401</div>
                            <div className={classes.readTime}>7 دقیقه</div>
                        </div>
                        <div className={classes.footerLeft}>
                            {/* <img src={Image} alt={'bookMark'} className={classes.bookmarkImg} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedItem

import FeedHeader from '../feedHeader/FeedHeader'
import FeedItem from '../feedItem/FeedItem'
import classes from './FeedList.module.scss'

interface Props {
    posts?: any
    hasNextPage?: any
    fetchNextPage?: any
    isLoading?: any
    FeedHeaderProps?: boolean
}
const FeedList: React.FC<Props> = ({
    posts,
    hasNextPage,
    fetchNextPage,
    FeedHeaderProps,
}): JSX.Element => {
    const bookMarkPost = posts?.posts

    return (
        <div className={classes.Container}>
            {FeedHeaderProps && <FeedHeader title={posts?.title} />}

            {posts?.results?.map((item) => (
                <FeedItem item={item} key={item.id} />
            ))}
            {Array.isArray(bookMarkPost) &&
                bookMarkPost?.map((item) => (
                    <FeedItem item={item} key={item.id} />
                ))}

            {posts?.pages?.map((page) =>
                page.results.map((item) => (
                    <FeedItem item={item} key={item.id} />
                ))
            )}
            {hasNextPage && <button onClick={fetchNextPage}>Load More</button>}
        </div>
    )
}

export default FeedList

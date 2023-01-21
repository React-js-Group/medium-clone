import FeedItem from '../feedItem/FeedItem'
import classes from './FeedList.module.scss'
interface Props {
  posts?: any
  hasNextPage?: any
  fetchNextPage?: any
}
const FeedList: React.FC<Props> = ({
  posts,
  hasNextPage,
  fetchNextPage,
}): JSX.Element => {
  console.log(posts)

  return (
    <div className={classes.Container}>
      {posts?.results?.map((item) => (
        <FeedItem item={item} key={item.id} />
      ))}

      {posts.pages?.map((page) =>
        page.results.map((item) => <FeedItem item={item} key={item.id} />)
      )}
      {hasNextPage && <button onClick={fetchNextPage}>Load More</button>}
    </div>
  )
}

export default FeedList

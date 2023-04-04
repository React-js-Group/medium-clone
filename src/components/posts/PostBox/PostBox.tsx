import { useBookMarks, UseuserPost } from 'Hoocks'
import { useAmp } from 'next/amp'
import { useSelector } from 'react-redux'
import { accessToken } from 'store/fetchers/authSlice'
import PostItem from '../PostItem/PostItem'
import classes from './PostBox.module.scss'

const PostBox: React.FC = (): JSX.Element => {
    const { data, isLoading, isFetching, fetchNextPage, hasNextPage, error } =
        UseuserPost(useSelector(accessToken))

    if (isLoading) {
        return <div className={classes.container}>loading...</div>
    }
    if (error) {
        return <div className={classes.container}>console.error();</div>
    }

    return (
        <div className={classes.container}>
            {data.pages?.map((page, i) =>
                page.results.map((item) => <PostItem item={item} key={i + 1} />)
            )}
            {hasNextPage && (
                <button onClick={() => fetchNextPage()}>Load More</button>
            )}
        </div>
    )
}

export default PostBox

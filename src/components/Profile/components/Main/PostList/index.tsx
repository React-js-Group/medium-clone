import { getUserPosts } from 'api'
import axios from 'axios'
import Card from 'components/Card'
import CardLoading from 'components/Loading/CardLoading'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'

const PostList: React.FC = (): JSX.Element => {
    const [postData, setPostData] = useState<[]>([])
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [page, setPage] = useState(1)

    const userPosts = useSelector(
        (state: any) => state.profile?.profile?.userPosts
    )
    const access = useSelector((state: any) => state.auth.access)

    const PAGE_LIMIT = 9

    const fetchData = async () => {
        console.log(userPosts?.next)

        const { data } = await axios.get(userPosts?.next, {
            headers: {
                Authorization: `Bearer ${access}`,
            },
        })
        setPostData(data?.results)
        if (!data?.next) {
            setHasMore(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [userPosts, page])

    return (
        <div className={styles.postList}>
            {!userPosts && (
                <>
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                </>
            )}
            <>
                {userPosts?.posts.map((post: any) => (
                    <Card
                        user={post.user}
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        tags={post.tags}
                        created={post.created}
                        file={post.files[0]?.file}
                    />
                ))}
            </>
            <InfiniteScroll
                dataLength={postData?.length}
                next={() => setPage((prevState) => prevState + 1)}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className={styles.postList}>
                    {postData?.map((post: any) => (
                        <Card
                            user={post.user}
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            tags={post.tags}
                            created={post.created}
                            file={post.files[0]?.file}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default PostList

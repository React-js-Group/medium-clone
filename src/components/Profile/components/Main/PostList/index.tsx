import { getUserPosts } from 'api'
import axios from 'axios'
import Card from 'components/Card'
import CardLoading from 'components/Loading/CardLoading'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'

interface PostListProps {
    profile: any
}

const PostList: React.FC<PostListProps> = ({ profile }): JSX.Element => {
    const [postData, setPostData] = useState<{}[]>([])
    const [next, setNext] = useState<string>(profile.userPosts.next)
    const [hasMore, setHasMore] = useState<boolean>(true)

    const { userPosts } = profile

    useEffect(() => {
        setPostData(userPosts.posts)
        setNext(userPosts.next)
    }, [])

    const access = useSelector((state: any) => state.auth.access)

    const fetchData = async () => {
        if (userPosts.next) {
            try {
                const { data } = await axios.get(next, {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                })
                const posts = data.results.map((post: any) => post)
                setPostData([...postData, ...posts])

                if (data.next) {
                    setNext(data.next)
                } else {
                    setHasMore(false)
                }
            } catch (err) {
                console.log(err)
            }
        } else {
            setHasMore(false)
        }
    }

    return (
        <div className={styles.postList}>
            {!userPosts && (
                <>
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                </>
            )}
            {postData.length > 0 ? (
                <InfiniteScroll
                    dataLength={postData?.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>پستی باقی نمانده </b>
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
                                file={post.files.file}
                            />
                        ))}
                    </div>
                </InfiniteScroll>
            ) : (
                <h3
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        position: 'absolute',
                    }}
                >
                    هیچ پستی وجود ندارد
                </h3>
            )}
        </div>
    )
}

export default PostList

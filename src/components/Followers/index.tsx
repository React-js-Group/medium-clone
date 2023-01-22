import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import _ from 'lodash'

interface FollowersProps {
    followers: any
}

import styles from './styles.module.scss'

const Followers: React.FC<FollowersProps> = ({ followers }) => {
    const [next, setNext] = useState<string>(followers.next)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [followersList, setFollowersList] = useState<{}[]>([])

    const fetchData = async () => {
        if (next && followers?.total_objects !== 0) {
            try {
                const { data } = await axios.get(next)
                const follower = data.results.map((follower: any) => follower)

                setFollowersList([...follower, ...followersList])
                setNext(data.next)
            } catch (err) {
                console.log(err)
            }
        } else {
            setHasMore(false)
        }
    }

    useEffect(() => {
        if (followers?.total_objects === 0) {
            setHasMore(false)
        } else {
            setFollowersList(followers.results)
        }
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h4 className={styles.title}>{followers?.total_objects} نفر</h4>
                <InfiniteScroll
                    dataLength={followersList?.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>پایان لیست دنبال کنندگان</b>
                        </p>
                    }
                >
                    <table className={styles.Table}>
                        <tbody>
                            {followersList?.map((follower: any, index) => (
                                <tr key={index}>
                                    <td>
                                        {follower.profile ? (
                                            <img
                                                alt="profile"
                                                src={follower.profile}
                                            />
                                        ) : (
                                            <span className={styles.avatar}>
                                                {follower?.username
                                                    ?.slice(0, 1)
                                                    ?.toUpperCase()}
                                            </span>
                                        )}
                                        <span>{follower.username}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default Followers

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import _ from 'lodash'

interface FollowingsProps {
    followings: any
}

import styles from './styles.module.scss'
import Avatar from 'components/Avatar'

const Followings: React.FC<FollowingsProps> = ({ followings }) => {
    const [next, setNext] = useState<string>(followings.next)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [followingsList, setFollowingsList] = useState<{}[]>([])

    const fetchData = async () => {
        if (next && followings?.total_objects !== 0) {
            try {
                const { data } = await axios.get(next)
                const following = data.results.map(
                    (following: any) => following
                )

                setFollowingsList([...following, ...followingsList])
                setNext(data.next)
            } catch (err) {
                console.log(err)
            }
        } else {
            setHasMore(false)
        }
    }

    useEffect(() => {
        if (followings?.total_objects === 0) {
            setHasMore(false)
        } else {
            setFollowingsList(followings.results)
        }
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h4 className={styles.title}>
                    {followings?.total_objects} نفر
                </h4>
                <InfiniteScroll
                    dataLength={followingsList?.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>پایان لیست دنبال شوندگان</b>
                        </p>
                    }
                >
                    <table className={styles.Table}>
                        <tbody>
                            {followingsList?.map((following: any, index) => (
                                <tr key={index}>
                                    <td>
                                        {following.profile ? (
                                            <img
                                                alt="profile"
                                                src={following.profile}
                                            />
                                        ) : (
                                            <Avatar
                                                char={following?.username
                                                    ?.slice(0, 1)
                                                    ?.toUpperCase()}
                                                size="sm"
                                            />
                                        )}
                                        <span>{following.username}</span>
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

export default Followings

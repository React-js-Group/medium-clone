import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'

import Head from './Head'

import styles from './styles.module.scss'
import PostList from './PostList'

interface MainProps {
    profile: any
}

const Main: FC<MainProps> = ({ profile }): JSX.Element => {
    const [isFollow, setIsFollow] = useState<any>(false)
    const [followers, setFollowers] = useState<number>(0)

    const { user } = profile

    useEffect(() => {
        setIsFollow(user?.isFollowing)
        setFollowers(user?.followers)
    }, [])

    const handleSetFollow = () => {
        setIsFollow(!isFollow)
    }

    const handleSetFollowers = async () => {
        if (isFollow) {
            setFollowers((current) => current - 1)
        } else {
            setFollowers((current) => current + 1)
        }
    }

    return (
        <main className={styles.Main}>
            <Head
                isFollow={isFollow}
                setFollow={handleSetFollow}
                setFollowers={handleSetFollowers}
                followers={followers}
                profile={profile}
            />
            <nav className={styles.Navbar}>
                <ul>
                    <li>خانه</li>
                    <li>
                        <Link href="/profile/about">درباره</Link>
                    </li>
                </ul>
            </nav>
            <PostList profile={profile} />
        </main>
    )
}

export default Main

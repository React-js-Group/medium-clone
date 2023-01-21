import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { getRequest } from 'api'
// import { useGetUserPosts } from 'hooks'
import Spinner from '../../../Spinner'
import Card from 'components/Card'
import CardLoading from 'components/Loading/CardLoading'
import Button from 'components/Button'

import Head from './Head'
import PostList from './PostList'

import { accessToken } from 'store/fetchers/authSlice'
import { initProfile } from 'store/fetchers/profileSlice'
import styles from './styles.module.scss'
interface MainProps {}

const Main: FC<MainProps> = (): JSX.Element => {
    const [isFollow, setIsFollow] = useState<any>(false)
    const [followers, setFollowers] = useState<number>(0)

    const userProfile = useSelector((state: any) => state.user.profile)
    const user = useSelector((state: any) => state.profile?.profile?.user)
    const userPosts = useSelector(
        (state: any) => state.profile?.profile?.userPosts
    )
    const dispatch = useDispatch()
    const access = useSelector((state: any) => state.auth.access)

    useEffect(() => {
        setIsFollow(user?.isFollowing)
        setFollowers(user?.followers)
    }, [])

    const handleSetFollow = () => {
        setIsFollow(!isFollow)
    }

    const handleSetFollowers = async () => {
        const { access } = JSON.parse(
            localStorage.getItem('medium-clone-tokens')
        )
        const data = {}

        if (isFollow) {
            setFollowers((current) => current - 1)
        } else {
            setFollowers((current) => current + 1)
        }
        try {
            // const res = await followReq(`follow/${user?.id}/`, data, access)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <main className={styles.Main}>
            <Head
                isFollow={isFollow}
                setFollow={handleSetFollow}
                setFollowers={handleSetFollowers}
                followers={followers}
            />
            <nav className={styles.Navbar}>
                <ul>
                    <li>خانه</li>
                    <li>
                        <Link href="/profile/about">درباره</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}

export default Main

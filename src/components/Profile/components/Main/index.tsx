import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import Spinner from '../../../Spinner'
import { getRequest } from 'api'
import Card from 'components/Card'
// import { useGetUserPosts } from 'hooks'
import { accessToken } from 'store/fetchers/authSlice'
import CardLoading from 'components/Loading/CardLoading'
import Button from 'components/Button'

import styles from './styles.module.scss'
import { initProfile } from 'store/fetchers/profileSlice'
import PostList from './PostList'
interface MainProps {
  isFollow: boolean | null
  setFollow: () => any
  followers: number
  setFollowers: () => any
}

const Main: FC<MainProps> = ({
  isFollow,
  setFollow,
  followers,
  setFollowers,
}): JSX.Element => {
  const [options, setOptions] = useState<boolean>(false)

  const userProfile = useSelector((state: any) => state.user.profile)
  const user = useSelector((state: any) => state.profile?.profile?.user)
  const userPosts = useSelector(
    (state: any) => state.profile?.profile?.userPosts
  )
  const dispatch = useDispatch()
  const access = useSelector((state: any) => state.auth.access)
  const route = useRouter()

  return (
    <main className={styles.Main}>
      <div className={styles.Head}>
        <div>
          {user?.profile ? (
            <img alt="profile" className={styles.profile} src={user?.profile} />
          ) : (
            <div className={styles.avatar}>
              {user?.username.slice(0, 1).toUpperCase()}
            </div>
          )}
          <h1>{user?.name ? user?.name : user?.username}</h1>
        </div>
        <BiDotsHorizontalRounded onClick={() => setOptions(!options)} />
        {options && (
          <div className={styles.Options}>
            <ul>
              <li>لینک پروفایل</li>
              <li>طراحی پروفایل</li>
              {route.query.profile.slice(1) === userProfile?.username && (
                <li>
                  <Link href={`${route.query.profile}/setting`}>تنظیمات</Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {isFollow !== null && (
        <div className={styles.follow}>
          <button
            type="button"
            onClick={() => {
              setFollow()
              setFollowers()
            }}
            style={
              isFollow
                ? {
                    backgroundColor: '#fff',
                    color: '#0081c9 ',
                    border: '1px solid #0081c9',
                  }
                : { backgroundColor: '#0081c9', color: '#fff' }
            }
          >
            {isFollow ? 'دنبال نکن' : 'دنبال کن'}
            {isFollow ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      )}
      <Link href={`@${user?.username}/followers`} className={styles.followers}>
        <span>دنبال کننده :</span>
        <span>{followers}</span>
      </Link>
      <div className={styles.about}> {user?.about}</div>
      <ul className={styles.skills}>
        {user?.skills?.split(',').map((skill: string, i) => (
          <li key={skill + i}>{skill}#</li>
        ))}
      </ul>
      <nav className={styles.Navbar}>
        <ul>
          <li>خانه</li>
          <li>
            <Link href="/profile/about">درباره</Link>
          </li>
        </ul>
      </nav>
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
      </div>
      <PostList />
    </main>
  )
}

export default Main

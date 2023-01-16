import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useQuery } from 'react-query'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { useSelector } from 'react-redux'

import Spinner from '../../../Spinner'
import { getRequest } from 'api'
import axios from 'axios'
import styles from './styles.module.scss'
import Card from 'components/Card'
import { useGetUserPosts } from 'hooks'
import { accessToken } from 'store/fetchers/authSlice'
import CardLoading from 'components/Loading/CardLoading'

interface MainProps {
  profile: any
}

const Main: FC<MainProps> = ({ profile }): JSX.Element => {
  const [options, setOptions] = useState<boolean>(false)

  const userProfile = useSelector((state: any) => state.user.profile)
  const access = useSelector((state: any) => state.auth.access)
  const route = useRouter()

  const { data, isLoading, error } = useGetUserPosts(
    useSelector(accessToken),
    route.query
  )

  return (
    <main className={styles.Main}>
      <div className={styles.Head}>
        <div>
          {profile.profile ? (
            <img
              alt="profile"
              className={styles.profile}
              src={process.env.BASE_URL + profile.profile}
            />
          ) : (
            <div className={styles.avatar}>
              {profile.username.slice(0, 1).toUpperCase()}
            </div>
          )}
          <h1>{profile.name ? profile.name : profile.username}</h1>
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
      <div className={styles.followers}>
        <span>دنبال کننده :</span>
        <span>{profile.followers}</span>
      </div>
      <div className={styles.about}> {profile.about}</div>
      <ul className={styles.skills}>
        {profile.skills?.split(',').map((skill: string, i) => (
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
        {isLoading && (
          <>
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </>
        )}
        {data && (
          <>
            {data.map((post: any) => (
              <Card
                user={post.user}
                key={post.id}
                title={post.title}
                description={post.description}
                tags={post.tags}
                created={post.created}
                file={post.files[0].file}
              />
            ))}
          </>
        )}
      </div>
    </main>
  )
}

export default Main

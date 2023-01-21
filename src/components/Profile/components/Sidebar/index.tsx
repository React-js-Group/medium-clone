import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from 'components/Button'

import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { useJwt } from 'react-jwt'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'

const Sidebar: FC = (): JSX.Element => {
  const userProfile = useSelector((state: any) => state.user.profile)
  const user = useSelector((state: any) => state.profile?.profile?.user)
  const route = useRouter()

  return (
    <aside className={styles.Sidebar}>
      <div>
        {user ? (
          <img alt="profile" className={styles.profile} src={user.profile} />
        ) : (
          <div className={styles.avatar}>
            {user?.username.slice(0, 1).toUpperCase()}
          </div>
        )}
        <p>{user?.username}</p>
        {route.query.profile.slice(1) === userProfile?.username && (
          <Link href={`${route.query.profile}/setting`}>ویرایش پروفایل</Link>
        )}
      </div>

      <div className={styles.about}> {user?.about}</div>
      <ul className={styles.skills}>
        {user?.skills?.split(',').map((skill: string, i) => (
          <li key={skill + i}>{skill}#</li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar

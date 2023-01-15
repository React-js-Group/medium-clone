import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from 'components/Button'

import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { useJwt } from 'react-jwt'
import { useRouter } from 'next/router'

interface SidebarProps {
  profile: any
}

const Sidebar: FC<SidebarProps> = ({ profile }): JSX.Element => {
  const userProfile = useSelector((state: any) => state.user.profile)
  const route = useRouter()

  return (
    <aside className={styles.Sidebar}>
      <div>
        <button type="button">Get unlimited access</button>
      </div>
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
        <p>{profile.username}</p>
        {route.query.profile.slice(1) === userProfile?.username && (
          <Link href={`${route.query.profile}/setting`}>Edit profile</Link>
        )}
      </div>
    </aside>
  )
}

export default Sidebar

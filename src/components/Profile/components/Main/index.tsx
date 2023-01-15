import React, { FC, useState } from 'react'
import Link from 'next/link'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { IoLockClosed } from 'react-icons/io5'

import Button from 'components/Button'

import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

interface MainProps {
  profile: any
}

const Main: FC<MainProps> = ({ profile }): JSX.Element => {
  const [options, setOptions] = useState<boolean>(false)

  const userProfile = useSelector((state: any) => state.user.profile)
  const route = useRouter()

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
          <h1>{profile.username}</h1>
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
      <div className={styles.ReadingList}>
        <div className={styles.ReadingListRight}>
          <h3>ReadingList</h3>
          <div>
            <Button
              type="button"
              content="نمایش لیست"
              style={{
                border: '1px solid #292929',
                background: 'transparent',
                borderRadius: '100px',
                color: '#292929',
                width: 'auto',
              }}
            />
            <IoLockClosed />
          </div>
        </div>
        <div className={styles.ReadingListLeft}>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main

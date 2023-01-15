import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import styles from '../styles.module.scss'

interface InfoProps {
  user: any
  onEdit: (value: boolean) => void
}

const Info: React.FC<InfoProps> = ({ user, onEdit }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div>
        <p>ایمیل</p>
        <p>{user.email}</p>
      </div>
      <div>
        <p>نام کاربری و ساب دامین</p>
        <p>{user.username}@</p>
      </div>
      <div>
        <div className={styles.profile}>
          <span onClick={() => onEdit(true)}>
            اطلاعات پروفایل
            <IoIosArrowBack />
          </span>
          <p>در این قسمت می توانید اطلاعات خود را تغییر دهید</p>
        </div>

        {user.profile ? (
          <img
            alt="profile"
            className={styles.profile}
            src={process.env.BASE_URL + user.profile}
          />
        ) : (
          <span className={styles.avatar}>
            {user?.username?.slice(0, 1).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  )
}

export default Info

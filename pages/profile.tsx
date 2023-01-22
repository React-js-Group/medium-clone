import React from 'react'
import Head from 'next/head'
import Profile from 'components/Profile'

const ProfilePage: React.FC = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>پروفایل</title>
      </Head>
      <Profile />
    </div>
  )
}

export default ProfilePage

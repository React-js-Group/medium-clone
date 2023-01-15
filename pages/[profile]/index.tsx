import { FC } from 'react'
import Head from 'next/head'

import { getRequest } from 'api'

import Profile from 'components/Profile'
import Navbar from 'components/Navbar'
import { useSelector } from 'react-redux'
import Modal from 'components/Modal'
import Auth from '../auth'
import { toggle } from 'store/fetchers/authSlice'

interface ProfilePageProps {
  profile: any
}

const ProfilePage: FC<ProfilePageProps> = ({ profile }) => {
  const { displayForm } = useSelector((state: any) => state.auth)

  return (
    <>
      <Head>
        <title>پروفایل</title>
      </Head>
      <Navbar />
      <Profile profile={profile} />
    </>
  )
}

export default ProfilePage

// export async function getStaticPaths() {
//   return {
//     props: {},
//   }
// }

export async function getServerSideProps({ params }) {
  const query = params.profile.substr(1)

  try {
    const users = await getRequest(`user_profile/${query}`)
    return {
      props: {
        profile: users.data,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

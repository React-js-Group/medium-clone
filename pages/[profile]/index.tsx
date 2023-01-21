import { NextPage } from 'next'
import Head from 'next/head'

import { getRequest } from 'api'

import Profile from 'components/Profile'
import Navbar from 'components/Navbar'
import Modal from 'components/Modal'

interface ProfilePageProps {
  profile: any
}

const ProfilePage: NextPage<ProfilePageProps> = ({ profile }) => {
  return (
    <>
      <Head>
        <title>
          {profile?.user?.name
            ? `${profile?.user?.name} | پروفایل`
            : `${profile?.user?.username} | پروفایل`}
        </title>
      </Head>
      <Navbar />
      <Profile profile={profile} />
    </>
  )
}

export default ProfilePage

export async function getServerSideProps({ req, params }) {
  const query = params.profile.substr(1)
  const token = req.cookies['medium-clone-tokens']

  try {
    const users = await getRequest(`user-profile/${query}`, token)
    const userPosts = await getRequest(`user-posts/${query}`, token)

    users.data['isFollowing'] = users.data['is_following']
    delete users.data['is_following']

    userPosts.data['totalObjects'] = userPosts.data['total_objects']
    userPosts.data['totalPages'] = userPosts.data['total_pages']
    userPosts.data['posts'] = userPosts.data['results']
    delete userPosts.data['total_objects']
    delete userPosts.data['total_pages']
    delete userPosts.data['results']

    const profile = {
      user: { ...users.data },
      userPosts: { ...userPosts.data },
    }

    return {
      props: {
        profile,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

import Footer from './Footer'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'

import { refresh, access, toggle } from 'store/fetchers/authSlice'

import Loading from 'components/Loading'
import FeedList from 'components/feedBox/FeedList/FeedList'
import Page from 'components/layout/page/page'
import Auth from 'components/Auth'
import Modal from 'components/Modal'
import Mark from 'components/Mark'
import { useEffect, useState, useLayoutEffect } from 'react'
import Navbar from 'components/Navbar'
import { CheckToken } from 'utils/CheckToken'
import axios from 'axios'
import { useRouter } from 'next/router'

interface HomeProps {
  children?: React.ReactNode
  posts: any
  hasNextPage: any
  fetchNextPage: any
}

const Home: React.FC<HomeProps> = ({
  children,
  posts,
  hasNextPage,
  fetchNextPage,
}) => {
  const { displayForm, access, loading } = useSelector(
    (state: any) => state.auth
  )
  const [token, setToken] = useState<string>('')

  const dispatch = useDispatch()

  if (loading) return <Loading />

  return (
    <div style={displayForm ? { height: '100vh', overflow: 'hidden' } : null}>
      {displayForm && (
        <Modal displayForm={displayForm} setDisplayForm={toggle}>
          <Auth />
        </Modal>
      )}

      <Page sideBar={null}>
        <FeedList
          posts={posts}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Page>
      {children}
      <Footer />
    </div>
  )
}

export default Home

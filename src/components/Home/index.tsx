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

interface HomeProps {
  children?: React.ReactNode
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const [token, setToken] = useState<string>('')

  const dispatch = useDispatch()
  const { displayForm, loading } = useSelector((state: any) => state.auth)

  if (loading) return <Loading />

  return (
    <div style={displayForm ? { height: '100vh', overflow: 'hidden' } : null}>
      {displayForm && (
        <Modal displayForm={displayForm} setDisplayForm={toggle}>
          <Auth />
        </Modal>
      )}
      {/* <Navbar  /> */}
      <Header />
      <Page sideBar={null}>
        <FeedList />
      </Page>
      <Mark />
      {children}
      <Footer />
    </div>
  )
}

export default Home

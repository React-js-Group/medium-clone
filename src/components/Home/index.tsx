import Footer from './Footer'
import Header from './Header'
import { useSelector } from 'react-redux'
import Mark from 'components/Mark'
import Navbar from 'components/Navbar'
import { useJwt } from 'react-jwt'
import Loading from 'components/Loading'
import FeedList from 'components/feedBox/FeedList/FeedList'
import Page from 'components/layout/page/page'
import Auth from 'components/Auth'
import Modal from 'components/Modal'
import { toggle } from 'store/fetchers/authSlice'
import { useEffect, useState } from 'react'

interface HomeProps {
  children?: React.ReactNode
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const { displayForm, access, loading } = useSelector(
    (state: any) => state.auth
  )
  const { decodedToken } = useJwt(access)

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

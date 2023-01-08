import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import Auth from 'components/Auth'
import { useDispatch, useSelector } from 'react-redux'
import Mark from 'components/Mark'
import Navbar from 'components/Navbar'
import { useJwt } from 'react-jwt'
import Loading from 'components/Loading'

interface HomeProps {
  children?: React.ReactNode
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const { displayForm, access, loading } = useSelector(
    (state: any) => state.auth
  )
  const { decodedToken } = useJwt(access)
  const dispatch = useDispatch()

  if (loading) return <h1>LOADING....</h1>

  return (
    <div style={displayForm ? { height: '100vh', overflow: 'hidden' } : null}>
      <Loading />
      {/* {displayForm && (
        <Modal>
          <Auth />
        </Modal>
      )}
      <Navbar scroll={false} token={decodedToken} />
      <Header />
      <div style={{ height: '90vh' }}>Main</div>
      <Mark />
      {children}
      <Footer /> */}
    </div>
  )
}

export default Home

import Footer from './Footer'
import Header from './Header'
import Modal from 'components/Modal'
import Auth from 'components/Auth'
import { useSelector } from 'react-redux'
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

  if (loading) return <Loading />

  return (
    <div style={displayForm ? { height: '100vh', overflow: 'hidden' } : null}>
      {displayForm && (
        <Modal>
          <Auth />
        </Modal>
      )}
      <Navbar scroll={false} token={decodedToken} />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Home

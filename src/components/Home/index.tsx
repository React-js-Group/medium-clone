import Footer from './Footer'
import Header from './Header'
import { useSelector } from 'react-redux'
import Mark from 'components/Mark'
import Navbar from 'components/Navbar'
import { useJwt } from 'react-jwt'
import Loading from 'components/Loading'
import FeedList from 'components/feedBox/FeedList/FeedList'
import Page from 'components/layout/page/page'

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

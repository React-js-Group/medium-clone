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
  const { displayForm, loading } = useSelector((state: any) => state.auth)

  if (loading) return <Loading />

  return (
    <div style={displayForm ? { height: '100vh', overflow: 'hidden' } : null}>
      <Header />
      <Page sideBar={null}>
        <FeedList
          posts={posts}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Page>
      <Mark />
      {children}
      <Footer />
    </div>
  )
}

export default Home

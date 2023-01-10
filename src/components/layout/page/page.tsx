import Navbar from 'components/Navbar'
import { useJwt } from 'react-jwt'
import Body from '../Body/Body'
import SideBar from '../sideBar'
import classes from './Page.module.scss'
interface OptionsProps {
  children: any
  sideBar?: Array<String>
}

const Page: React.FC<OptionsProps> = ({ children, sideBar }): JSX.Element => {
  const { access } = JSON.parse(localStorage.getItem('persist:root'))

  const { decodedToken } = useJwt(access)

  return (
    <>
      <Navbar scroll={false} token={decodedToken} />
      <div className={classes.container}>
        <SideBar sideBar={sideBar} />
        {children}
      </div>
    </>
  )
}

export default Page

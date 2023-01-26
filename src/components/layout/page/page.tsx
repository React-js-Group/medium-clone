import Header from 'components/Home/Header'
import Navbar from 'components/Navbar'
import { useEffect, useState } from 'react'
import { useJwt } from 'react-jwt'
import Body from '../Body/Body'
import SideBar from '../sideBar'
import classes from './Page.module.scss'
interface OptionsProps {
  children: any
  sideBar?: any
}
import { useRouter } from 'next/router'
const Page: React.FC<OptionsProps> = ({ children, sideBar }): JSX.Element => {
  const { pathname } = useRouter()

  const [scroll, setScroll] = useState<boolean>(true)
  useEffect(() => {
    window.onscroll = function () {
      bgHeder()
    }
  })

  function bgHeder() {
    if (
      document.body.scrollTop > 460 ||
      document.documentElement.scrollTop > 460
    ) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }

  return (
    <>
      <Navbar scroll={scroll} />
      {pathname === '/' && <Header />}
      <div className={classes.container}>
        <SideBar sideBar={sideBar} />
        {children}
      </div>
    </>
  )
}

export default Page

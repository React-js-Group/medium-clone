import Header from 'components/Home/Header'
import Navbar from 'components/Navbar'
import { useEffect, useState } from 'react'
import { useJwt, isExpired } from 'react-jwt'
import Body from '../Body/Body'
import SideBar from '../sideBar'
import classes from './Page.module.scss'
interface OptionsProps {
    children: any
    sideBar?: any
}
import { useRouter } from 'next/router'
import { accessToken } from 'store/fetchers/authSlice'
import { useSelector } from 'react-redux'
import { access } from 'fs/promises'
import { CheckToken } from 'utils/CheckToken'
import Footer from 'components/Home/Footer'

const Page: React.FC<OptionsProps> = ({ children, sideBar }): JSX.Element => {
    const { pathname } = useRouter()
    const access = useSelector(accessToken)

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
            {pathname === '/' && isExpired(access) && <Header />}
            <div className={classes.container}>
                <SideBar sideBar={sideBar} />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Page

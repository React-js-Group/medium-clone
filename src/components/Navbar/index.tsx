import { useEffect, useState } from 'react'
import { useJwt } from 'react-jwt'
import { useSelector } from 'react-redux'
import { accessToken } from 'store/fetchers/authSlice'
import { CheckToken } from 'utils/CheckToken'
import MainNavbar from './MainNavbar'
import UserNavbar from './UserNavbar'

interface NavbarProps {
  scroll: boolean
}

const Navbar: React.FC<NavbarProps> = ({ scroll }): JSX.Element => {
  // Perform localStorage action
  const access = useSelector(accessToken)
  if (!access)
    return (
      <div>
        <MainNavbar scroll={scroll} />
      </div>
    )
  if (access)
    return (
      <div>
        <UserNavbar />
      </div>
    )
}

export default Navbar

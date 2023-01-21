import { useEffect, useState } from 'react'
import { useJwt } from 'react-jwt'
import { useSelector } from 'react-redux'

import MainNavbar from './MainNavbar'
import UserNavbar from './UserNavbar'

interface NavbarProps {
  scroll?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ scroll }): JSX.Element => {
  const [token, setToken] = useState<string>('')
  const { access } = useSelector((state: any) => state.auth)
  const user = useSelector((state: any) => state.user)
  const { isExpired } = useJwt(token)

  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem('medium-clone-tokens'))
    setToken(tokens?.access)
  }, [token, isExpired, access, user])

  return (
    <>
      {token?.length > 0 && !isExpired ? (
        <UserNavbar />
      ) : (
        <MainNavbar scroll={scroll} />
      )}
    </>
  )
}

export default Navbar

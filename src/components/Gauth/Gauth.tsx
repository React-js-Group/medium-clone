import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { accessToken, access } from 'store/fetchers/authSlice'

interface optionProps {
  children: any
}

const Gauth: React.FC<optionProps> = ({ children }): JSX.Element => {
  const dispatch = useDispatch()
  // Hoocks

  useEffect(() => {
    dispatch(access(localStorage?.getItem('accessToken')))
  }, [])

  return <>{children}</>
}

export default Gauth

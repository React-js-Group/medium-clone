import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { postRequest } from 'api'

import { access } from 'store/fetchers/authSlice'
import { CheckToken } from 'utils/CheckToken'
import Cookies from 'universal-cookie'

interface RefreshTokenProps {
  children: any
}

const RefreshToken: React.FC<RefreshTokenProps> = ({ children }) => {
  const dispatch = useDispatch()

  const handleRefreshToken = async (): Promise<any> => {
    const { access: accessToken, refresh } = JSON.parse(
      localStorage.getItem('medium-clone-tokens')
    )
    if (refresh) {
      //! IF ACCESS TOKEN WAS  VALID
      const isExpired = CheckToken(accessToken)
      if (!isExpired) {
        const { data } = await postRequest('refresh/', { refresh })
        dispatch(access(data.access))
        localStorage.setItem(
          'medium-clone-tokens',
          JSON.stringify({
            access: data.access,
            refresh,
          })
        )
        const cookies = new Cookies()
        cookies.set('medium-clone-tokens', data.access, { path: '/' })
      }
    }
  }

  useEffect(() => {
    handleRefreshToken()
  }, [])

  return <>{children}</>
}

export default RefreshToken

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCookie } from 'nookies'

import { postRequest } from 'api'
import { access } from 'store/fetchers/authSlice'
import { CheckToken } from 'utils/CheckToken'

interface RefreshTokenProps {
  children: any
}

const RefreshToken: React.FC<RefreshTokenProps> = ({ children }) => {
  const dispatch = useDispatch()

  const handleRefreshToken = async (): Promise<any> => {
    const values = JSON.parse(localStorage.getItem('medium-clone-tokens'))

    if (values) {
      const { access: accessToken, refresh } = values
      if (refresh) {
        //! IF ACCESS TOKEN WAS  VALID
        const isExpired = CheckToken(accessToken)
        if (!isExpired) {
          const { data } = await postRequest('refresh/', { refresh })
          dispatch(access(data.access))
          localStorage.setItem(
            'medium-clone-tokens',
            JSON.stringify({
              ...values,
              access: data.access,
              refresh,
            })
          )
          setCookie({}, 'medium-clone-tokens', `${data.access}`, {
            maxAge: 30 * 24 * 60 * 60, // 30 days
            path: '/',
          })
        }
      }
    }
  }

  useEffect(() => {
    handleRefreshToken()
  }, [])

  return <>{children}</>
}

export default RefreshToken

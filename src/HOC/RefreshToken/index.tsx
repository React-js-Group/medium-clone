import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCookie } from 'nookies'

import { postRequest } from 'api'
import { access } from 'store/fetchers/authSlice'
import { CheckToken } from 'utils/CheckToken'
import axios from 'axios'
import { useRouter } from 'next/router'

interface RefreshTokenProps {
    children: any
}

const RefreshToken: React.FC<RefreshTokenProps> = ({ children }) => {
    const dispatch = useDispatch()
    const URL = process.env.BASE_URL

    const route = useRouter()

    const handleRefreshToken = async (): Promise<any> => {
        const values = JSON.parse(localStorage.getItem('medium-clone-tokens'))

        if (values) {
            const { access: accessToken, refresh } = values
            if (refresh) {
                //! IF ACCESS TOKEN WAS  VALID
                const isExpired = CheckToken(accessToken)
                if (!isExpired) {
                    try {
                        const { data } = await postRequest(`refresh/`, {
                            refresh,
                        })
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
                    } catch (err) {
                        console.log(err)
                        route.replace('/')
                    }
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

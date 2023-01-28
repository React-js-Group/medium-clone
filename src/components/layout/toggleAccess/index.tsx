import React from 'react'
import { useEffect } from 'react'
import { isExpired } from 'react-jwt'
import { useDispatch, useSelector } from 'react-redux'
import { accessToken, toggleAccess } from 'store/fetchers/authSlice'

const ToggleAccess: React.FC = (): JSX.Element => {
    const access = useSelector(accessToken)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!access || isExpired(access)) {
            dispatch(toggleAccess(true))
        }
    }, [])

    return <></>
}

export default ToggleAccess

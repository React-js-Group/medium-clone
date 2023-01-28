import { followReq, putRequest } from 'api'
import axios from 'axios'
import Auth from 'components/Auth'
import Modal from 'components/Modal'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { access, refresh, toggle } from 'store/fetchers/authSlice'
import { initProfile } from 'store/fetchers/profileSlice'

import Main from './components/Main'
import Sidebar from './components/Sidebar'

import styles from './components/Sidebar/styles.module.scss'

interface ProfileProps {
    profile?: any
}

const Profile: FC<ProfileProps> = ({ profile }): JSX.Element => {
    // const [isFollow, setIsFollow] = useState<boolean | null>(null)
    const [accessToken, setAccessToken] = useState<string>('')

    // const user = useSelector((state: any) => state.profile?.profile?.user)
    const displayForm = useSelector((state: any) => state.auth.displayForm)
    const dispatch = useDispatch()

    useEffect(() => {
        const getTokens = JSON.parse(
            localStorage.getItem('medium-clone-tokens')
        )
        const { user, userPosts } = profile
        setAccessToken(getTokens.access)
        dispatch(access(getTokens.access))
        dispatch(refresh(getTokens.refresh))
        dispatch(initProfile(profile))
    }, [])

    return (
        <div
            style={
                displayForm
                    ? { height: '100vh', overflow: 'hidden', display: 'flex' }
                    : { display: 'flex' }
            }
        >
            {displayForm && (
                <Modal displayForm={displayForm} setDisplayForm={toggle}>
                    <Auth />
                </Modal>
            )}
            <Main />
            <div className={styles.container}>
                <Sidebar />
            </div>
        </div>
    )
}

export default Profile
//

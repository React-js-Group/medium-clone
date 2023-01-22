import { FC } from 'react'
import { useSelector } from 'react-redux'
import { toggle } from 'store/fetchers/authSlice'

import Auth from 'components/Auth'
import Modal from 'components/Modal'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

import styles from './components/Sidebar/styles.module.scss'

interface ProfileProps {
    profile: any
}

const Profile: FC<ProfileProps> = ({ profile }): JSX.Element => {
    const displayForm = useSelector((state: any) => state.auth.displayForm)

    return (
        <div
            style={
                displayForm
                    ? {
                          height: '100vh',
                          overflow: 'hidden',
                          display: 'flex',
                      }
                    : { display: 'flex' }
            }
        >
            {displayForm && (
                <Modal displayForm={displayForm} setDisplayForm={toggle}>
                    <Auth />
                </Modal>
            )}
            <Main profile={profile} />
            <div className={styles.container}>
                <Sidebar profile={profile} />
            </div>
        </div>
    )
}

export default Profile

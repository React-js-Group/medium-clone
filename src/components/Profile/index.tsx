import axios from 'axios'
import Auth from 'components/Auth'
import Modal from 'components/Modal'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { access, refresh, toggle } from 'store/fetchers/authSlice'

import Main from './components/Main'
import Sidebar from './components/Sidebar'

interface ProfileProps {
  profile: object
}

const Profile: FC<ProfileProps> = ({ profile }) => {
  const [accessToken, setAccessToken] = useState<string>('')
  const displayForm = useSelector((state: any) => state.auth.displayForm)
  const dispatch = useDispatch()

  useEffect(() => {
    const getTokens = JSON.parse(localStorage.getItem('medium-clone-tokens'))
    setAccessToken(getTokens.access)
    dispatch(access(getTokens.access))
    dispatch(refresh(getTokens.refresh))
  }, [])

  // const { data, isLoading, isError } = useQuery(['user-posts'], handleRequest)

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
      <Main profile={profile} />
      <Sidebar profile={profile} />
    </div>
  )
}

export default Profile

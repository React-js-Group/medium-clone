import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { access, refresh } from 'store/fetchers/authSlice'

import Main from './components/Main'
import Sidebar from './components/Sidebar'

interface ProfileProps {
  profile: object
}

const Profile: FC<ProfileProps> = ({ profile }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getTokens = JSON.parse(localStorage.getItem('medium-clone-tokens'))
    dispatch(access(getTokens.access))
    dispatch(refresh(getTokens.refresh))
  }, [])

  return (
    <div style={{ display: 'flex ' }}>
      <Main profile={profile} />
      <Sidebar profile={profile} />
    </div>
  )
}

export default Profile

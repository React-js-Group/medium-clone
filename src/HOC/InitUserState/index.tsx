import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { access, refresh } from 'store/fetchers/authSlice'

import { setProfile } from 'store/fetchers/userSlice'

interface InitUserState {
  children: any
}

const InitUserState: FC<InitUserState> = ({ children }): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('medium-clone-tokens'))
    if (data) {
      dispatch(setProfile(data.user))
      dispatch(access(data.access))
      dispatch(refresh(data.refresh))
    }
  }, [])

  return <>{children}</>
}

export default InitUserState

import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { postRequest } from 'api'
import { setProfile } from 'store/fetchers/userSlice'

interface InitUserState {
  children: any
}

const InitUserState: FC<InitUserState> = ({ children }): JSX.Element => {
  const dispatch = useDispatch()

  const handleInitialUserState = async () => {
    const { access } = JSON.parse(localStorage.getItem('medium-clone-tokens'))
    const value = { token: access }

    if (access) {
      try {
        const { data } = await postRequest('get-user-by-token/', value)
        dispatch(setProfile(data))
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    handleInitialUserState()
  }, [])

  return <>{children}</>
}

export default InitUserState

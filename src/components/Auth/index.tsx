import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toggle } from 'store/fetchers/authSlice'

import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import Verify from './Verify'

import styles from './styles.module.scss'

const Auth: React.FC = (): JSX.Element => {
  const [currentFrom, setCurrentForm] = useState<string>('login')
  const [displayPassword, setDispalyPassword] = useState<boolean>(false)

  const [data, setData] = useState<{}>({})
  const dispatch = useDispatch()

  const handleSetCurrentForm = (form: string) => {
    setCurrentForm(form)
  }

  const handleSetData = (data: {}) => {
    setData(data)
  }

  const handleDisplayPassword = () => {
    setDispalyPassword(!displayPassword)
  }

  const showCurrentForm = () => {
    switch (currentFrom) {
      case 'login':
        return (
          <Login
            currentFrom={currentFrom}
            setForm={handleSetCurrentForm}
            displayPassword={displayPassword}
            onDisplayPassword={handleDisplayPassword}
          />
        )
      case 'register':
        return (
          <Register
            currentFrom={currentFrom}
            setForm={handleSetCurrentForm}
            onSetData={handleSetData}
            displayPassword={displayPassword}
            onDisplayPassword={handleDisplayPassword}
          />
        )
      case 'forgetPassword':
        return <ForgetPassword setForm={handleSetCurrentForm} />
      case 'verify':
        return <Verify setForm={handleSetCurrentForm} userData={data} />
      default:
        return (
          <Login
            currentFrom={currentFrom}
            setForm={handleSetCurrentForm}
            displayPassword={displayPassword}
            onDisplayPassword={handleDisplayPassword}
          />
        )
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${currentFrom === 'verify' && styles.verifyForm}`}>
        <FaTimes className={styles.times} onClick={() => dispatch(toggle())} />
        {showCurrentForm()}
      </div>
    </div>
  )
}

export default Auth

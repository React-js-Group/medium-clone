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

  return (
    <div className={styles.wrapper}>
      <div className={`${currentFrom === 'verify' && styles.verifyForm}`}>
        <FaTimes className={styles.times} onClick={() => dispatch(toggle())} />
        {currentFrom === 'register' ? (
          <Register
            currentFrom={currentFrom}
            setForm={handleSetCurrentForm}
            onSetData={handleSetData}
            displayPassword={displayPassword}
            onDisplayPassword={handleDisplayPassword}
          />
        ) : currentFrom === 'login' ? (
          <Login
            currentFrom={currentFrom}
            setForm={handleSetCurrentForm}
            displayPassword={displayPassword}
            onDisplayPassword={handleDisplayPassword}
          />
        ) : currentFrom === 'forgetPassword' ? (
          <ForgetPassword setForm={handleSetCurrentForm} />
        ) : (
          <Verify setForm={handleSetCurrentForm} userData={data} />
        )}
      </div>
    </div>
  )
}

export default Auth

import { postRequest } from 'api'
import Button from 'components/Button'
import React, { useRef, useState } from 'react'
import AuthCode, { AuthCodeRef } from 'react-auth-code-input'
import { BiArrowBack } from 'react-icons/bi'
import { toast } from 'react-toastify'

import styles from '../styles.module.scss'

interface CodeProps {
  onCurrentForm: (form: string) => void
  onCode: (otp: string) => void
}

const Code: React.FC<CodeProps> = ({ onCurrentForm, onCode }): JSX.Element => {
  const [code, setCode] = useState<string>('')
  const AuthInputRef = useRef<AuthCodeRef>(null)

  return (
    <div style={{ height: '80%', display: 'flex' }}>
      <div className={styles.verifyForm}>
        <BiArrowBack
          className={styles.arrowBack}
          onClick={() => onCurrentForm('email')}
        />
        <h3 className={styles.title}>تایید ایمیل</h3>
        <p>لطفا کد ارسال شده به ایمیل را وارد نمایید</p>
        <AuthCode
          allowedCharacters="numeric"
          length={6}
          ref={AuthInputRef}
          onChange={(otp: string) => onCode(otp)}
          inputClassName={styles.authCode}
        />
      </div>
    </div>
  )
}

export default Code

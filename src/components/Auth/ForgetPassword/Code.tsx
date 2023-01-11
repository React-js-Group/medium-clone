import { postRequest } from 'api'
import Button from 'components/Button'
import React, { useRef, useState } from 'react'
import AuthCode, { AuthCodeRef } from 'react-auth-code-input'
import { BiArrowBack } from 'react-icons/bi'
import { toast } from 'react-toastify'

import styles from '../styles.module.scss'

interface CodeProps {
  onCurrentForm: (form: string) => void
  email: string
}

const Code: React.FC<CodeProps> = ({ onCurrentForm, email }) => {
  const [code, setCode] = useState<string>('')
  const AuthInputRef = useRef<AuthCodeRef>(null)

  const handleSubmitCode = async () => {
    const data = { email, code }
    try {
      const request = await postRequest('check-code/', data)
      if (request.status === 200) {
        toast('کد وارد شده صحیح است')
        onCurrentForm('password')
      }
    } catch (err) {
      if (err.response.status === 404) {
        toast('کد وارد شده صحیح نمی باشد')
      }
      if (err.response.status === 500) {
        toast('مشکلی از سمت سرور پیش آمده است ، لطفا بعدا امتحان کنید')
      }
    }
  }

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
          onChange={(otp: string) => setCode(otp)}
          inputClassName={styles.authCode}
        />
        <Button
          content="تایید"
          type="button"
          style={{
            backgroundColor: '#118811',
            padding: '10px',
            margin: '1rem 0',
            color: '#fff',
            width: '8rem',
            borderRadius: '8px',
          }}
          onClick={handleSubmitCode}
        />
      </div>
    </div>
  )
}

export default Code

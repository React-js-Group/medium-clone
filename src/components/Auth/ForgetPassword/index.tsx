import React, { useState } from 'react'
import Code from './Code'

import Email from './Email'
import Password from './Password'

interface ForgetPasswordProps {
  setForm: (form: string) => void
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({
  setForm,
}): JSX.Element => {
  const [code, setCode] = useState<string>('')
  const [currentForm, setCurrentForm] = useState<string>('email')
  const [email, setEmail] = useState<string>('')

  const handleSetEmail = (data: string) => {
    setEmail(data)
  }

  const handleCurrentForm = (form: string) => {
    setCurrentForm(form)
  }

  const handleBackToLoginForm = (form: string) => {
    setForm(form)
  }

  const handleSetCode = (otp: string) => {
    setCode(otp)
  }

  return (
    <>
      {currentForm === 'email' ? (
        <Email
          onForm={handleBackToLoginForm}
          onCurrentForm={handleCurrentForm}
          onEmail={handleSetEmail}
        />
      ) : (
        <>
          <Code onCurrentForm={handleCurrentForm} onCode={handleSetCode} />
          <Password onForm={handleBackToLoginForm} email={email} code={code} />
        </>
      )}
    </>
  )
}

export default ForgetPassword

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

  return (
    <>
      {currentForm === 'email' ? (
        <Email
          onForm={handleBackToLoginForm}
          onCurrentForm={handleCurrentForm}
          onEmail={handleSetEmail}
        />
      ) : currentForm === 'code' ? (
        <Code onCurrentForm={handleCurrentForm} email={email} />
      ) : (
        <Password onForm={handleBackToLoginForm} email={email} />
      )}
    </>
  )
}

export default ForgetPassword

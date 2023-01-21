import React, { useState } from 'react'
import { useFormik } from 'formik'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { postRequest } from 'api'
import Input from 'components/Input'
import Button from 'components/Button'

import styles from '../styles.module.scss'

interface PasswordProps {
  email: string
  onForm: (form: string) => void
  code: string
}

const Password: React.FC<PasswordProps> = ({
  email,
  onForm,
  code,
}): JSX.Element => {
  const [displayPassword, setDisplayPassword] = useState<boolean>(false)
  const [displayPassword2, setDisplayPassword2] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: { password: '', password2: '' },
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .required('رمز عبور الزامی می باشد')
        .min(8, 'رمز عبور نباید کمتر از 8 کاراکتر باشد')
        .max(32, 'رمز عبور نباید بیشتر از 32 کاراکتر باشد'),
      password2: yup
        .string()
        .required('تکرار رمز عبور الزامی می باشد')
        .oneOf([yup.ref('password'), null], 'تکرار رمز عبور مطابقت ندارد')
        .min(8, 'تکرار رمز عبور نباید کمتر از 8 کاراکتر باشد')
        .max(32, 'تکرار رمز عبور نباید بیشتر از 32 کاراکتر باشد'),
    }),
    onSubmit: async (values) => {
      const data = { ...values, code, email }
      try {
        const request = await postRequest('reset-password/', data)
        if (request.status === 200) {
          toast('رمز عبور با موفقیت تغییر کرد')
          onForm('login')
        }
      } catch (err) {
        if (err.response.statsu === 404) {
          toast('کاربری با این ایمیل ثبت نشده است')
        }
        if (err.response.status === 401) {
          toast('تکرار رمز عبور مطابقت ندارد')
        }
        toast('مشکلی از سمت سرور به وجود آمده است')
        console.log(err)
      }
    },
  })

  const handleErrors = () => {
    if (formik.errors.password) {
      toast(formik.errors.password)
    }
    if (formik.errors.password2) {
      toast(formik.errors.password2)
    }
  }

  const handleDisplayPassword = () => {
    setDisplayPassword(!displayPassword)
  }

  const handleDisplayPassword2 = () => {
    setDisplayPassword2(!displayPassword2)
  }

  const handleSetCode = () => {}

  return (
    <div className={styles.container}>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.form}
        style={{ marginTop: '4rem' }}
      >
        <Input
          type={displayPassword ? 'text' : 'password'}
          name="password"
          placeholder="********"
          value={formik.values.password}
          onChange={formik.handleChange}
          icon={displayPassword ? <RxEyeOpen /> : <RxEyeClosed />}
          onClick={handleDisplayPassword}
          label="رمز عبور جدید"
        />
        <Input
          type={displayPassword2 ? 'text' : 'password'}
          name="password2"
          placeholder="*********"
          value={formik.values.password2}
          onChange={formik.handleChange}
          icon={displayPassword2 ? <RxEyeOpen /> : <RxEyeClosed />}
          onClick={handleDisplayPassword2}
          label="تکرار رمز عبور"
        />
        <Button
          type="submit"
          onClick={() => {
            handleErrors()
            handleSetCode()
          }}
          content="تایید"
          style={{ backgroundColor: '#ffc017' }}
          className={styles.button}
        />
      </form>
    </div>
  )
}

export default Password

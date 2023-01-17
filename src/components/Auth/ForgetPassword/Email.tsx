import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { postRequest } from 'api'
import { toast } from 'react-toastify'

import styles from '../styles.module.scss'
import { BiArrowBack } from 'react-icons/bi'
import Input from 'components/Input'
import Button from 'components/Button'

interface EmailProps {
  onForm: (form: string) => void
  onCurrentForm: (form: string) => void
  onEmail: (data: string) => void
}

const Email: React.FC<EmailProps> = ({
  onForm,
  onCurrentForm,
  onEmail,
}): JSX.Element => {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('ایمیل معتبر نمی باشد')
        .required('ایمیل الزامی می باشد'),
    }),
    onSubmit: async (data) => {
      try {
        onEmail(data.email)
        const request = await postRequest('forgot-password/', data)
        if (request.status === 200) {
          toast('کد اعتبار سنجی با موفقیت برای شما ارسال شد')
          onCurrentForm('code')
        }
      } catch (err) {
        if (err.response.status === 404) {
          toast('کاربری با این ایمیل ثبت نشده است')
        }
      }
    },
  })

  const handleErrors = () => {
    if (formik.errors.email) {
      toast(formik.errors.email)
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>بازیابی رمز عبور</h3>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.form}
        style={{ marginTop: '4rem' }}
      >
        <BiArrowBack
          className={styles.arrowBack}
          onClick={() => onForm('login')}
        />
        <Input
          type="email"
          name="email"
          placeholder="example@"
          value={formik.values.email}
          onChange={formik.handleChange}
          label="ایمیل"
        />
        <Button
          type="submit"
          onClick={handleErrors}
          content="بازیابی رمز عبور"
          style={{ backgroundColor: '#ffc017' }}
          className={styles.button}
        />
      </form>
    </div>
  )
}

export default Email

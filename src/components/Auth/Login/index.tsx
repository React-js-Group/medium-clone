import React from 'react'
import { useFormik } from 'formik'
import { AiOutlineUser } from 'react-icons/ai'
import Cookies from 'universal-cookie'
import { toast } from 'react-toastify'

import Input from 'components/Input'
import Button from 'components/Button'

import { LoginSchema } from 'utils/Validation'
import { getRequest, postRequest } from 'api'
import { access, refresh, toggle, loading } from 'store/fetchers/authSlice'
import { useDispatch } from 'react-redux'

import styles from '../styles.module.scss'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import { CheckToken } from 'utils/CheckToken'
import { BiKey } from 'react-icons/bi'
import { setProfile } from 'store/fetchers/userSlice'

interface LoginProps {
  currentFrom: string
  setForm: (form: string) => void
  displayPassword: boolean
  onDisplayPassword: () => void
}

interface InitialForm {
  email: string
  password: string
}

const Login: React.FC<LoginProps> = ({
  currentFrom,
  setForm,
  displayPassword,
  onDisplayPassword,
}): JSX.Element => {
  const initialValues: InitialForm = { email: '', password: '' }
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        dispatch(loading())
        const { data } = await postRequest('login/', values)

        dispatch(access(data.access))
        dispatch(refresh(data.refresh))

        localStorage.setItem(
          'medium-clone-tokens',
          JSON.stringify({
            access: data.access,
            refresh: data.refresh,
          })
        )
        const cookies = new Cookies()
        cookies.set('medium-clone-tokens', data.access, { path: '/' })

        const value = { token: data.access }
        try {
          const { data } = await postRequest('get-user-by-token/', value)
          dispatch(setProfile(data))
        } catch (err) {
          toast('اطلاعات وارد شده صحیح نمی باشد')
          console.log(err)
        }

        dispatch(toggle())
        dispatch(loading())
      } catch (err) {
        toast('اطلاعات وارد شده صحیح نمی باشد')
        console.log(err)
        dispatch(loading())
      }
    },
  })

  const handleCheckValidation = () => {
    if (formik.errors.email) {
      toast(formik.errors.email)
    }

    if (formik.errors.password) {
      toast(formik.errors.password)
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ورود</h3>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="email"
          label="ایمیل"
          placeholder="example@"
          value={formik.values.email}
          icon={<AiOutlineUser />}
          onChange={formik.handleChange}
        />

        <Input
          type={displayPassword ? 'text' : 'password'}
          name="password"
          value={formik.values.password}
          label="رمز عبور"
          placeholder="*********"
          icon={displayPassword ? <RxEyeOpen /> : <RxEyeClosed />}
          onChange={formik.handleChange}
          onClick={onDisplayPassword}
        />

        <Button
          content={currentFrom === 'register' ? 'ثبت نام' : 'ورود'}
          type="submit"
          onClick={handleCheckValidation}
          style={{
            backgroundColor: '#ffc017',
            color: '#000',
          }}
          className={styles.button}
        />
      </form>
      <div className={styles.selectForm}>
        <p>حساب کاربری ندارید؟</p>
        <span onClick={() => setForm('register')}>ثبت نام</span>
      </div>
      <div
        onClick={() => setForm('forgetPassword')}
        className={styles.forgetPasswordLink}
      >
        <p>رمز عبور خود را فراموش کرده اید؟</p>
        <BiKey />
      </div>
    </div>
  )
}

export default Login

import React, { useRef, useState, useEffect } from 'react'

import AuthCode, { AuthCodeRef } from 'react-auth-code-input'
import { BiArrowBack } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { refresh, access } from 'store/fetchers/authSlice'

import { postRequest } from 'api'
import Button from '../../Button'

import styles from '../styles.module.scss'

interface VerifyProps {
    setForm: (form: string) => void
    userData: {}
}

const Verify: React.FC<VerifyProps> = ({ setForm, userData }): JSX.Element => {
    const [code, setCode] = useState<string>('')
    const AuthInputRef = useRef<AuthCodeRef>(null)
    const dispatch = useDispatch()

    const handleSubmitCode = async () => {
        console.log({ ...userData, code })

        try {
            const res = await postRequest('register/', {
                data: { ...userData, code: code },
            })
            const { access: accessTok, refresh: refreshTok } = res.data.tokens
            dispatch(access(accessTok))
            dispatch(refresh(refreshTok))
            setForm('login')

            toast('ثبت نام موفقیت آمیز بود ، خوش آمدید')
        } catch (err) {
            if (err.response.status === 404) {
                toast('کد وارد شده صحیح نمی باشد')
            }
            if (err.response.status === 500) {
                toast('مشکلی از سمت سرور پیش آمده است ، لطفا بعدا امتحان کنید')
            }
        }
    }

    useEffect(() => {
        AuthInputRef.current?.focus()
    }, [])

    return (
        <div className={styles.verifyForm}>
            <BiArrowBack
                className={styles.arrowBack}
                onClick={() => setForm('register')}
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
                }}
                className={styles.button}
                onClick={handleSubmitCode}
            />
        </div>
    )
}

export default Verify

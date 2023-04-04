import Input from 'components/Input'
import { AiOutlineCloseCircle, AiOutlineLoading3Quarters } from 'react-icons/ai'
import classes from './BookMarkModel.module.scss'
import { useFormik, FormikConfig } from 'formik'
import { bookMarkModuleSchema } from 'utils/Validation'
import { toast } from 'react-toastify'
import Button from 'components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQueryClient } from 'react-query'
import { createBookMark } from 'api'
import { accessToken, toggle } from 'store/fetchers/authSlice'
import { useCreateBookMark } from 'Hoocks'
import { useEffect } from 'react'

interface optionProps {
    handelClick: any
}

const BookMarkModel: React.FC<optionProps> = ({ handelClick }): JSX.Element => {
    interface InitialForm {
        title: string
    }
    const dispatch = useDispatch()

    const {
        mutate: bookmark,
        isLoading,
        isError,
        error,
        isSuccess,
    } = useCreateBookMark()
    const access = useSelector(accessToken)
    console.log('isLoading', isLoading)
    const initialValues: InitialForm = {
        title: '',
    }
    const formik = useFormik({
        initialValues,
        validationSchema: bookMarkModuleSchema,
        onSubmit: (values) => {
            bookmark({ values, access })
        },
    })
    const handleCheckValidation = () => {
        if (formik.errors.title) {
            toast(formik.errors.title)
        }
    }
    useEffect(() => {
        if (isSuccess) {
            toast('بوک مارک با موفقیت اضافه شد')
            handelClick()
        }
    }, [isSuccess])

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <button onClick={handelClick}>
                    <AiOutlineCloseCircle className={classes.closeIcon} />
                </button>
            </div>
            <div className={classes.body}>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <Input
                        type={'text'}
                        name={'title'}
                        label={'نام لیست'}
                        placeholder={'نام لیست خود را وارد کنید '}
                        onChange={formik.handleChange}
                        counter={
                            <span className={formik.errors.title && 'colorRed'}>
                                {formik.values.title.length} / 32
                            </span>
                        }
                    />
                    <Button
                        type="submit"
                        onClick={handleCheckValidation}
                        content={
                            isLoading ? (
                                <AiOutlineLoading3Quarters
                                    className={classes.loading}
                                />
                            ) : (
                                'اضافه کردن'
                            )
                        }
                        className={classes.btn}
                    />
                </form>
            </div>
        </div>
    )
}

export default BookMarkModel

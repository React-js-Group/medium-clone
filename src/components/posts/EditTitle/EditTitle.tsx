import Input from 'components/Input'
import {
  AiOutlineCloseCircle,
  AiOutlineEdit,
  AiOutlineLoading3Quarters,
} from 'react-icons/ai'
import classes from './EditTitle.module.scss'
import { useFormik, FormikConfig } from 'formik'
import { bookMarkModuleSchema } from 'utils/Validation'
import { toast } from 'react-toastify'
import Button from 'components/Button'
import { useDispatch, useSelector } from 'react-redux'

import { accessToken, toggle } from 'store/fetchers/authSlice'
import { useEditBookMark } from 'Hoocks'
import { useEffect } from 'react'
import { GiCancel } from 'react-icons/gi'
import { TfiTicket } from 'react-icons/tfi'
interface optionProps {
  item: any
  handelEditTitle: any
}
const EditBookMarkTitle: React.FC<optionProps> = ({
  item,
  handelEditTitle,
}): JSX.Element => {
  interface InitialForm {
    title: string
  }
  const dispatch = useDispatch()
  const handleChange = (event) => {
    formik.values.title = event.target.value
  }
  const {
    mutate: bookmark,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useEditBookMark()
  useEffect(() => {
    if (isSuccess) {
      toast('ایتم با موفقیت ویرایش شد ')
      handelEditTitle()
    }
  }, [isSuccess])

  const access = useSelector(accessToken)

  const initialValues: InitialForm = {
    title: item.title,
  }
  const formik = useFormik({
    initialValues,
    validationSchema: bookMarkModuleSchema,
    onSubmit: (value) => {
      bookmark({ id: item.id, value, access })
    },
  })
  const handleCheckValidation = () => {
    if (formik.errors.title) {
      toast(formik.errors.title)
    }
  }

  return (
    <div>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <input
          type={'text'}
          name={'title'}
          placeholder={'نام لیست خود را وارد کنید '}
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <button
          type="submit"
          onClick={handleCheckValidation}
          className={classes.btn}
        >
          <TfiTicket />
        </button>
        <button className={classes.bookmarkIcon} onClick={handelEditTitle}>
          <GiCancel />
        </button>
      </form>
    </div>
  )
}

export default EditBookMarkTitle

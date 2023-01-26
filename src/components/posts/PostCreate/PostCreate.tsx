import PostBox from '../PostBox/PostBox'
import PostHeader from '../postHeader/postHeader'
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown'
import 'draft-js/dist/Draft.css'
import { useEffect, useRef, useState } from 'react'
import classes from './PostCreate.module.scss'
import Input from 'components/Input'
import { useFormik, FormikConfig } from 'formik'
import { createPostSchema } from 'utils/Validation'
import { toast } from 'react-toastify'
import Button from 'components/Button'
import UploadFile from '../uploadFile'
import { useCreatePost } from 'Hoocks'
import { useSelector } from 'react-redux'
import { accessToken } from 'store/fetchers/authSlice'
import Spinner from 'components/Spinner'
import { useRouter } from 'next/router'

// **************** proos InterFace ****************

interface props {
  editorLoaded: any
}

const PostCreate: React.FC<props> = ({ editorLoaded }): JSX.Element => {
  //**************** useRouter ****************

  const router = useRouter()

  // **************** useStates ****************
  const [data, setData] = useState('')
  const { mutate: postCreate, isLoading, error, isSuccess } = useCreatePost()
  // *********************************************
  const [images, setImages] = useState([{ img: '' }])
  // **************** ckEditor Config ****************
  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    }
  }, [])
  // ****************************************************
  const editorRef = useRef(null)
  const { CKEditor, ClassicEditor } = editorRef.current || {}
  // **************** onChange ****************
  const onChange = (data) => {
    setData(data)
    console.log(data)
  }
  interface InitialForm {
    title: string
    tag: string
    seoTitle: string
    seoDescription: string
  }
  const access = useSelector(accessToken)
  const initialValues: InitialForm = {
    title: '',
    tag: '',
    seoTitle: '',
    seoDescription: '',
  }
  // **************** formikConfig ****************
  const formik = useFormik({
    initialValues,
    validationSchema: createPostSchema,
    onSubmit: (values) => {
      if (data) {
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('seo_title', values.seoTitle)
        formData.append('seo_description', values.seoDescription)
        formData.append('tags', values.tag)
        formData.append('description', data)
        console.log(images)
        images.map((item) => formData.append('files', item.img))

        postCreate({ value: formData, access })
      } else {
        toast('هر پست باید دارای متن باشد')
      }
    },
  })

  // **************** handleCheckValidation ****************
  const handleCheckValidation = () => {
    if (formik.errors.title) {
      toast(formik.errors.title)
    }

    console.log(formik.errors)
  }

  // **************** IsSuccess ****************
  if (isSuccess) {
    router.push('/profile/Post/')
  }

  return (
    <div className={classes.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Input
            type={'text'}
            label={'تیتر'}
            name={'title'}
            onChange={formik.handleChange}
          />
          <Input
            type={'text'}
            label={'تگ ها'}
            name={'tag'}
            onChange={formik.handleChange}
          />
          <Input
            type={'text'}
            label={'تایتل سئو'}
            name={'seoTitle'}
            onChange={formik.handleChange}
          />
          <Input
            type={'text'}
            label={'توضیحات سئو'}
            name={'seoDescription'}
            onChange={formik.handleChange}
          />
          <div className={classes.editor}>
            {editorLoaded ? (
              <CKEditor
                type=""
                name={name}
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData()

                  onChange(data)
                }}
              />
            ) : (
              <div>Editor loading</div>
            )}
          </div>

          <UploadFile images={images} setImages={setImages} />
          <Button
            type="submit"
            onClick={handleCheckValidation}
            content={'ثبت'}
            className={classes.subBtn}
          />
        </form>
      )}
    </div>
  )
}

export default PostCreate

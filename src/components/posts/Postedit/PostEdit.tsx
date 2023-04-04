import PostBox from '../PostBox/PostBox'
import PostHeader from '../postHeader/postHeader'
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown'
import 'draft-js/dist/Draft.css'
import { useEffect, useRef, useState } from 'react'
import classes from './PostEdit.module.scss'
import Input from 'components/Input'
import { useFormik, FormikConfig } from 'formik'
import { createPostSchema } from 'utils/Validation'
import { toast } from 'react-toastify'
import SUBButton from 'components/Button'
import UploadFile from '../uploadFile'
import { useUpdatePost, useSinglePost } from 'Hoocks'
import { useSelector } from 'react-redux'
import { accessToken } from 'store/fetchers/authSlice'
import { useRouter } from 'next/router'
import { Button, Upload } from 'antd'
import { UrlImg } from 'api'
// **************** proos InterFace ****************

interface props {
    editorLoaded?: any
}

const PostEdit: React.FC<props> = ({ editorLoaded }): JSX.Element => {
    const [fileList, setFileList] = useState([])
    const [refresh, setRefresh] = useState(1)
    // **************** usesinglrPost ****************
    const { query } = useRouter()
    const access = useSelector(accessToken)
    const { data: postData, isSuccess: DataSucc } = useSinglePost(query.postId)
    // **************** useCreatePost ****************

    useEffect(() => {
        if (postData) {
            let newFileList = []
            postData.files.map((item, index) => {
                newFileList = [
                    ...newFileList,
                    {
                        uid: -1 - index,
                        name: 'image.png',
                        status: 'done',
                        url: `${UrlImg}${item.file}`,
                    },
                ]
            })
            setFileList(newFileList)
            setRefresh(refresh + 1)
        }

        formik.values.title = postData?.title
        formik.values.tag = postData?.tags
        formik.values.seoTitle = postData?.seo_title
        formik.values.seoDescriotion = postData?.seo_description
    }, [postData])
    console.log('fileList', fileList)
    // **************** useCreatePost ****************
    const [data, setData] = useState('')
    const { mutate: postUpdate, isLoading, error } = useUpdatePost()
    // *********************************************
    const [images, setImages] = useState([])
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
        formik.values.descriotion = data
    }

    interface InitialForm {
        title: string
        tag: string
        seoTitle: string
        seoDescriotion: string
        descriotion: string
    }

    const initialValues: InitialForm = {
        title: postData?.title,
        tag: postData?.tags,
        seoTitle: '',
        seoDescriotion: '',
        descriotion: '',
    }
    const formik = useFormik({
        initialValues,
        validationSchema: createPostSchema,
        onSubmit: (values) => {
            const formData = new FormData()
            formData.append('title', values.title)
            formData.append('seo_title', values.seoTitle)
            formData.append('seo_description', values.seoDescriotion)
            formData.append('tags', values.tag)
            formData.append('description', values.descriotion)

            fileList.map((item) => {
                if (!item.originFileObj) {
                    // fetch(item.url)
                    //     .then((res) => res.blob())
                    //     .then((data) => {
                    //         formData.append('files', `${data}/`, item.name)
                    //     })
                } else {
                    formData.append('files', item.originFileObj)
                }
            })
            postUpdate({ id: postData.id, value: formData, access })
        },
    })

    const handleCheckValidation = () => {
        if (formik.errors.title) {
            toast(formik.errors.title)
        }
    }

    const handleChange = (info) => {
        let newFileList = [...info.fileList]

        console.log('info', info)
        // 2. Read from response and show file link
        newFileList = newFileList.map((file) => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url
            }
            return file
        })
        console.log(newFileList)
        setFileList(newFileList)
    }

    return (
        <div className={classes.container}>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    type={'text'}
                    label={'تیتر'}
                    name={'title'}
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                <Input
                    type={'text'}
                    label={'تگ ها'}
                    name={'tag'}
                    onChange={formik.handleChange}
                    value={formik.values.tag}
                />
                <Input
                    type={'text'}
                    label={'تایتل سئو'}
                    name={'seoTitle'}
                    onChange={formik.handleChange}
                    value={formik.values.seoTitle}
                />
                <Input
                    type={'text'}
                    label={'توضیحات سئو'}
                    name={'seoDescriotion'}
                    onChange={formik.handleChange}
                    value={formik.values.seoDescriotion}
                />
                <div className={classes.editor}>
                    {editorLoaded ? (
                        <CKEditor
                            data={postData?.description || null}
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
                {refresh > 1 && (
                    <Upload.Dragger
                        multiple
                        listType="picture"
                        onChange={handleChange}
                        defaultFileList={fileList}
                    >
                        <Button>UPLOAD</Button>
                    </Upload.Dragger>
                )}

                <SUBButton
                    type="submit"
                    onClick={handleCheckValidation}
                    content={'ثبت'}
                    className={classes.subBtn}
                />
            </form>
        </div>
    )
}

export default PostEdit

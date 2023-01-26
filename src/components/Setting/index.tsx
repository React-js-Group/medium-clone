import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import { setProfile } from 'store/fetchers/userSlice'
import { editUserSchema } from 'utils/Validation'
import { putRequest } from 'api'
import Info from './Info'
import Form from './Form'

import styles from './styles.module.scss'
import Loading from '../Spinner'

interface IInitialValues {
  name: string
  family: string
  about: string
}

const Setting: React.FC = (): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false)
  const [image, setImage] = useState<any>(null)
  const [src, setSrc] = useState<any>()
  const [skills, setSkills] = useState<{}[]>([{}])
  const [loading, setLoading] = useState<boolean>(false)

  const user = useSelector((state: any) => state.user.profile)
  const auth = useSelector((state: any) => state.auth)

  const dispatch = useDispatch()

  const initalValues: IInitialValues = {
    name: '',
    family: '',
    about: '',
  }

  const handleResetForm = () => {
    setEdit(false)
    setSrc(null)
    setSkills([{}])
  }
  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: editUserSchema,
    onReset: () => {
      handleResetForm()
    },
    onSubmit: async ({ name, family, about }) => {
      setLoading(true)
      const arraySkills = []
      if (skills.length > 0) {
        skills.forEach((item: any) => {
          if (item.skill !== undefined) {
            arraySkills.push(item.skill)
          }
        })
      }

      const formData = new FormData()

      formData.append('profile', image ? image : '')
      formData.append('skills', arraySkills.toString().trim())
      formData.append('name', name)
      formData.append('family', family)
      formData.append('about', about)

      try {
        const req = await putRequest(`user-edit/`, formData, auth.access)
        const { data } = req
        setEdit(false)
        toast('اطلاعات پروفایل با موفقیت به روزرسانی شد')
        handleResetForm()
        const userData = { ...user }
        delete userData.profile
        delete userData.skills
        delete userData.name
        delete userData.family
        delete userData.about
        const merged = { ...userData, ...data }
        dispatch(setProfile(merged))
        setLoading(false)
      } catch (err) {
        toast('مشکلی پیش آمده است')
        setEdit(false)
        handleResetForm()
        setLoading(false)
      }
    },
  })

  const handleSetImage = (data: any) => {
    setImage(data)
  }

  const handleSetSrc = (data: any) => {
    setSrc(data)
  }

  const handleSetSkills = (skill: string) => {
    const cpSkills: {}[] = [...skills]
    cpSkills.push({ id: Math.random() * 1000, skill })
    setSkills(cpSkills)
  }

  const handleDeleteSkill = (id: number) => {
    const cpSkills: {}[] = [...skills]
    const updateSkills: {}[] = cpSkills.filter((f: any) => f.id !== id)
    setSkills(updateSkills)
  }

  return (
    <>
      <div className={styles.container}>
        <h2>تنظیمات</h2>
        <Info user={user} onEdit={(value: boolean) => setEdit(value)} />
        <Form
          edit={edit}
          formik={formik}
          src={src}
          setSrc={handleSetSrc}
          setImage={handleSetImage}
          onSkills={handleSetSkills}
          skills={skills}
          onDelete={handleDeleteSkill}
          onReset={handleResetForm}
          loading={loading}
        />
      </div>
    </>
  )
}

export default Setting

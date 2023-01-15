import Button from 'components/Button'
import Input from 'components/Input'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Skills from '../skills'

import styles from '../styles.module.scss'

interface FormProps {
  edit: boolean
  formik: any
  src: any
  setSrc: (data: any) => void
  setImage: (data: any) => void
  onSkills: (skill: string) => void
  skills: {}[]
  onDelete: (id: number) => void
  onReset: () => void
}

const Form: React.FC<FormProps> = ({
  edit,
  formik,
  src,
  setSrc,
  setImage,
  onSkills,
  skills,
  onDelete,
  onReset,
}) => {
  const user = useSelector((state: any) => state.user)

  const handleCheckValidation = () => {
    if (formik.errors.name) {
      toast(formik.errors.name)
    }
    if (formik.errors.family) {
      toast(formik.errors.family)
    }
  }

  return (
    <div className={styles.modal} style={{ display: edit ? 'flex' : 'none' }}>
      <div className={styles.editContainer}>
        <FaTimes className={styles.times} onClick={formik.handleReset} />
        <h2>اطلاعات کاربر</h2>
        <div className={styles.editAvatar}>
          <div>
            {src && user.profile ? (
              <img alt="profile" className={styles.profile} src={src && src} />
            ) : !src && user.profile ? (
              <img
                alt="profile"
                src={process.env.BASE_URL + user.profile}
                className={styles.profile}
              />
            ) : src && !user.profile ? (
              <img alt="profile" className={styles.profile} src={src && src} />
            ) : (
              <span className={styles.avatar}>
                {user?.username?.slice(0, 1).toUpperCase()}
              </span>
            )}
            <p>در این قسمت میتوانید تصویر پروفایل خود را تغییر دهید</p>
          </div>
          <div>
            <input
              type="file"
              onChange={(e) => {
                setSrc(URL.createObjectURL(e.target.files[0]))
                setImage(e.target.files[0])
              }}
            />
            <button>به روز رسانی</button>
          </div>
        </div>
        <form
          className={styles.formContainer}
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <Input
            label="نام"
            name="name"
            type="text"
            placeholder="علی"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <Input
            label="نام خانوادگی"
            name="family"
            type="text"
            placeholder="محمدی"
            value={formik.values.family}
            onChange={formik.handleChange}
          />
          <Skills onSkills={onSkills} skills={skills} onDelete={onDelete} />
          <label className={styles.aboutLabel} htmlFor="about">
            بیوگرافی
          </label>
          <textarea
            name="about"
            id="about"
            placeholder="علاقه مند به دنیای برنامه نویسی"
            value={formik.values.about}
            onChange={formik.handleChange}
          />
          <div>
            <Button
              content="تایید"
              type="submit"
              className={styles.submit}
              onClick={handleCheckValidation}
            />
            <Button
              content="انصراف"
              type="reset"
              className={styles.reset}
              onClick={onReset}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form

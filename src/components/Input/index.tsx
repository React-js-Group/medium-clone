import React from 'react'

import styles from './styles.module.scss'

interface InputProps {
  type: React.HTMLInputTypeAttribute | undefined
  name: string
  value?: string
  label?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactElement
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void
  counter?: any
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  label,
  placeholder,
  icon,
  counter,
  onChange,
  onClick,
}): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {counter}
      <input
        type={type}
        value={value}
        className={styles.input}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon && (
        <span className={styles.icon} onClick={onClick}>
          {icon}
        </span>
      )}
    </div>
  )
}

export default Input

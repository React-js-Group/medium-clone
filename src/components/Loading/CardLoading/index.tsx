import React from 'react'
import { RxImage } from 'react-icons/rx'

import styles from './styles.module.scss'

const CardLoading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.writer}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.files}>
        <RxImage />
      </div>
      <span className={styles.title}></span>
      <div className={styles.description}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default CardLoading

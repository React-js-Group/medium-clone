import React from 'react'

import styles from './styles.module.scss'

const Loading: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <span className={styles.waiting}>لطفا صبر کنید</span>
      <span className={styles.info}>
        با توجه به حجم تصویر ممکن است طول بکشد
      </span>
    </div>
  )
}

export default Loading

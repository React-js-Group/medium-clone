import React from 'react'
import { RxImage } from 'react-icons/rx'

import styles from './styles.module.scss'

const Loading: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <span></span>
          <span></span>
        </div>
        <div className={styles.right}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div></div>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div></div>
        </div>
        <div className={styles.mainRight}>
          <RxImage />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading

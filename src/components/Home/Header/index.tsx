import Navbar from 'components/Navbar'
import React, { useEffect, useState } from 'react'
import Content from './Content'

import styles from './styles.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerMain}>
        <Content />
      </div>
    </div>
  )
}

export default Header

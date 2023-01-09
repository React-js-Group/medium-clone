import Navbar from 'components/Navbar'
import React, { useEffect, useState } from 'react'
import Content from './Content'

import styles from './styles.module.scss'

const Header: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(true)

  useEffect(() => {
    window.onscroll = function () {
      bgHeder()
    }
  })

  function bgHeder() {
    if (
      document.body.scrollTop > 320 ||
      document.documentElement.scrollTop > 320
    ) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }

  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <Navbar scroll={scroll} />
      </div> */}
      <div className={styles.headerMain}>
        <Content />
      </div>
    </div>
  )
}

export default Header

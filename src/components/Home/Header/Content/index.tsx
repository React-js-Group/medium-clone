import React from 'react'
import { positonData } from 'data'

import styles from '../styles.module.scss'

const HeaderMain = () => {
  const [position, setPosition] = React.useState([])

  React.useEffect(() => {
    const getPosition = positonData()
    setPosition(getPosition)
  }, [])

  return (
    <>
      <div className={styles.titleDiv}>
        <h1>کنجکاو بمان</h1>
        <span>
          <h3>
            داستان، تفکر و تخصص را کشف کنید <br></br> از نویسندگان در هر موضوع.
          </h3>
        </span>
        <button
          className={styles.button}
          style={{ fontSize: '22px', padding: '4px 50px 6px' }}
        >
          بخوانید ...
        </button>
      </div>
      <div className={styles.svgDiv}>
        {position?.map((char, i) => {
          return (
            <span
              key={i}
              className={styles.char}
              style={{
                top: Math.random() > 0.5 ? char[0] : -char[0],
                right: Math.random() > 0.5 ? char[1] : -char[1],
              }}
            >
              M
            </span>
          )
        })}
      </div>
    </>
  )
}

export default HeaderMain

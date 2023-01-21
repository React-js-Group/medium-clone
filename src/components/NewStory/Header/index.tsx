import React, { useState } from 'react'
import Button from 'components/Button'

import styles from './styles.module.scss'
import Profile from './components/Profile'
import Notifications from './components/Notificaions'
import Share from './components/Share'

const Header: React.FC = (): JSX.Element => {
  const [displayOptions, setDisplayOptions] = useState<string>('')

  const handleSetDisplay = (active: string) => {
    if (displayOptions.length > 0) {
      setDisplayOptions('')
      if (displayOptions !== active) {
        setDisplayOptions(active)
      }
    } else {
      setDisplayOptions(active)
    }
  }

  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <svg height="25" viewBox="0 0 1043.63 592.71">
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36"></path>
                <path d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279"></path>
                <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
              </g>
            </g>
          </svg>
        </li>
        <li>Draft in Ali</li>
      </ul>
      <ul>
        <li>
          <Button
            type="button"
            content="Publish"
            style={{
              backgroundColor: '#229911',
              borderRadius: '100px',
              width: '4rem',
              padding: '2px',
            }}
          />
        </li>
        <li></li>
        <Share set={handleSetDisplay} display={displayOptions} />
        <Notifications set={handleSetDisplay} display={displayOptions} />
        <Profile set={handleSetDisplay} display={displayOptions} />
      </ul>
    </nav>
  )
}

export default Header

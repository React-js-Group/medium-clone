import React from 'react'

import Gourd from 'HOC/Guard'

import Navbar from 'components/Navbar'
import Setting from 'components/Setting'

const SettingPage: React.FC = () => {
  return (
    <Gourd>
      <Navbar />
      <Setting />
    </Gourd>
  )
}

export default SettingPage

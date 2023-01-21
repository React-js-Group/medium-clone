import Head from 'next/head'

import Page from 'components/layout/page/page'

import React, { useState, useEffect } from 'react'
import {
  BOOK_MARK_SIDEBAR,
  PROFILE_SIDEBAR,
} from 'components/layout/sideBar/sideBarType'
import PostBody from 'components/posts/PostBody/PostBody'
import PostCreate from 'components/posts/PostCreate/PostCreate'

interface optionprops {}

const CreatePost: React.FC<optionprops> = (props): JSX.Element => {
  const [editorLoaded, setEditorLoaded] = useState(false)

  useEffect(() => {
    setEditorLoaded(true)
  }, [])

  return (
    <div>
      <Page sideBar={[BOOK_MARK_SIDEBAR, PROFILE_SIDEBAR]}>
        <PostBody>
          <PostCreate editorLoaded={editorLoaded} />
        </PostBody>
      </Page>
    </div>
  )
}

export default CreatePost

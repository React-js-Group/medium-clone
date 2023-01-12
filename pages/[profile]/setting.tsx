import BookMarkBody from 'components/bookmark/BookMarkBody/BookMarkBody'
import FeedList from 'components/feedBox/FeedList/FeedList'
import Page from 'components/layout/page/page'
import {
  BOOK_MARK_SIDEBAR,
  PROFILE_SIDEBAR,
} from 'components/layout/sideBar/sideBarType'
import UserNavbar from 'components/Navbar/UserNavbar'
import React from 'react'
import { useSelector } from 'react-redux'
import Gourd from 'HOC/Guard'

const Setting: React.FC = (): JSX.Element => {
  return (
    <Gourd>
      <Page sideBar={[BOOK_MARK_SIDEBAR, PROFILE_SIDEBAR]}>
        <BookMarkBody />
      </Page>
    </Gourd>
  )
}

export default Setting

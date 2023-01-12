import BookMarkSideBar from './BookmarkSideBar/BookMarkSideBar'
import ProfileSideBar from './profileSideBar'
import classes from './SideBar.module.scss'
import { BOOK_MARK_SIDEBAR, PROFILE_SIDEBAR } from './sideBarType'

interface OptionsProps {
  sideBar: Array<any>
}

const SideBar: React.FC<OptionsProps> = ({ sideBar }): JSX.Element => {
  return (
    <div className={classes.SideBar}>
      {/* BOOK_MARKSIDEBAR */}

      {sideBar &&
        sideBar?.filter((item) => item == BOOK_MARK_SIDEBAR).length !== 0 && (
          <BookMarkSideBar />
        )}

      {/* PROFILE_SIDEBAR*/}
      {sideBar &&
      sideBar?.filter((item) => item == PROFILE_SIDEBAR).length !== 0 ? (
        <ProfileSideBar />
      ) : (
        ''
      )}
    </div>
  )
}

export default SideBar

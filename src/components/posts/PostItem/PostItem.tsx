import { useDeleteBookMark, useDeletePost } from 'Hoocks'
import { useState } from 'react'
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { QueryClient, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { accessToken } from 'store/fetchers/authSlice'
import Swal from 'sweetalert2'
import EditBookMarkTitle from '../EditTitle/EditTitle'
import classes from './PostItem.module.scss'

interface optionProps {
  item: any
}

const PostItem: React.FC<optionProps> = ({ item }): JSX.Element => {
  // Hoocks
  const [editTitle, setEditTitle] = useState(false)

  //************************ */
  // get accessToken
  const access = useSelector(accessToken)

  // useDeleteBookMark

  const { mutate: deletePost, isSuccess, isLoading, error } = useDeletePost()
  //************************ */

  // deletePostAlert
  const deleteBookMarkAlert = () =>
    Swal.fire({
      title: 'ایا از پاک کردن این ایتم مطمئن هستید',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'بله',
      cancelButtonText: 'خیر',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(item.id)
        deletePost({ id: item.id, access })
      }
      if (isSuccess) {
        Swal.fire('پاک شد')
      }
    })
  //************************ */

  const handelEditTitle = () => {
    setEditTitle(!editTitle)
    console.log(editTitle)
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.titleBox}>{item.title}</div>

        <div className={classes.btnBox}>
          <button className={classes.showlist}>مشاهده پست</button>

          <p className={classes.postNum}></p>
        </div>
        <div className={classes.iconBox}>
          <button
            className={classes.bookmarkIcon}
            onClick={() => deleteBookMarkAlert()}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
      <div className={classes.imgs}></div>
    </div>
  )
}

export default PostItem

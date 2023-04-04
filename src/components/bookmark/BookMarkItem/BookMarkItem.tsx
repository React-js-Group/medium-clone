import { useState } from 'react'
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { QueryClient, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import { accessToken } from 'store/fetchers/authSlice'
import { useDeleteBookMark } from 'Hoocks'
import EditBookMarkTitle from '../EditTitle/EditTitle'
import classes from './BookMarkItem.module.scss'
import Link from 'next/link'
import { useJwt } from 'react-jwt'

interface optionProps {
    item: any
}

interface RootState {
  user: {
    profile: {
      username: string;
      // other properties of the profile object
    };
    // other properties of the user object
  };
  // other properties of the Redux state
}
const BookMarkItem: React.FC<optionProps> = ({ item }): JSX.Element => {
    // Hoocks
    const [editTitle, setEditTitle] = useState(false)

    //************************ */
    // get accessToken
    const access = useSelector(accessToken)
     const  userName =  useSelector((state:RootState)=>state.user.profile.username)
        
    // useDeleteBookMark

    const {
        mutate: deleteBookMark,
        isSuccess,
        isLoading,
        error,
    } = useDeleteBookMark()
    //************************ */

    // deleteBookMarkAlert
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
                deleteBookMark({ id: item.id, access })
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
                <div className={classes.titleBox}>
                    {!editTitle ? (
                        <>
                            <h3>{item.title}</h3>
                            <AiOutlineEdit onClick={handelEditTitle} />
                        </>
                    ) : (
                        <EditBookMarkTitle
                            item={item}
                            handelEditTitle={handelEditTitle}
                        />
                    )}
                </div>

                <div className={classes.btnBox}>
                    <Link href={`/@${userName}/Post/BookMarkPost/${item.id}`} className={classes.showlist}>مشاهده لیست</Link>

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

export default BookMarkItem

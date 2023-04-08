import Tippy from '@tippyjs/react'
import { checkBookmark, deleteBookMarkPost, getBookmark } from 'api'
import { positonData } from 'data'
import { useAddBookMarkPost, useBookMarks, UseremoveBookMarkPost } from 'Hoocks'
import _ from 'lodash'
import React, { useEffect, useState, useMemo } from 'react'
import {
    BsBookmarkPlus,
    BsFillBookmarkStarFill,
    BsFillLockFill,
} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { accessToken } from 'store/fetchers/authSlice'

import styles from '../styles.module.scss'
interface optionProps {
    item: any
    postItem: any
    key: any
}

const MarkList: React.FC<optionProps> = ({
    item,
    postItem,
    key,
}): JSX.Element => {
    const access = useSelector(accessToken)
    const [checkState, setCheckState] = useState(false)
    const {
        mutate: addPost,
        isLoading: addPostLoading,
        isSuccess: addPostsucc,
    } = useAddBookMarkPost()
    const {
        mutate: removePost,
        isLoading: removePostLoading,
        isSuccess: removePostsucc,
    } = UseremoveBookMarkPost()

    const handleOnChange = (id: number, status): void => {
        if (!checkState) {
            addPost({ access, BookMarkId: item.id, PoostId: postItem.id })
        } else {
            removePost({ bookMarkId: item.id, postId: postItem.id, access })
        }
    }
    checkBookmark(item.id, postItem.id, access).then((data) =>
        setCheckState(data)
    )

    return (
        <>
            <li key={key}>
                <input
                    type="checkbox"
                    checked={checkState}
                    onChange={() => handleOnChange(item.id, status)}
                />
                {addPostLoading || removePostLoading ? (
                    'loading'
                ) : (
                    <BsFillLockFill className={styles.lock} />
                )}
                {addPostLoading || removePostLoading ? '' : item.title}
            </li>
        </>
    )
}

export default MarkList

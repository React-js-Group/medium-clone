import Tippy from '@tippyjs/react'
import { getBookmark } from 'api'
import { positonData } from 'data'
import { useAddBookMarkPost, useBookMarks } from 'Hoocks'
import _, { add } from 'lodash'
import React, { useEffect, useState, useMemo } from 'react'

import {
    BsBookmarkPlus,
    BsFillBookmarkStarFill,
    BsFillLockFill,
} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { accessToken } from 'store/fetchers/authSlice'
import MarkList from './markList'

import styles from './styles.module.scss'
interface optionProps {
    item: any
}

const Mark: React.FC<optionProps> = ({ item }): JSX.Element => {
    const access = useSelector(accessToken)

    const {
        mutate: addPost,
        isLoading: addPostLoading,
        isSuccess: addPostsucc,
    } = useAddBookMarkPost()

    const [mark, setMark] = useState<boolean>(false)

    // const bookMarkCheck = (id: number) => {
    //     let condition: boolean = false
    //     const { data } = useGetbookmark(id, access)
    //     console.log(data)
    // }

    const {
        data,
        isLoading,
        error,
        isSuccess: bookMarkSucc,
    } = useBookMarks(access)

    const handleSetMark = () => {
        setMark(!mark)
    }

    let postItem = item

    return (
        <>
            <Tippy content="ذخیره">
                <button
                    style={{ all: 'unset', cursor: 'pointer' }}
                    onClick={handleSetMark}
                >
                    {mark ? <BsFillBookmarkStarFill /> : <BsBookmarkPlus />}
                </button>
            </Tippy>
            {mark && bookMarkSucc && (
                <div className={styles.Lists}>
                    <ul>
                        {data?.results.map((item, index) => {
                            return <MarkList item={item} postItem={postItem} />
                        })}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Mark

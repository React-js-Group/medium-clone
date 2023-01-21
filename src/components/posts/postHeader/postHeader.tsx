import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { displayForm, toggle } from 'store/fetchers/authSlice'
import BookMarkModel from '../BookMarkModel'
import classes from './postHeader.module.scss'

const BookMarkHeader: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const bookmarkModel = useSelector(displayForm)

  const [model, setModel] = useState(false)
  const handelClick = () => {
    dispatch(toggle())
  }
  return (
    <div className={classes.container}>
      <h1>پست ها</h1>
      <Link href={'/profile/Post/create'} className={classes.newListBtn}>
        پست جدید
      </Link>
      {bookmarkModel && <BookMarkModel handelClick={handelClick} />}
    </div>
  )
}

export default BookMarkHeader

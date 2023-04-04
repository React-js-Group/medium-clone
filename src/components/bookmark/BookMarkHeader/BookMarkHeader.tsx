import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { displayForm, toggle } from 'store/fetchers/authSlice'
import BookMarkModel from '../BookMarkModel'
import classes from './BookMarkHeader.module.scss'

const BookMarkHeader: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const bookmarkModel = useSelector(displayForm)

    const [model, setModel] = useState(false)
    const handelClick = () => {
        setModel(!model)
    }
    return (
        <div className={classes.container}>
            <h1>لیست شما</h1>
            <button className={classes.newListBtn} onClick={handelClick}>
                لیست جدید
            </button>
            {model && <BookMarkModel handelClick={handelClick} />}
        </div>
    )
}

export default BookMarkHeader

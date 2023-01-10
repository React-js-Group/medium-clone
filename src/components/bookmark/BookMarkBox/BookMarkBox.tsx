import { useBookMarks } from 'hooks'
import { useAmp } from 'next/amp'
import { useSelector } from 'react-redux'
import { accessToken } from 'store/fetchers/authSlice'
import BookMarkItem from '../BookMarkItem/BookMarkItem'
import classes from './BookMarkBox.module.scss'

const BookMarkBox: React.FC = (): JSX.Element => {
  const { data, isLoading, error } = useBookMarks(useSelector(accessToken))

  if (isLoading) {
    return <div className={classes.container}>loading...</div>
  }
  if (error) {
    return <div className={classes.container}>console.error();</div>
  }

  return (
    <div className={classes.container}>
      {data.map((item) => (
        <BookMarkItem item={item} />
      ))}
    </div>
  )
}

export default BookMarkBox

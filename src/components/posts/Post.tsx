import classes from './BookMark.module.scss'
import PostBody from './PostBody/PostBody'

const Post: React.FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <PostBody />
    </div>
  )
}

export default Post

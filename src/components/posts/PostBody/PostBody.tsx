import PostBox from '../PostBox/PostBox'
import PostHeader from '../postHeader/postHeader'
import BookMarkMenu from '../BookMarkMenu/BookMarkMenu'
import classes from './PostBody.module.scss'

interface optionProps {
    children?: any
}

const PostBody: React.FC<optionProps> = ({ children }): JSX.Element => {
    return <div className={classes.container}>{children}</div>
}

export default PostBody

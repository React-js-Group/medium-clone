import classes from './FeedHeader.module.scss'

interface Props {
    title?: string
}

const FeedHeader: React.FC<Props> = ({ title }): JSX.Element => {
    return (
        <div className={classes.Container}>
            <h1>{title}</h1>
        </div>
    )
}

export default FeedHeader

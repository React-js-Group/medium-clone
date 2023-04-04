import Image from 'next/image'
import Link from 'next/link'
import { date } from 'yup'
import classes from './singlePost.module.scss'
interface optionprops {
    data: any
}
const myLoader = ({ src }) => {
    return `https://medium.pythonanywhere.com/${src}`
}

const SinglePost: React.FC<optionprops> = ({ data }): JSX.Element => {
    return (
        <div className={classes.container}>
            <div className={classes.ProfileInfo}>
                <Link href={`/@${data.user.name}`}>
                    <div className={classes.profileBox}>
                        <Image
                            src={`${data.user.profile}`}
                            loader={myLoader}
                            width={30}
                            height={30}
                            alt="profile"
                            className={classes.profileImg}
                        />
                        <div className={classes.profileItem}>
                            {data.user.name}
                        </div>
                    </div>
                </Link>
            </div>
            <div className={classes.body}>
                <h1 className={classes.title}>{data.title}</h1>
                <Image
                    src={`${data?.files[0].file}`}
                    loader={myLoader}
                    width={400}
                    height={400}
                    alt="profile"
                    className={classes.mainImage}
                />
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default SinglePost

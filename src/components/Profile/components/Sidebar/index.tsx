import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'

import styles from './styles.module.scss'
import Avatar from 'components/Avatar'

interface SidebarProps {
    profile: any
}

const Sidebar: FC<SidebarProps> = ({ profile }): JSX.Element => {
    const { user } = profile
    const me = useSelector((state: any) => state.user.profile)
    const route = useRouter()

    return (
        <aside className={styles.Sidebar}>
            <div>
                {user.profile ? (
                    <img
                        alt="profile"
                        className={styles.profile}
                        src={user.profile}
                    />
                ) : (
                    <Avatar char={user.username.slice(0, 1)} />
                )}
                <p>{user?.username}</p>
                {route.query.profile.slice(1) === me?.username && (
                    <Link href={`${route.query.profile}/setting`}>
                        ویرایش پروفایل
                    </Link>
                )}
            </div>

            <div className={styles.about}> {user?.about}</div>
            <ul className={styles.skills}>
                {user?.skills?.split(',').map((skill: string, i) => (
                    <li key={skill + i}>{skill}#</li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar

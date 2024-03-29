import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AiOutlineLink, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi'

import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import FollowBTN from 'components/FollowBTN'
interface HeadProps {
    isFollow: any
    setFollow: () => void
    setFollowers: () => void
    followers: number
    profile: any
}

const Head: React.FC<HeadProps> = ({
    isFollow,
    setFollow,
    setFollowers,
    followers,
    profile,
}): JSX.Element => {
    const [options, setOptions] = useState<boolean>(false)
    const token = useSelector((state: any) => state.auth.access)
    const { user, userPosts } = profile
    const me = useSelector((state: any) => state.user.profile)

    const route = useRouter()

    return (
        <>
            {user && userPosts && (
                <>
                    <div className={styles.Head}>
                        <div>
                            {user.profile ? (
                                <img
                                    alt="profile"
                                    className={styles.profile}
                                    src={user.profile}
                                />
                            ) : (
                                <div className={styles.avatar}>
                                    {user.username.slice(0, 1).toUpperCase()}
                                </div>
                            )}
                            <h1>{user.name ? user.name : user.username}</h1>
                        </div>
                        <BiDotsHorizontalRounded
                            onClick={() => setOptions(!options)}
                        />
                        {options && (
                            <div className={styles.Options}>
                                <ul>
                                    <li className={styles.Link}>
                                        <AiOutlineLink />
                                        <Link
                                            href={`${route.query.profile}/followings`}
                                        >
                                            دنبال شوندگان
                                        </Link>
                                    </li>
                                    {route.query.profile.slice(1) ===
                                        me?.username && (
                                        <div className={styles.Links}>
                                            <li className={styles.Link}>
                                                <IoSettingsOutline />
                                                <Link
                                                    href={`${route.query.profile}/setting`}
                                                >
                                                    تنظیمات
                                                </Link>
                                            </li>
                                            <li className={styles.Link}>
                                                <FaPlus />
                                                <Link
                                                    href={`${route.query.profile}/post/create`}
                                                >
                                                    پست جدید
                                                </Link>
                                            </li>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                    {isFollow !== null && token && (
                        <FollowBTN
                            setFollow={setFollow}
                            setFollowers={setFollowers}
                            isFollow={isFollow}
                        />
                    )}
                    <Link
                        href={`@${user.username}/followers`}
                        className={styles.followers}
                    >
                        <span>دنبال کنندگان </span>
                        <HiUserGroup />
                        <span>:{followers}</span>
                    </Link>
                    <div className={styles.about}> {user?.about}</div>
                    <ul className={styles.skills}>
                        {user?.skills?.split(',').map((skill: string, i) => (
                            <li key={skill + i}>{skill}#</li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}

export default Head

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi'

import styles from './styles.module.scss'
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

    const { user, userPosts } = profile
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
                                    <li>لینک پروفایل</li>
                                    <li>طراحی پروفایل</li>
                                    {route.query.profile.slice(1) ===
                                        user.username && (
                                        <li>
                                            <Link
                                                href={`${route.query.profile}/setting`}
                                            >
                                                تنظیمات
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                    {isFollow !== null && (
                        <div className={styles.follow}>
                            <button
                                type="button"
                                onClick={() => {
                                    setFollow()
                                    setFollowers()
                                }}
                                style={
                                    isFollow
                                        ? {
                                              backgroundColor: '#fff',
                                              color: '#0081c9 ',
                                              border: '1px solid #0081c9',
                                          }
                                        : {
                                              backgroundColor: '#0081c9',
                                              color: '#fff',
                                          }
                                }
                            >
                                {isFollow ? 'دنبال نکن' : 'دنبال کن'}
                                {isFollow ? (
                                    <AiOutlineMinus />
                                ) : (
                                    <AiOutlinePlus />
                                )}
                            </button>
                        </div>
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

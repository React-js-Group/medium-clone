import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    BsBookmarks,
    BsFilePostFill,
    BsReverseLayoutTextWindowReverse,
    BsSearch,
} from 'react-icons/bs'
import { IoNotificationsOutline, IoStatsChart } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { TfiWrite } from 'react-icons/tfi'
import { GiStarShuriken } from 'react-icons/gi'

import styles from './styles.module.scss'
import { AiOutlineUser } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { access, refresh } from 'store/fetchers/authSlice'
import { setProfile } from 'store/fetchers/userSlice'
import { useRouter } from 'next/router'
import Avatar from 'components/Avatar'

const UserNavbar: React.FC = (): JSX.Element => {
    const [displayProfile, setDisplayProfile] = useState<boolean>(false)
    const route = useRouter()
    const user = useSelector((state: any) => state.user.profile)
    const dispatch = useDispatch()

    return (
        <nav className={styles.Nav}>
            <ul className={styles.serchBar}>
                <li>
                    <Link href="/">
                        <svg
                            viewBox="0 0 1043.63 592.71"
                            className={styles.logo}
                        >
                            <g data-name="Layer 2">
                                <g data-name="Layer 1">
                                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </li>
                <li>
                    <div>
                        <input placeholder="جستجو در مدیوم" />
                        <BsSearch className={styles.search} />
                    </div>
                </li>
            </ul>
            <ul>
                <li className={styles.first}>
                    <Link href="/new-story">
                        <TfiWrite />
                        <span>write</span>
                    </Link>
                </li>
                <li className={styles.second}>
                    <Link href="/notifications">
                        <IoNotificationsOutline />
                    </Link>
                </li>
                <li
                    className={styles.third}
                    onClick={() => setDisplayProfile(!displayProfile)}
                >
                    {user.profile ? (
                        <img
                            alt="profile"
                            className={styles.profile}
                            src={process.env.BASE_URL + user.profile}
                        />
                    ) : (
                        <Avatar char={user.username.slice(0, 1)} size="sm" />
                    )}
                    <IoIosArrowDown />
                </li>
                <li>
                    {displayProfile && (
                        <div className={styles.ProfileOptions}>
                            <ul>
                                <li>
                                    <Link href={`/@${user.username}`}>
                                        <AiOutlineUser />
                                        <span>پروفایل</span>
                                    </Link>
                                </li>
                                <li>
                                    <BsBookmarks />
                                    <span>لیست</span>
                                </li>
                                <li>
                                    <Link href={`bookmark`}>
                                        <span>لیست</span>
                                    </Link>
                                </li>
                                <li>
                                    <BsFilePostFill />
                                    <Link href={`/@${user.username}/Post/`}>
                                        <span>پست ها</span>
                                    </Link>
                                </li>
                                <li>
                                    <BsReverseLayoutTextWindowReverse />
                                    <span>استوری</span>
                                </li>
                                <li>
                                    <IoStatsChart />
                                    <span>آمار</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href={`/@${user?.username}/setting`}>
                                        تنظیمات
                                    </Link>
                                </li>
                                <li>توصیه ها برای اصلاح</li>
                                <li>مدیریت انتشارات</li>
                            </ul>
                            <ul>
                                <li className={styles.become}>
                                    <span>عضو شوید</span>
                                    <GiStarShuriken />
                                </li>
                                <li>مشارکت در برنامه</li>
                                <li>اهدای عضویت</li>
                            </ul>
                            <ul>
                                <li className={styles.logout}>
                                    <span
                                        onClick={() => {
                                            route.replace('/')
                                            dispatch(access(''))
                                            dispatch(refresh(''))
                                            localStorage.setItem(
                                                'medium-clone-tokens',
                                                JSON.stringify({
                                                    access: '',
                                                    refresh: '',
                                                })
                                            )
                                            setTimeout(
                                                () => dispatch(setProfile({})),
                                                1000
                                            )
                                        }}
                                    >
                                        خروج
                                    </span>
                                    <span>amohamadi17@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default UserNavbar

import { getRequest } from 'api'
import axios from 'axios'
import Avatar from 'components/Avatar'
import React from 'react'
import { useQuery } from 'react-query'

import styles from './styles.module.scss'

interface CardProps {
    user: any
    title: string
    description: string
    tags: string
    file: string
    created: string
}

const Card: React.FC<CardProps> = ({
    user,
    title,
    description,
    tags,
    created,
    file,
}): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.writer}>
                {user.profile ? (
                    <img
                        alt="profile"
                        src={process.env.BASE_URL + user.profile}
                    />
                ) : (
                    <Avatar char={user.name?.slice(0, 1)} size="sm" />
                )}
                <span>{user.name ? user.name : user.username}</span>
            </div>
            {file && (
                <img
                    src={process.env.BASE_URL + file}
                    className={styles.files}
                />
            )}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description?.slice(0, 80)}...</p>
            <div className={styles.tags}>
                {tags?.split(',').map((tag, i) => (
                    <span key={i}>#{tag}</span>
                ))}
            </div>
            <span className={styles.created}>{created}</span>
        </div>
    )
}

export default Card

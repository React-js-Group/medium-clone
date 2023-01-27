import React from 'react'

import styles from './styles.module.scss'

interface AvatarProps {
    char: string
    size?: string
}

const Avatar: React.FC<AvatarProps> = ({ char, size }) => {
    return (
        <div className={size === 'sm' ? styles.smAvatar : styles.avatar}>
            {char?.toUpperCase()}
        </div>
    )
}

export default Avatar

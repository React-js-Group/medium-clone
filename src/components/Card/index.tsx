import { getRequest } from 'api'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

import styles from './styles.module.scss'

interface CardProps {
  user: string
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
  const { data } = useQuery(['get-user'], async () => {
    return await axios.get(
      `https://medium.pythonanywhere.com/user_profile/${user}/`
    )
  })

  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.writer}>
          {data.data.profile ? (
            <img alt="profile" src={process.env.BASE_URL + data.data.profile} />
          ) : (
            <span className={styles.avatar}>
              {data.data.username?.slice(0, 1).toUpperCase()}
            </span>
          )}
          <span>{data?.data.name ? data.data.name : data.data.username}</span>
        </div>
      )}
      <img src={process.env.BASE_URL + file} className={styles.files} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description.slice(0, 80)}...</p>
      <div className={styles.tags}>
        {tags.split(',').map((tag, i) => (
          <span key={i}>#{tag}</span>
        ))}
      </div>
      <span className={styles.created}>{created}</span>
    </div>
  )
}

export default Card

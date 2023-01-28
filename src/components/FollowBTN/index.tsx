import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import styles from './styles.module.scss'

interface FollowBTNProps {
    setFollow: () => void
    setFollowers: () => void
    isFollow: boolean
}

const FollowBTN: React.FC<FollowBTNProps> = ({
    setFollow,
    setFollowers,
    isFollow,
}): JSX.Element => {
    return (
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
                {isFollow ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </div>
    )
}

export default FollowBTN

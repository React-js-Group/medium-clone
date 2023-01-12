import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Loading from 'components/Loading'

interface GourdProps {
  children: React.ReactNode
}

const Gourd: FC<GourdProps> = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true)
  const user = useSelector((state: any) => state.user.profile)
  const { query, replace } = useRouter()

  useEffect(() => {
    if (query.profile?.slice(1) !== user.username) {
      setLoading(false)
      replace('/')
    }
  }, [query])

  return <>{children}</>
}

export default Gourd

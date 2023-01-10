import { FC } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Profile: FC = (props) => {
  const router = useRouter()
  console.log(router.query)

  return <div>Profile</div>
}

export default Profile

export async function getStaticPaths() {
  // const users = await axios.get('https://jsonplaceholder.typicode.com/users')

  // const paths = users.data.map((user: any) => ({
  //   params: { profile: user.username },
  // }))

  return {
    paths: {
      params: [{ profile: 1 }],
    },
    fallback: false,
  }
}

// export async function getStaticProps() {
//   return {
//     props: {
//       profile: {
//         name: 'alii',
//       },
//     },
//   }
// }

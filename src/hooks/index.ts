import { QueryCache, useMutation, useQuery, useQueryClient } from 'react-query'

import { bookMarks, createBookMark, deleteBookMark } from 'api'
import { toggle } from 'store/fetchers/authSlice'
import { queryClient } from '../../pages/_app'

export const useBookMarks = (access: any) => {
  return useQuery(['bookMarks', access], bookMarks)
}

export const useCreateBookMark = () => {
  return useMutation(createBookMark, {
    onSuccess: () => {
      queryClient.invalidateQueries('bookMarks')
    },
  })
}
export const useDeleteBookMark = () => {
  return useMutation(deleteBookMark, {
    onSuccess: () => {
      queryClient.invalidateQueries('bookMarks')
    },
  })
}

// export const useGetUserPosts = (token: any, query: any) => {
//   const username = query.profile.slice(1)
//   return useQuery(['user-posts', { token, username }], getUserPost)
// }

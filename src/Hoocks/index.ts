import {
  QueryCache,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'

import {
  bookMarks,
  createBookMark,
  createPost,
  deleteBookMark,
  deletePost,
  editBookMark,
  fetchUserPost,
} from 'api'
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
export const useEditBookMark = () => {
  return useMutation(editBookMark, {
    onSuccess: () => {
      queryClient.invalidateQueries('bookMarks')
    },
  })
}

export const useCreatePost = () => {
  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('userPost')
    },
  })
}

export const UseuserPost = (access) =>
  useInfiniteQuery(['userPost', access], fetchUserPost, {
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage)
      return lastPage.page + 1
      return false
    },
  })

export const useDeletePost = () => {
  return useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('userPost')
    },
  })
}

import {
    QueryCache,
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query'

import {
    addBookMarkPost,
    bookMarks,
    createBookMark,
    createPost,
    deleteBookMark,
    deleteBookMarkPost,
    deletePost,
    editBookMark,
    fetchSinglePostQ,
    fetchUserPost,
    getBookmark,
    updatePost,
} from 'api'
import { toggle } from 'store/fetchers/authSlice'
import { queryClient } from '../../pages/_app'
import { access } from 'fs'

export const useBookMarks = (access: any) => {
    return useQuery(['bookMarks', access], bookMarks, {
        refetchOnWindowFocus: false,
    })
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
export const useUpdatePost = () => {
    return useMutation(updatePost, {
        onSuccess: () => {
            queryClient.invalidateQueries('userPost')
            queryClient.invalidateQueries('SinglePost')
        },
    })
}

export const UseuserPost = (access) =>
    useInfiniteQuery(['userPost', access], fetchUserPost, {
        getNextPageParam: (lastPage, pages) => {
            console.log(lastPage)
            if (lastPage.nextPage - 1 < lastPage.total_pages) {
                return lastPage.nextPage
            }
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

export const useSinglePost = (id) => {
    return useQuery(['SinglePost', id], fetchSinglePostQ, {
        refetchOnWindowFocus: false,
    })
}
export const useAddBookMarkPost = () => {
    return useMutation(addBookMarkPost, {
        onSuccess: () => {},
    })
}
export const useremoveBookMarkPost = () => {
    return useMutation(deleteBookMarkPost, {
        onSuccess: () => {},
    })
}
export const useGetbookmark = (id, access) => {
    return useQuery(['getBooKbookMark', id, access], getBookmark, {
       
    })
}

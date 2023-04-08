import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
export const UrlImg = 'https://medium.pythonanywhere.com'
// -----------------------------------------------------------------------------------
interface Requests {
    ISendRequest: (
        url: string,
        method: string,
        data?: any,
        token?: string
    ) => Promise<any>
}

export const sendRequest: Requests['ISendRequest'] = async (
    url,
    method,
    data,
    token
): Promise<any> => {
    try {
        return await axios[method](url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    } catch (err) {
        return err
    }
}

// -----------------------------------------------------------------------------------

export const postRequest = async (
    endPoint: string,
    data: object
): Promise<any> => {
    return await axios.post(`${endPoint}`, data)
}

export const getRequest = async (
    endPoint: string,
    token: string
): Promise<any> => {
    return await axios.get(`${endPoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const putRequest = async (
    endPoint: string,
    data?: object,
    token?: string
): Promise<any> => {
    return await axios.put(`${endPoint}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

// export const getUserPost = async ({ queryKey }) => {
//   const { data } = await axios.get(`user-posts/${queryKey[1].username}/`, {
//     headers: {
//       Authorization: `Bearer ${queryKey[1].token}`,
//     },
//   }

// }

export const getUserPosts = async (endPoint: string, token: string) => {
    try {
        const { data } = await axios.get(endPoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return data
    } catch (err) {
        return err
    }
}

export const followReq = async (
    url: string,
    data: any,
    token: string
): Promise<any> => {
    return await axios.post(url, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const bookMarks = async ({ queryKey }) => {
    const { data } = await axios.get(`get-bookmark-list/`, {
        headers: {
            Authorization: `Bearer ${queryKey[1]}`,
        },
    })
    return data
}

export const editBookMark = async ({ id, value, access }) => {
    const { data } = await axios.put(`update-bookmark/${id}/`, value, {
        headers: {
            Authorization: `Bearer ${access}`,
        },
    })
    return data
}

export const createBookMark = async ({ values, access }) => {
    const { data } = await axios.post(`create-bookmark/`, values, {
        headers: {
            Authorization: `Bearer ${access}`,
        },
    })
    return data
}

export const deleteBookMark = async ({ id, access }) => {
    const { data } = await axios.delete(`delete-bookmark/${id}/`, {
        headers: {
            Authorization: `Bearer ${access}`,
        },
    })

    return data
}

export const fetchPosts = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(`home/?page=${pageParam}`)
    console.log(data)
    const url = new URL(data.next)
    const nextPage = +url.searchParams.get('page')
    const page = nextPage && !isNaN(nextPage) ? nextPage - 1 : undefined

    return { ...data, page }
}

export const createPost = async ({ value, access }) => {
    const { data } = await axios.post(`post/create/`, value, {
        headers: {
            Authorization: `Bearer ${access}`,
            'Content-Type': 'multipart/form-data; boundary=X-INSOMNIA-BOUNDARY',
        },
    })

    return data
}
export const updatePost = async ({ id, value, access }) => {
    const { data } = await axios.put(`post/update/${id}/`, value, {
        headers: {
            Authorization: `Bearer ${access}`,
            'Content-Type': 'multipart/form-data; boundary=X-INSOMNIA-BOUNDARY',
        },
    })

    return data
}

export const fetchUserPost = async ({ pageParam = 1, queryKey }) => {
    console.log(pageParam)
    const { data } = await axios.get(`user-posts/sina/?page=${pageParam}`, {
        headers: {
            Authorization: `Bearer ${queryKey[1]}`,
        },
    })
    let nextPage
    const url = data.next == null ? 0 : new URL(data.next)

    if (url != 0) {
        nextPage = +url.searchParams.get('page')
    } else {
        nextPage = data.total_pages + 1
    }

    return { ...data, nextPage }
}

export const deletePost = async ({ id, access }) => {
    const { data } = await axios.delete(`post/delete/${id}/`, {
        headers: {
            Authorization: `Bearer ${access}`,
        },
    })
    return data
}

export const fetchSinglePost = async (id) => {
    const { data } = await axios.get(`post/${id}/`)
    return data
}
export const fetchSinglePostQ = async ({ queryKey }) => {
    const { data } = await axios.get(`post/${queryKey[1]}/`)
    return data
}
export const addBookMarkPost = async ({ access, BookMarkId, PoostId }) => {
    const { data } = await axios.post(
        `/create-bookmarkuser/${BookMarkId}/${PoostId}/`,
        {},
        {
            headers: {
                Authorization: `Bearer ${access}`,
            },
        }
    )
    return data
}
export const getBookmark = async ({ queryKey }) => {
    const { data } = await axios.get(`get-bookmark/${queryKey[1]}/`, {
        headers: {
            Authorization: `Bearer ${queryKey[2]}`,
        },
    })

    return data
}
export const checkBookmark = async (bookMarkId, postId, access) => {
    const { data } = await axios.get(`${bookMarkId}/${postId}/`, {
        headers: {
            Authorization: `Bearer ${access}`,
        },
    })

    return data
}
export const deleteBookMarkPost = async ({ bookMarkId, postId, access }) => {
    const { data } = await axios.delete(
        `delete-bookmark-user/${bookMarkId}/${postId}/`,
        {
            headers: {
                Authorization: `Bearer ${access}`,
            },
        }
    )

    return data
}

import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const postRequest = (endPoint: string, data: object): Promise<any> => {
  return axios.post(`${endPoint}`, data)
}

const getRequest = (endPoint: string): Promise<any> => {
  return axios.get(`${endPoint}`)
}

const bookMarks = async ({ queryKey }) => {
  const { data } = await axios.get(`get-bookmark-list/`, {
    headers: {
      Authorization: `Bearer ${queryKey[1]}`,
    },
  })
  return data
}

const createBookMark = async ({ values, access }) => {
  const { data } = await axios.post(`create-bookmark/`, values, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })
  return data
}

const deleteBookMark = async ({ id, access }) => {
  const { data } = await axios.delete(`delete-bookmark/${id}/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })
  return data
}

const editBookMark = async ({ id, value, access }) => {
  const { data } = await axios.put(`update-bookmark/${id}/`, value, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })
  return data
}

const fetchPosts = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`home/?page=${pageParam}`)
  console.log(data)
  const url = new URL(data.next)
  const nextPage = +url.searchParams.get('page')
  const page = nextPage && !isNaN(nextPage) ? nextPage - 1 : undefined

  return { ...data, page }
}

const createPost = async ({ value, access }) => {
  const { data } = await axios.post(`post/create/`, value, {
    headers: {
      Authorization: `Bearer ${access}`,
      'Content-Type': 'multipart/form-data; boundary=X-INSOMNIA-BOUNDARY',
    },
  })

  return data
}
const fetchUserPost = async ({ pageParam = 1, queryKey }) => {
  console.log(pageParam)
  const { data } = await axios.get(`user-posts/sina/?page=${pageParam}`, {
    headers: {
      Authorization: `Bearer ${queryKey[1]}`,
    },
  })
  const url = new URL(data.next)
  const nextPage = +url.searchParams.get('page') || 0
  const page = nextPage && !isNaN(nextPage) ? nextPage - 1 : undefined

  return { ...data, page }
}

const deletePost = async ({ id, access }) => {
  const { data } = await axios.delete(`post/delete/${id}/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })
  return data
}

export {
  createPost,
  postRequest,
  getRequest,
  bookMarks,
  createBookMark,
  deleteBookMark,
  fetchPosts,
  editBookMark,
  fetchUserPost,
  deletePost,
}

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

export { postRequest, getRequest, bookMarks, createBookMark, deleteBookMark }

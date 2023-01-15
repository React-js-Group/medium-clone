import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

const postRequest = async (endPoint: string, data: object): Promise<any> => {
  return await axios.post(`${endPoint}`, data)
}

const getRequest = async (endPoint: string): Promise<any> => {
  return await axios.get(`${endPoint}`)
}

const putRequest = async (
  endPoint: string,
  data: object,
  token: string
): Promise<any> => {
  return await axios.put(`${endPoint}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
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

export {
  postRequest,
  getRequest,
  bookMarks,
  createBookMark,
  deleteBookMark,
  putRequest,
}

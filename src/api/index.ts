import Cookies from 'universal-cookie'
import axios from 'axios'

const cookies = new Cookies()
const AUTH_TOKEN = cookies.get('medium-clone-tokens')

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

const postRequest = async (endPoint: string, data: object): Promise<any> => {
  return await axios.post(`${endPoint}`, data)
}

const getRequest = async (endPoint: string): Promise<any> => {
  return await axios.get(`${endPoint}`)
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

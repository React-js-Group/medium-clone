import jwt from 'jsonwebtoken'

//! HERE WE CHECK WHETHER  ACCESS TOKEN IS VALID OR NO
export const CheckToken = (token: string) => {
  let isExpired = false
  const decoded = jwt.decode(token, { complete: true })
  const dateNow = new Date()
  if (decoded.exp < dateNow.getTime()) {
    isExpired = true
    localStorage.removeItem('accessToken')
  }

  return isExpired
}

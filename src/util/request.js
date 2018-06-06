import axios from 'axios'

const request = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  data: {token: 'test'}
})

export default request

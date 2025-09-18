import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || '/api'

const client = axios.create({ baseURL: API_BASE })

client.interceptors.request.use(cfg => {
  const token = localStorage.getItem('dola_token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

export default client

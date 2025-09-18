import React, { createContext, useState, useEffect } from 'react'
import { saveToken, removeToken, getToken } from '../utils/token'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getToken()
    if (token) setUser({ token })
    setLoading(false)
  }, [])

  const login = (token, role) => {
    saveToken(token)
    if (role) localStorage.setItem('dola_role', role)
    setUser({ token, role })
  }

  const logout = () => {
    removeToken()
    localStorage.removeItem('dola_role')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

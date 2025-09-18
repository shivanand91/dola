import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useContext(AuthContext)
  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />
  if (adminOnly) {
    const role = localStorage.getItem('dola_role')
    if (role !== 'admin') return <Navigate to="/" replace />
  }
  return children
}

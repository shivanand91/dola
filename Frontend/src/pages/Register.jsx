"use strict";
import React, { useState, useContext } from 'react'
import api from '../api'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [error, setError] = useState(null)
  const { login } = useContext(AuthContext)
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await api.post('/auth/register', { name, email, password, role })
      login(res.data.token, res.data.role)
      nav('/libraries')
    } catch (err) {
      setError(err.response?.data?.error || err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-3">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" className="w-full p-3 border rounded" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 border rounded" />
        <select value={role} onChange={e => setRole(e.target.value)} className="w-full p-3 border rounded">
          <option value="student">Student</option>
          <option value="admin">Library Admin</option>
        </select>
        <button className="w-full py-3 bg-teal-500 text-white rounded">Register</button>
      </form>
    </div>
  )
}

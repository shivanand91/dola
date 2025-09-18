import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export default function CreateLibrary() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [hourlyRate, setHourlyRate] = useState('')
  const [error, setError] = useState(null)
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await api.post('/libraries', { name, location, hourlyRate })
      nav('/libraries')
    } catch (err) {
      setError(err.response?.data?.error || err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-2xl font-bold mb-4">Add Library</h2>
      {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-3">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Library Name" className="w-full p-3 border rounded" />
        <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" className="w-full p-3 border rounded" />
        <input type="number" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} placeholder="Hourly Rate (₹)" className="w-full p-3 border rounded" />
        <button className="w-full py-3 bg-teal-500 text-white rounded">Save</button>
      </form>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api'

export default function LibraryDetails() {
  const { id } = useParams()
  const [lib, setLib] = useState(null)
  const [session, setSession] = useState(null)
  const nav = useNavigate()

  useEffect(() => {
    api.get(`/libraries/${id}`)
      .then(res => setLib(res.data))
      .catch(console.error)
  }, [id])

  const startSession = async () => {
    try {
      const res = await api.post('/sessions/start', { libraryId: id })
      setSession(res.data)
    } catch (err) {
      alert(err.response?.data?.error || err.message)
    }
  }

  const endSession = async () => {
    try {
      const res = await api.post('/sessions/end', { sessionId: session._id })
      alert(`Total paid: ₹${res.data.totalPrice}`)
      nav('/dashboard')
    } catch (err) {
      alert(err.response?.data?.error || err.message)
    }
  }

  if (!lib) return <div>Loading...</div>

  return (
    <div className="card max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">{lib.name}</h2>
      <p className="text-gray-600 mb-2">{lib.location}</p>
      <p className="text-gray-500 mb-4">₹{lib.hourlyRate} / hr</p>

      {!session ? (
        <button onClick={startSession} className="px-6 py-3 bg-teal-500 text-white rounded">Check In</button>
      ) : (
        <button onClick={endSession} className="px-6 py-3 bg-red-500 text-white rounded">Check Out</button>
      )}
    </div>
  )
}

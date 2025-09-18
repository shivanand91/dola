import React, { useEffect, useState } from 'react'
import api from '../api'

export default function Dashboard() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    api.get('/sessions')
      .then(res => setSessions(res.data))
      .catch(console.error)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Sessions</h2>
      <div className="space-y-4">
        {sessions.map(s => (
          <div key={s._id} className="card">
            <p className="font-semibold">{s.library?.name}</p>
            <p className="text-sm text-gray-600">Start: {new Date(s.startTime).toLocaleString()}</p>
            {s.endTime ? (
              <>
                <p className="text-sm text-gray-600">End: {new Date(s.endTime).toLocaleString()}</p>
                <p className="text-sm text-gray-800">Paid: ₹{s.totalPrice}</p>
              </>
            ) : (
              <p className="text-sm text-red-500">Active session</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

"use strict";
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const nav = useNavigate()

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 flex items-center justify-center text-white font-bold">D</div>
          <div>
            <h1 className="font-bold">DOLA</h1>
            <p className="text-xs text-gray-500">Digital Online Library Access</p>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/libraries" className="text-gray-700 hover:text-teal-600">Libraries</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-teal-600">Dashboard</Link>
              <button onClick={() => { logout(); nav('/') }} className="px-4 py-2 bg-teal-500 text-white rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">Login</Link>
              <Link to="/register" className="px-4 py-2 bg-accent text-white rounded" style={{ background: 'linear-gradient(90deg,#7c3aed,#0ea5a4)' }}>Get Started</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

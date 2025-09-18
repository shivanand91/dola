import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Libraries from './pages/Libraries'
import LibraryDetails from './pages/LibraryDetails'
import CreateLibrary from './pages/CreateLibrary'
import Dashboard from './pages/Dashboard'
import PaymentSetup from './pages/PaymentSetup'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/libraries/:id" element={<LibraryDetails />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/create-library" element={<ProtectedRoute adminOnly={true}><CreateLibrary /></ProtectedRoute>} />
          <Route path="/payments/setup" element={<ProtectedRoute><PaymentSetup /></ProtectedRoute>} />
        </Routes>
      </main>
    </div>
  )
}

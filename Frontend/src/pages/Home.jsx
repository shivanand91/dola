import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-4xl font-extrabold mb-4">Find & pay for study spaces by the hour</h2>
        <p className="text-gray-600 mb-6">DOLA helps students discover nearby libraries, check in, and pay automatically on checkout.</p>
        <div className="flex gap-4">
          <Link to="/libraries" className="px-6 py-3 bg-teal-500 text-white rounded-lg">Browse Libraries</Link>
          <Link to="/register" className="px-6 py-3 border border-gray-200 rounded-lg">Create account</Link>
        </div>
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold mb-3">Why students love DOLA</h3>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Pay-per-use hourly pricing</li>
          <li>Easy check-in / check-out flow</li>
          <li>Save your card securely with Stripe</li>
          <li>Find libraries near you</li>
        </ul>
      </div>
    </div>
  )
}

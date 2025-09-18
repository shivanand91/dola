import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import api from '../api'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await api.post('/payments/setup-intent')
      const clientSecret = res.data.clientSecret
      const result = await stripe.confirmCardSetup(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) }
      })
      if (result.error) {
        setError(result.error.message)
      } else {
        setSuccess('Payment method saved successfully!')
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto card space-y-4">
      <h2 className="text-2xl font-bold">Setup Payment</h2>
      <CardElement className="p-3 border rounded" />
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
      <button disabled={!stripe} className="w-full py-3 bg-teal-500 text-white rounded">Save Card</button>
    </form>
  )
}

export default function PaymentSetup() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}

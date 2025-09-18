# DOLA Backend (Node + Express + MongoDB + Stripe)

## Quick setup
1. Copy repo, run `npm install`.
2. Create `.env` from `.env.example` and fill values (Stripe test key).
3. Start MongoDB locally or use Atlas.
4. `npm run dev`

## Important flows
- Register student (role: student) and admin (role: admin).
- Student must create a SetupIntent via `/api/payments/setup-intent` (server returns clientSecret) and confirm card client-side using Stripe.js. Then call `/api/payments/attach` with `paymentMethodId`.
- Check-in: POST `/api/bookings/checkin` with `{ libraryId }` (auth: Bearer token). Creates booking with startTime = now and decrements availableSeats.
- Check-out: POST `/api/bookings/checkout` with `{ bookingId }` (auth). Sets endTime = now, computes amount per-minute, charges saved card off_session and updates booking.

## Testing payments
Use Stripe test cards. For SCA flows use `4000 0025 0000 3155` etc. See Stripe docs.

## Notes
- This is an MVP foundation. Add logging, rate-limiting, monitoring, and more robust error handling before production.

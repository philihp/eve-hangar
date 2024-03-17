'use client';

import { useState } from 'react'
import { reset } from './actions'


const ResetPage = () => {
  const [disabled, setDisabled] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const resetAndReturn = async (formData: FormData) => {
    await reset(formData)
    setEmailSent(true)
  }

  return (
    <form onSubmit={() => setEmailSent(true)}>
      <h1>Reset Password</h1>
      <p>Forgot your password? Let&apos;s confirm your email to reset it.</p>
      <label htmlFor="email">Email:</label><br />
      <input id="email" name="email" type="email" required /><br />
      <button formAction={(formData) => {
        setDisabled(true)
        resetAndReturn(formData)
      }} disabled={disabled}>Send Email</button>
      {emailSent &&
        <svg height="10" width="20">
          <circle cx="10" cy="5" r="5" fill="#00AF00" />
        </svg>
      }
    </form>
  )
}

export default ResetPage
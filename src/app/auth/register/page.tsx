'use client';

import { useState } from 'react'
import { register } from './actions'

const RegisterPage = () => {
  const [disabled, setDisabled] = useState(false)
  const [response, setResponse] = useState('')
  const signupAndReturn = async (formData: FormData) => {
    const { error } = await register(formData)
    setResponse(error?.message ?? 'A perfect time to check your email inbox.')
  }

  return (
    <form onSubmit={() => setDisabled(true)}>
      <h1>Register</h1>
      <p>Create an account to manage your hangars.</p>
      <label htmlFor="email">Email:</label><br />
      <input id="email" name="email" type="email" required /><br />
      <label htmlFor="password">Password:</label><br />
      <input id="password" name="password" type="password" required /><br />
      <button formAction={signupAndReturn} disabled={disabled}>Register</button>
      {
        response &&
        <>
          <svg height="10" width="20">
            <circle cx="10" cy="5" r="5" fill="#00AF00" />
          </svg>
          {response}
        </>
      }
    </form >
  )
}

export default RegisterPage
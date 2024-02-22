'use client';

import { useState } from 'react'
import { signup } from './actions'

export default function LoginPage() {
  const [response, setResponse] = useState('')
  const signupAndReturn = async (formData: FormData) => {
    const { error, data } = await signup(formData)
    setResponse(JSON.stringify({error, data}, undefined, 2))
  }

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={signupAndReturn}>Sign up</button>
      <pre>
        [{response}]
      </pre>
    </form>
  )
}
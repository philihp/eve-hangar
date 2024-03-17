'use client';

import { useState } from 'react'
import { login } from './actions'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  const [response, setResponse] = useState('')
  const loginAndReturn = async (formData: FormData) => {
    const error = await login(formData)
    if (error) {
      setResponse(error ?? '')
      return;
    }
    redirect('/')
  }

  return (
    <>
      <h1>Login</h1>
      <p>Login to access your hangar.</p>
      <form>
        <label htmlFor="email">Email:</label><br />
        <input id="email" name="email" type="email" required /><br />
        <label htmlFor="password">Password:</label><br />
        <input id="password" name="password" type="password" required /><br />
        <button formAction={loginAndReturn}>Log in</button>
        {response}
        <div>
          <a href="reset">Forgot Password</a>
        </div>
      </form>
    </>
  )
}
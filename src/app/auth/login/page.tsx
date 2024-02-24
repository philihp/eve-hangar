import { login } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label><br/>
      <input id="email" name="email" type="email" required /><br/>
      <label htmlFor="password">Password:</label><br/>
      <input id="password" name="password" type="password" required /><br/>
      <button formAction={login}>Log in</button>
    </form>
  )
}
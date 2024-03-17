'use client';

import { logoff } from './actions'

const LogoffPage = () => {
  return (
    <>
      <h1>Logoff</h1>
      <form>
        <button formAction={logoff}>Logoff</button>
      </form>
    </>
  )
}

export default LogoffPage
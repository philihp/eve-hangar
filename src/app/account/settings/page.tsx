import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import { logoff } from './actions'

const LogoffPage = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/account/login')
  }

  return (
    <>
      <h1>Settings</h1>
      <pre>
        {JSON.stringify(data?.user, undefined, 2)}
      </pre>
      <form>
        <button formAction={logoff}>Logoff</button>
      </form>
    </>
  )
}

export default LogoffPage
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import ChangePassword from './changePassword'
import { LogoffButton } from './logoffButton'

const SettingsPage = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/account/login')
  }

  return (
    <>
      <h1>Settings</h1>

      <ChangePassword />

      <h2>Logoff</h2>
      <LogoffButton />
      {/* <pre>{JSON.stringify(data?.user, undefined, 2)}</pre> */}
    </>
  )
}

export default SettingsPage
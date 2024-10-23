import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import { logoff } from './actions'

import ChangePassword from './changePassword'
import { revalidatePath } from 'next/cache'

const SettingsPage = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/account/login')
  }

  const logoffAndReturn = async (_formData: FormData) => {
    await logoff()
    revalidatePath('/account/settings')
  }

  return (
    <>
      <h1>Settings</h1>

      <ChangePassword />

      <h2>Logoff</h2>
      <form>
        <button formAction={logoffAndReturn}>Logoff</button>
      </form>
      {/* <pre>{JSON.stringify(data?.user, undefined, 2)}</pre> */}
    </>
  )
}

export default SettingsPage
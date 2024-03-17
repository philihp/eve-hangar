'use server'

import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export const reset = async (formData: FormData) => {
  const cookieStore = cookies()
  const headersList = headers()
  const supabase = createClient(cookieStore)

  const host = headersList.get('host')
  const { data, error } = await supabase.auth.resetPasswordForEmail(formData.get('email') as string,
    {
      redirectTo: `://${host}/account/settings`
    })

  return { data, error }
}

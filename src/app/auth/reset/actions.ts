'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export const reset = async (formData: FormData) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.resetPasswordForEmail(formData.get('email') as string)
  console.log({ data, error })
  return { data, error }
}

'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string
  })

  return { data, error}
}

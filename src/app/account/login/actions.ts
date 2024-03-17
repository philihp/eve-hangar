'use server'

import { cookies } from 'next/headers'

import { createClient } from '@/utils/supabase/server'

export const login = async (formData: FormData) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  return error?.message
}
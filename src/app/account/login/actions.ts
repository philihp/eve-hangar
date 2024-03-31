'use server'

import { cookies } from 'next/headers'

import { createClient } from '@/utils/supabase/server'

export const login = async (formData: FormData, captchaToken: string) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: { captchaToken },
  })

  return error?.message
}
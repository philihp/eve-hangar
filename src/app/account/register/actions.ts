'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export const register = async (formData: FormData, captchaToken: string) => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signUp({
    email: `${formData.get('email')}`,
    password: `${formData.get('password')}`,
    options: { captchaToken },
  })

  return { data, error }
}

'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export const logoff = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log({ error: JSON.stringify(error) })
    return error?.message
  }

  redirect('/')
}
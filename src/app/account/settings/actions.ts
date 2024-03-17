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

export const changePassword = async (formData: FormData) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const password = formData.get('newPassword') as string
  const confirm = formData.get('newConfirm') as string

  console.log('test')
  if (password !== confirm) {
    return 'Passwords do not match';
  }
  console.log('upd', password)

  const res = await supabase.auth.updateUser({ password })

  console.log(res)
  if (res.error) {
    return res.error?.message
  }
}
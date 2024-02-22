'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  console.log(`signing up ${JSON.stringify(formData)}`)

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { data, error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      emailRedirectTo: 'https://eve-hangar.philihp.com/login',
    }
  })

  // if (error) {
  //   console.log(error)
  //   redirect('/error')
  // }

  console.log('RET', {data, error})

  return data
}

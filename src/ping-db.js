import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabaseUsername = process.env.SUPABASE_USERNAME
const supabasePassword = process.env.SUPABASE_PASSWORD
const supabase = createClient(supabaseUrl, supabaseKey)

let user_id
{
  const { data, error } = await supabase.auth.signInWithPassword({
    email: supabaseUsername,
    password: supabasePassword,
  })
  user_id = data.user.id
  console.log({ data, error })
}
{
  const { data, error } = await supabase.from('character').insert({ owner: 'zxdf8=', name: 'Debby', user_id }).select()
  console.log({ data, error })
}

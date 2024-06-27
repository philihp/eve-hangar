import { authenticate, sudobase } from './supabase.js'

const execute = async () => {
  await authenticate()
  const res = await sudobase.from('character_tokens').select(`id, name`)
  console.log(res)
}

execute()

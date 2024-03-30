import { authenticate, sudobase } from './supabase.js'

const execute = async () => {
  await authenticate()
  const res = await sudobase.from('character_tokens').select(`id, name, token_id`)
  console.log(res)
}

execute()

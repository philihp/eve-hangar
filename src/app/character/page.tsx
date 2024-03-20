import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { register } from './actions'

const CharacterPage = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  const { data: characters, ...all } = await supabase.from('character').select()

  return <>
    <h1>Characters</h1>
    <ul>
      {characters?.map(c => <li key={`character-${c.id}`}>
        {
          JSON.stringify(c)
        }
      </li>)}
    </ul >
    <form>
      <button formAction={register}>Add Character</button>
    </form>
    <pre>{JSON.stringify(all, undefined, 2)}</pre>
  </>
}
export default CharacterPage
'use client'

import { revalidatePath } from 'next/cache'
import { logoff } from './actions'

export const LogoffButton = () => {
  const logoffAndReturn = async (_formData: FormData) => {
    await logoff()
    revalidatePath('/account/settings')
  }

  return (
    <form>
      <button formAction={logoffAndReturn}>Logoff</button>
    </form>
  )
}

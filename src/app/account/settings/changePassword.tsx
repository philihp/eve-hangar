'use client';

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { changePassword } from './actions'
import Dot from './dot'

const ChangePassword = () => {
  const [response, setResponse] = useState('')
  const [color, setColor] = useState('#000000')

  const changePasswordAndReturn = async (formData: FormData) => {
    const supabase = createClient()
    const { data } = await supabase.auth.getUser()
    const auth = await supabase.auth.signInWithPassword({
      email: data?.user?.email ?? '',
      password: formData.get('oldPassword') as string
    })

    if (auth.error) {
      setColor('#FF0000')
      setResponse(auth.error?.message)
      return
    }

    console.log('changing password')
    const error = await changePassword(formData)
    console.log(error)
    if (error) {
      setResponse(error)
      setColor('#FF0000')
      return
    }

    setColor('#00AF00')
    setResponse('Password changed')
  }

  return <>
    <h2>Change Password</h2>
    <form>
      <label htmlFor="password">Old Password:</label><br />
      <input id="oldPassword" name="oldPassword" type="password" required /><br />
      <label htmlFor="newPassword">New Password:</label><br />
      <input id="newPassword" name="newPassword" type="password" required /><br />
      <label htmlFor="newConfirm">Confirm Password:</label><br />
      <input id="newConfirm" name="newConfirm" type="password" required /><br />
      <button formAction={changePasswordAndReturn}>Change Password</button>
    </form>
    <p>
      {response &&
        <Dot color={color} response={response} />
      }
    </p>
  </>
}

export default ChangePassword
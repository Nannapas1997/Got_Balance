// server/api/login.js

import { readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  console.log('Received data:', email, password)

  // ตรวจสอบอีเมลและรหัสผ่าน
  if (email === 'user@example.com' && password === 'password123') {
    return { success: true }
  } else {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
})

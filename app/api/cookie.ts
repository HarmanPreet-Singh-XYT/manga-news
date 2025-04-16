'use server'

import { cookies } from 'next/headers'

export default async function getTheme(): Promise<'light' | 'dark'> {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value

  if (theme === 'dark' || theme === 'light') {
    return theme
  }

  // Set default theme to 'light'
  cookieStore.set('theme', 'light', {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return 'light'
}
export async function setTheme(theme: 'light' | 'dark') {
    const cookieStore = await cookies()
  cookieStore.set('theme', theme, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
}
import { useEffect, useState } from 'react'

export default function useTheme() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  const toggle = () => setDark((prev) => !prev)

  return { dark, toggle }
}

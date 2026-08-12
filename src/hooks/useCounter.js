import { useEffect, useRef, useState } from 'react'

export default function useCounter(target) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let cur = 0
            const step = Math.max(1, Math.floor(target / 60))
            const tick = () => {
              cur += step
              if (cur >= target) {
                setValue(target)
              } else {
                setValue(cur)
                requestAnimationFrame(tick)
              }
            }
            tick()
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return { ref, value }
}

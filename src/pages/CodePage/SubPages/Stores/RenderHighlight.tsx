import { useRef } from 'react'

const isDev = process.env.NODE_ENV === 'development'
const increment = isDev ? 0.5 : 1

export const useRenderCheck = () => {
  const countRef = useRef(0)
  countRef.current += increment
  const ref = useRef(true)
  ref.current = countRef.current % 1 === 0 ? !ref.current : ref.current
  return {
    style: {
      animation: `${ref.current ? 'render1' : 'render2'} 1s forwards`,
    },
  }
}

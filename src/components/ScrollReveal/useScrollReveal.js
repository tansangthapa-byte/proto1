import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const { root = null, rootMargin = '0px', threshold = 0.15 } = options

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed')
          observer.unobserve(element)
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [root, rootMargin, threshold])

  return ref
}

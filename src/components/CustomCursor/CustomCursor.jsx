import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const ringRefPos = useRef({ x: 0, y: 0 })
  const animationRef = useRef(0)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  const updateCursorPosition = (element, x, y) => {
    if (!element) {
      return
    }

    element.style.setProperty('--cursor-x', `${x}px`)
    element.style.setProperty('--cursor-y', `${y}px`)
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const canUseCursor = window.matchMedia('(pointer: fine)').matches
    setEnabled(canUseCursor)

    if (!canUseCursor) {
      return undefined
    }

    const initialX = window.innerWidth / 2
    const initialY = window.innerHeight / 2
    targetRef.current = { x: initialX, y: initialY }
    ringRefPos.current = { x: initialX, y: initialY }
    updateCursorPosition(dotRef.current, initialX, initialY)
    updateCursorPosition(ringRef.current, initialX, initialY)

    const animate = () => {
      const nextX = ringRefPos.current.x + (targetRef.current.x - ringRefPos.current.x) * 0.12
      const nextY = ringRefPos.current.y + (targetRef.current.y - ringRefPos.current.y) * 0.12

      ringRefPos.current = { x: nextX, y: nextY }
      updateCursorPosition(ringRef.current, nextX, nextY)

      animationRef.current = window.requestAnimationFrame(animate)
    }

    const handleMove = (event) => {
      const next = { x: event.clientX, y: event.clientY }
      targetRef.current = next
      updateCursorPosition(dotRef.current, next.x, next.y)
      setHovering(Boolean(event.target.closest('a, button, input, textarea, label')))
    }

    const handleDown = () => setPressed(true)
    const handleUp = () => setPressed(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    animationRef.current = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      window.cancelAnimationFrame(animationRef.current)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <>
      <span ref={dotRef} className={pressed ? 'cursor-dot is-pressed' : 'cursor-dot'}></span>
      <span
        ref={ringRef}
        className={hovering ? 'cursor-ring is-hovered' : 'cursor-ring'}
      ></span>
    </>
  )
}

export default CustomCursor

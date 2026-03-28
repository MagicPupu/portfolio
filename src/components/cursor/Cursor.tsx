"use client"

import { useEffect, useRef } from "react"

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const trail = trailRef.current
    if (!dot || !trail) return

    let mx = 0
    let my = 0
    let tx = 0
    let ty = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = `${mx}px`
      dot.style.top = `${my}px`
    }

    const tick = () => {
      tx += (mx - tx) * 0.12
      ty += (my - ty) * 0.12
      trail.style.left = `${tx}px`
      trail.style.top = `${ty}px`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
      <div ref={trailRef} aria-hidden="true" className="cursor-trail" />
    </>
  )
}

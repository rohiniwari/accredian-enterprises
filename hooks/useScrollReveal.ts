'use client'
import { useEffect, RefObject } from 'react'

export function useScrollReveal(ref: RefObject<HTMLElement>, options?: IntersectionObserverInit) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
    ref.current?.querySelectorAll('.section-fade').forEach((el: Element) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, ...options }
    )
    ref.current?.querySelectorAll('.section-fade').forEach((el: Element) => observer.observe(el))
    return () => observer.disconnect()
  }, [ref, options])
}

export function useScrollRevealOnce(ref: RefObject<HTMLElement>, callback?: () => void, threshold = 0.2) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      callback?.()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            callback?.()
            observer.unobserve(e.target)
          }
        })
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, callback, threshold])
}


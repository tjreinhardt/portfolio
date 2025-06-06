import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip if already triggered and triggerOnce is true
    if (triggerOnce && hasTriggered) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        setIsIntersecting(isElementIntersecting)
        
        if (isElementIntersecting && triggerOnce) {
          setHasTriggered(true)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isIntersecting: triggerOnce ? (hasTriggered || isIntersecting) : isIntersecting }
}

// Hook for animating elements with CSS classes
export const useScrollAnimation = (animationClass = 'animate') => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (isIntersecting) {
      element.classList.add(animationClass)
    }
  }, [isIntersecting, animationClass])

  return ref
} 
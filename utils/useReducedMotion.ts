import { useState, useEffect } from 'react'

export const useReducedMotion = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    // Check user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    // Check if mobile device for performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
    
    // Check if low-powered device (basic heuristic)
    const isLowPowered = Boolean(navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4)
    
    // Reduce motion if user prefers it, on mobile, or low-powered device
    const shouldReduce = mediaQuery.matches || isMobile || isLowPowered
    setShouldReduceMotion(shouldReduce)
    
    // Listen for changes in user preference
    const handler = (event: MediaQueryListEvent) => {
      setShouldReduceMotion(event.matches || isMobile || isLowPowered)
    }
    
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return shouldReduceMotion
}

// Performance-optimized viewport settings
export const getViewportConfig = (reducedMotion: boolean) => ({
  once: true,
  margin: reducedMotion ? '0px' : '-50px 0px',
  amount: reducedMotion ? 0.3 : 0.1
})

// Get appropriate animation variants based on motion preference
export const getAnimationVariants = (reducedMotion: boolean) => {
  if (reducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { 
        opacity: 1, 
        transition: { duration: 0.3, ease: 'easeOut' }
      }
    }
  }
  
  return {
    initial: { 
      opacity: 0, 
      transform: 'translateY(20px)' 
    },
    animate: { 
      opacity: 1, 
      transform: 'translateY(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }
} 
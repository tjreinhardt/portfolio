import { Variants } from 'framer-motion'

// Optimized animation variants that use transforms instead of layout properties
export const fadeInUp: Variants = {
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

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export const slideInLeft: Variants = {
  initial: { 
    opacity: 0, 
    transform: 'translateX(-30px)' 
  },
  animate: { 
    opacity: 1, 
    transform: 'translateX(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const slideInRight: Variants = {
  initial: { 
    opacity: 0, 
    transform: 'translateX(30px)' 
  },
  animate: { 
    opacity: 1, 
    transform: 'translateX(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const scaleIn: Variants = {
  initial: { 
    opacity: 0, 
    transform: 'scale(0.95)' 
  },
  animate: { 
    opacity: 1, 
    transform: 'scale(1)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Staggered animation for lists/grids
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1 for faster animations
      delayChildren: 0.1 // Reduced from 0.2
    }
  }
}

// Mobile-optimized stagger with even faster timing
export const mobileStaggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05
    }
  }
}

// Optimized viewport settings for better performance
export const optimizedViewport = {
  once: true,
  margin: '0px 0px -20px 0px', // Trigger animations when closer to viewport
  amount: 0.2 // Need 20% of element in view for more reliable triggering
}

// Mobile-optimized viewport settings
export const mobileViewport = {
  once: true,
  margin: '0px',
  amount: 0.3 // Higher threshold for mobile
}

// Reduced motion variants for accessibility and performance
export const reducedMotion: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

// Lightweight hover effects using transforms
export const hoverScale = {
  whileHover: { 
    transform: 'scale(1.02)',
    transition: { duration: 0.2 }
  }
}

export const hoverLift = {
  whileHover: { 
    transform: 'translateY(-2px)',
    transition: { duration: 0.2 }
  }
} 
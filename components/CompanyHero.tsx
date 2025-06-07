import React, { useState, useEffect, useMemo, useCallback, memo } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'

// Enhanced animation variants for consistent fluidity - Optimized for performance
const smoothTransition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94]
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0
    }
  }
}

const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3, // Further reduced duration for faster animations
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const fadeInScale = {
  initial: { 
    opacity: 0, 
    scale: 0.8
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: smoothTransition
  }
}

// Memoized highlight patterns - computed once, never changes
const HIGHLIGHT_PATTERNS = [
  // Left sections: Yellow/Gold with glow + scale (no underline)
  { pattern: /Hungry\s+for\s+\$9\.4T/gi, color: '#F7AB0A', glow: true, scale: true },
  { pattern: /Serving\s+AI/gi, color: '#F7AB0A', glow: true, scale: true },
  { pattern: /2000\+\s+Restaurants/gi, color: '#F7AB0A', glow: true, scale: true },
  { pattern: /Building\s+Tomorrow's/gi, color: '#F7AB0A', glow: true, scale: true },
  { pattern: /Secret\s+Sauce/gi, color: '#F7AB0A', glow: true, scale: true },
  
  // Right sections: Green with glow + underline (always underlined)
  { pattern: /Side\s+of\s+Insights/gi, color: '#10B981', glow: true, underline: true },
  { pattern: /Data/gi, color: '#10B981', glow: true, underline: true },
  { pattern: /Infinite\s+Intelligence/gi, color: '#10B981', glow: true, underline: true },
  { pattern: /Food\s+Empire/gi, color: '#10B981', glow: true, underline: true }
]

// Memoized typewriter words - prevents recreation
const TYPEWRITER_WORDS = [
  "Hungry for $9.4T in Data",
  "Serving AI with a Side of Insights", 
  "2000+ Restaurants, Infinite Intelligence",
  "Building Tomorrow's Food Empire",
  "The Secret Sauce is Data"
]

// Memoized stats data
const STATS_DATA = [
  { value: "$9.4T", label: "Food Industry TAM" },
  { value: "$1B+", label: "Target Valuation" },
  { value: "2000+", label: "POS Acquisitions" },
  { value: "300M+", label: "Future Customers" }
]

// Memoized benefits data  
const BENEFITS_DATA = [
  { text: "Source-Level Data Access", color: "text-green-400" },
  { text: "Strategic Acquisition Model", color: "text-purple-400" },
  { text: "Network Effects at Scale", color: "text-yellow-400" }
]

// Enhanced Typewriter with Dynamic Highlighting - Optimized with memoization
const TypewriterWithHighlights = memo(({ text }: { text: string }) => {
  const [shouldFadeColors, setShouldFadeColors] = useState(false)
  const [shouldStayInvisible, setShouldStayInvisible] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [prevTextLength, setPrevTextLength] = useState(0)
  const [maxTextLength, setMaxTextLength] = useState(0)

  // Enhanced deletion detection: track text length changes over time
  useEffect(() => {
    const currentLength = text.length
    
    // Track maximum text length reached (full text)
    if (currentLength > maxTextLength) {
      setMaxTextLength(currentLength)
    }
    
    // Detect deletion: current length is decreasing AND we've seen longer text before
    const nowDeleting = currentLength < prevTextLength && maxTextLength > 20
    
    // Detect new word starting: very short text after having longer text
    const newWordStarting = currentLength < 5 && maxTextLength > 20
    
    if (newWordStarting) {
      // Reset for new word
      setMaxTextLength(currentLength)
      setIsDeleting(false)
      setShouldFadeColors(false)
      setShouldStayInvisible(false)
    } else if (nowDeleting) {
      // We're deleting - keep colors invisible
      setIsDeleting(true)
      setShouldStayInvisible(true)
    } else if (!isDeleting && currentLength > 20) {
      // Full text displayed and not deleting - start color sequence
      if (!shouldFadeColors && !shouldStayInvisible) {
        // Start color fade after 2.5 seconds of full display
        const fadeTimer = setTimeout(() => {
          setShouldFadeColors(true)
        }, 2500)
        
        // Start invisible period after fade completes
        const invisibleTimer = setTimeout(() => {
          setShouldStayInvisible(true)
        }, 3700) // 2500 + 1200
        
        // Store timers for cleanup
        return () => {
          clearTimeout(fadeTimer)
          clearTimeout(invisibleTimer)
        }
      }
    }
    
    // Update previous length for next comparison
    setPrevTextLength(currentLength)
  }, [text, prevTextLength, maxTextLength, isDeleting, shouldFadeColors, shouldStayInvisible])
  
  // Memoize the text processing to avoid recalculation on every render
  const renderHighlightedText = useCallback((inputText: string) => {
    let parts = [{ text: inputText, highlight: null }]
    
    HIGHLIGHT_PATTERNS.forEach((pattern) => {
      const newParts: any[] = []
      parts.forEach((part) => {
        if (part.highlight) {
          newParts.push(part)
        } else {
          const matches = part.text.split(pattern.pattern)
          const matchResults = part.text.match(pattern.pattern) || []
          
          matches.forEach((match, index) => {
            if (match) {
              newParts.push({ text: match, highlight: null })
            }
            if (matchResults[index]) {
              newParts.push({ 
                text: matchResults[index], 
                highlight: pattern
              })
            }
          })
        }
      })
      parts = newParts
    })

    return parts.map((part, index) => {
      if (!part.highlight) {
        return <span key={index}>{part.text}</span>
      }

      const { color, glow, underline, scale } = part.highlight
      const isOrangeColor = color === '#F7AB0A'
      
      // Determine final color based on states
      let finalColor = '#ffffff' // Default white
      
      if (isDeleting) {
        // During deletion, all colors stay invisible
        finalColor = '#ffffff'
      } else if (shouldStayInvisible) {
        // During invisible period after fade, keep invisible
        finalColor = '#ffffff'
      } else if (shouldFadeColors) {
        // During fade period, transition to white
        finalColor = '#ffffff'
      } else {
        // Colors are active - show target color
        finalColor = color
      }
      
      return (
        <motion.span
          key={index}
          initial={{ 
            scale: 1,
            color: '#ffffff' // Start with white color
          }}
          animate={{ 
            scale: scale ? [1, 1.03, 1] : 1, // Subtle smooth scale like "Serving AI"
            color: finalColor
          }}
          transition={{ 
            ease: "easeOut",
            scale: { duration: 0.4, ease: "easeOut" },
            color: { duration: 1.2, ease: "easeOut" } // Consistent 1.2s for both fade in and fade out
          }}
          className="relative font-bold"
        >
          {part.text}
          {underline && (
            <>
              {/* Main underline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: 1, 
                  opacity: (shouldFadeColors || shouldStayInvisible || isDeleting) ? 0 : 1,
                  backgroundColor: (shouldFadeColors || shouldStayInvisible || isDeleting) ? '#ffffff' : color
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  ease: "easeOut",
                  opacity: { duration: 1.2, ease: "easeOut" },
                  backgroundColor: { duration: 1.2, ease: "easeOut" }
                }}
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
              />
              {/* Secondary subtle underline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: 1, 
                  opacity: (shouldFadeColors || shouldStayInvisible || isDeleting) ? 0 : 0.3,
                  backgroundColor: (shouldFadeColors || shouldStayInvisible || isDeleting) ? '#ffffff' : color
                }}
                transition={{ 
                  duration: 1.0, 
                  delay: 0.4,
                  ease: "easeOut",
                  opacity: { duration: 1.2, ease: "easeOut" },
                  backgroundColor: { duration: 1.2, ease: "easeOut" }
                }}
                className="absolute bottom-0 left-0 right-0 origin-left rounded-sm h-0.5"
              />
            </>
          )}

          {glow && (
            <motion.span
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ 
                boxShadow: `0 0 6px ${color}25`
              }}
            />
          )}
        </motion.span>
      )
    })
  }, [shouldFadeColors, shouldStayInvisible, isDeleting]) // Add dependencies array for useCallback

  return (
    <div className="relative">
      <span className="mr-3">
        {renderHighlightedText(text)}
      </span>
      <Cursor cursorColor='#F7AB0A' />
      
      {/* Extra visual flourishes for key messages */}
      
      {text.includes('Data Moat') && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] opacity-50"
        />
      )}
    </div>
  )
})

TypewriterWithHighlights.displayName = 'TypewriterWithHighlights'

type Props = {
  companyInfo: any
}

const CompanyHero = memo(({ companyInfo }: Props) => {
  const [animationPhase, setAnimationPhase] = useState(0)
  const controls = useAnimation()
  
  const [text, count] = useTypewriter({
    words: TYPEWRITER_WORDS,
    loop: true,
    delaySpeed: 5000, // 3s color display + 1.2s fade + 1.3s buffer = 5.5s total
    deleteSpeed: 25,
    typeSpeed: 80,
  })

  // Memoize static content to prevent recreation
  const mainText = useMemo(() => 
    "We're acquiring the infrastructure that powers food commerce—strategic POS systems across 2000+ locations—to build the world's most comprehensive food intelligence platform. Our AI transforms real-time transaction data into actionable insights, creating an unprecedented competitive advantage in the $9.4T global food industry."
  , [])
  
  // Use memoized static data
  const stats = useMemo(() => STATS_DATA, [])
  const benefits = useMemo(() => BENEFITS_DATA, [])

  // Smooth progressive animation system
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    // Phase 1: Background elements (after brand header)
    timers.push(setTimeout(() => setAnimationPhase(1), 1500))
    
    // Phase 2: Stats and CTAs (after main content) - Much faster
    timers.push(setTimeout(() => setAnimationPhase(2), 2500))

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className='min-h-screen relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[rgb(36,36,36)] to-[rgb(25,25,25)]'>
      
      {/* Enhanced Background Elements with Smooth Transitions */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Smooth background circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: animationPhase >= 1 ? 0.05 : 0, 
            scale: animationPhase >= 1 ? 1 : 0.5,
            rotate: [0, 360]
          }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut" },
            scale: { duration: 1.5, ease: "easeOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className='absolute top-1/4 left-1/4 w-80 h-80 border border-[#F7AB0A]/20 rounded-full'
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: animationPhase >= 1 ? 0.04 : 0, 
            scale: animationPhase >= 1 ? 1 : 0.8,
            rotate: [360, 0]
          }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut", delay: 0.3 },
            scale: { duration: 1.5, ease: "easeOut", delay: 0.3 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className='absolute bottom-1/4 right-1/4 w-64 h-64 border border-emerald-500/20 rounded-full'
        />
        
        {/* Staggered data points with smooth entrance */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: animationPhase >= 2 ? 0.6 : 0,
              scale: animationPhase >= 2 ? 1 : 0
            }}
            transition={{ 
              delay: 0.2 * i,
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { 
                duration: 3 + i * 0.5,
                repeat: Infinity,
                repeatDelay: i * 0.4,
                ease: "easeInOut"
              }
            }}
            className='absolute w-2 h-2 bg-[#F7AB0A] rounded-full'
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i % 2 === 0 ? 10 : -10)}%`
            }}
          />
        ))}
        
        {/* Smooth accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: animationPhase >= 1 ? 1 : 0,
            opacity: animationPhase >= 1 ? 0.3 : 0
          }}
          transition={{ duration: 2.0, ease: "easeOut", delay: 0.5 }}
          className='absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7AB0A] to-transparent'
        />
      </div>

      {/* Main Content with Smooth Flow */}
      <motion.div 
        className='relative z-20 max-w-6xl mx-auto px-6'
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        
        {/* Brand Header - Smooth Sequential Animation */}
        <motion.div
          variants={fadeInUp}
          className='text-center mb-10'
        >
          {/* BREME Header with Fluid Stagger */}
          <div className='text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider'>
            {'BREME'.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className='inline-block text-[#F7AB0A] drop-shadow-2xl'
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          {/* Logo with Smooth Entrance */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className='flex items-center justify-center gap-6 mb-6'
          >
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
              className='h-px w-16 bg-gradient-to-r from-transparent to-[#F7AB0A] origin-right'
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
              className='relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#F7AB0A]/20 to-green-500/20 p-2'
            >
              <Image 
                className='object-contain'
                src='/logos/icon.png'
                alt='Breme AI Logo'
                fill
                priority
              />
            </motion.div>
            
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
              className='h-px w-16 bg-gradient-to-l from-transparent to-[#F7AB0A] origin-left'
            />
          </motion.div>
          
          {/* Enhanced Dynamic Typewriter */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
            className='mb-10'
          >
            {/* Typewriter Container with Smooth Effects */}
            <motion.div 
              className='relative'
              style={{ 
                boxShadow: "0 0 20px rgba(247, 171, 10, 0.15)"
              }}
            >
              {/* Smooth Theme Color Background */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(45deg, rgba(247, 171, 10, 0.08), rgba(16, 185, 129, 0.06), rgba(107, 114, 128, 0.04))",
                  opacity: 0.5
                }}
              />
              
              {/* Main Typewriter Text */}
              <div className='relative z-10 text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight min-h-[140px] flex items-center justify-center px-8 py-6'>
                <TypewriterWithHighlights text={String(text)} />
              </div>
              
              {/* Smooth Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2"
                style={{ 
                  borderColor: "rgba(247, 171, 10, 0.4)",
                  boxShadow: "0 0 20px rgba(247, 171, 10, 0.15)"
                }}
              />
            </motion.div>
            
            {/* Subtitle with Smooth Transition */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              className='text-lg md:text-xl text-gray-100 uppercase tracking-[4px] font-medium mt-6'
              style={{
                background: 'linear-gradient(135deg, #F7AB0A 0%, #10B981 50%, #6B7280 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Food Intelligence Platform
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Main Value Proposition with Smooth Flow */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, delay: 2.2, ease: "easeOut" }}
          className='mb-10'
        >
          <motion.div 
            className='text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6 text-gray-200'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 2.5, ease: "easeOut" }}
          >
            {mainText}
          </motion.div>
          
          {/* Benefits with Smooth Stagger */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className='flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base'
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                transition={{ delay: 2.8 + index * 0.15 }}
                className={`flex items-center space-x-2 ${benefit.color}`}
              >
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 3.0 + index * 0.15,
                    ease: "easeOut"
                  }}
                  className={`w-2 h-2 rounded-full ${benefit.color.replace('text-', 'bg-')}`}
                />
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Grid with Smooth Reveals */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: animationPhase >= 2 ? 0 : 30, 
            opacity: animationPhase >= 2 ? 1 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className='mb-10'
        >
          <motion.div 
            className='grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-[#292929]/60 to-[#1f1f1f]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#F7AB0A]/20'
            variants={staggerContainer}
            initial="initial"
            animate={animationPhase >= 2 ? "animate" : "initial"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { scale: 0.8, opacity: 0, rotateY: 45 },
                  animate: { 
                    scale: 1, 
                    opacity: 1,
                    rotateY: 0,
                    transition: { 
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }
                  }
                }}
                className='text-center'
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: animationPhase >= 2 ? 1 : 1
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 3.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className='text-2xl md:text-3xl font-bold text-[#F7AB0A] mb-2'
                >
                  {stat.value}
                </motion.div>
                <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wider'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Buttons with Smooth Stagger */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: animationPhase >= 2 ? 0 : 30, 
            opacity: animationPhase >= 2 ? 1 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className='mb-10'
        >
          <motion.div 
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            variants={staggerContainer}
            initial="initial"
            animate={animationPhase >= 2 ? "animate" : "initial"}
          >
            {[
              { href: "#business", label: "Investment Opportunity", primary: true },
              { href: "#ai-services", label: "Our Technology", primary: false },
              { href: "#contact", label: "Partner With Us", primary: false }
            ].map((button, index) => (
              <Link key={index} href={button.href}>
                <motion.button
                  variants={{
                    initial: { scale: 0.8, opacity: 0, y: 20 },
                    animate: { 
                      scale: 1, 
                      opacity: 1,
                      y: 0,
                      transition: { 
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 border-2 min-w-[200px] ${
                    button.primary 
                      ? 'bg-[#F7AB0A] text-black border-[#F7AB0A] hover:bg-[#F7AB0A]/90 hover:shadow-lg hover:shadow-[#F7AB0A]/30' 
                      : 'bg-transparent text-[#F7AB0A] border-[#F7AB0A] hover:bg-[#F7AB0A]/10 hover:shadow-lg'
                  }`}
                >
                  {button.label}
                </motion.button>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Smooth Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: animationPhase >= 2 ? 1 : 0,
            y: animationPhase >= 2 ? 0 : 20
          }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className='mt-16 mb-8'
        >
          <Link href="#about">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className='flex flex-col items-center cursor-pointer text-gray-400 hover:text-[#F7AB0A] transition-colors group'
            >
              <span className='text-xs uppercase tracking-wider mb-3 group-hover:text-[#F7AB0A] transition-colors duration-300'>
                Explore More
              </span>
              <div className='w-6 h-10 border-2 border-gray-400 group-hover:border-[#F7AB0A] rounded-full flex justify-center transition-colors duration-300'>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className='w-1 h-2 bg-gray-400 group-hover:bg-[#F7AB0A] rounded-full mt-2 transition-colors duration-300'
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(36,36,36)] to-transparent pointer-events-none' />
    </div>
  )
})

TypewriterWithHighlights.displayName = 'TypewriterWithHighlights'
CompanyHero.displayName = 'CompanyHero'

export default CompanyHero
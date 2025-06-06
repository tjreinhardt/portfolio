import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  companyInfo: any
}

function CompanyHero({ companyInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Central Nervous System of Food Industry",
      "Strategic POS Acquisition + AI Intelligence", 
      "Transforming $9.4T Food Market",
      "Building the Future of Food Data"
    ],
    loop: true,
    delaySpeed: 3000,
    deleteSpeed: 50,
  })

  const stats = [
    { value: "$9.4T", label: "Food Industry TAM" },
    { value: "$1B+", label: "Target Valuation" },
    { value: "2000+", label: "POS Acquisitions" },
    { value: "300M+", label: "Future Customers" }
  ];

  const ctaButtons = [
    { href: "#business", label: "Investment Opportunity", primary: true },
    { href: "#ai-services", label: "Our Technology", primary: false },
    { href: "#contact", label: "Partner With Us", primary: false }
  ];

  return (
    <div className='min-h-[80vh] md:min-h-screen relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[rgb(36,36,36)] to-[rgb(25,25,25)]'>
      
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05], 
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute top-1/4 left-1/4 w-96 h-96 border border-[#F7AB0A]/20 rounded-full'
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ 
            opacity: [0.03, 0.08, 0.03], 
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute bottom-1/4 right-1/4 w-80 h-80 border border-green-500/20 rounded-full'
        />
        
        {/* Floating Data Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className='absolute w-2 h-2 bg-[#F7AB0A] rounded-full'
          />
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-20 max-w-6xl mx-auto px-6'>
        
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='mb-8'
        >
          <div className='relative w-24 h-24 mx-auto mb-6'>
            <Image 
              className='object-contain'
              src='/logos/breme-logo-concept-1.svg'
              alt='Breme AI Logo'
              fill
              priority
            />
          </div>
        </motion.div>

        {/* Company Name & Tagline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='mb-8'
        >
          <h2 className='text-sm md:text-base uppercase text-[#F7AB0A] pb-4 tracking-[8px] md:tracking-[15px] font-medium'>
            BREME AI
          </h2>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='mb-12'
        >
          <p className='text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
            We&apos;re building the world&apos;s most comprehensive food intelligence platform through strategic 
            POS acquisitions and AI-powered data analytics. Join us in revolutionizing how the $9.4T food industry operates.
          </p>
          
          {/* Key Benefits */}
          <div className='flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base'>
            <div className='flex items-center space-x-2 text-green-400'>
              <span className='w-2 h-2 bg-green-400 rounded-full'></span>
              <span>Source-Level Data Access</span>
            </div>
            <div className='flex items-center space-x-2 text-blue-400'>
              <span className='w-2 h-2 bg-blue-400 rounded-full'></span>
              <span>Strategic Acquisition Model</span>
            </div>
            <div className='flex items-center space-x-2 text-purple-400'>
              <span className='w-2 h-2 bg-purple-400 rounded-full'></span>
              <span>Network Effects at Scale</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='mb-12'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-gradient-to-r from-[#292929]/60 to-[#1f1f1f]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#F7AB0A]/20'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className='text-center'
              >
                <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#F7AB0A] mb-2'>
                  {stat.value}
                </div>
                <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wider'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className='mb-12'
        >
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            {ctaButtons.map((button, index) => (
              <Link key={index} href={button.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
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
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='mt-16 mb-8'
        >
          <Link href="#about">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='flex flex-col items-center cursor-pointer text-gray-400 hover:text-[#F7AB0A] transition-colors group'
            >
              <span className='text-xs uppercase tracking-wider mb-3 group-hover:text-[#F7AB0A] transition-colors'>Scroll to explore</span>
              <div className='w-6 h-10 border-2 border-gray-400 group-hover:border-[#F7AB0A] rounded-full flex justify-center transition-colors'>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className='w-1 h-2 bg-gray-400 group-hover:bg-[#F7AB0A] rounded-full mt-2 transition-colors'
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(36,36,36)] to-transparent pointer-events-none' />
    </div>
  )
}

export default CompanyHero 
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  companyInfo: any
}

function CompanyAbout({ companyInfo }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-[80vh] md:min-h-screen relative bg-[rgb(36,36,36)] py-20'
    >
      {/* Background Effects */}
      <div className='w-full absolute top-[20%] bg-[#F7AB0A]/5 left-0 h-[500px] skew-y-12' />
      
      <h3 className='absolute top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center'>
        About
      </h3>

      <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16 mt-20'>
        
        {/* Logo Section - Enhanced */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className='flex-shrink-0 relative'
        >
          {/* Logo Container with Glow Effect */}
          <div className='relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex items-center justify-center'>
            {/* Animated Background Circle */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className='absolute inset-0 rounded-full border border-[#F7AB0A]/20 bg-gradient-to-r from-[#F7AB0A]/5 to-green-500/5'
            />
            
            {/* Logo with Enhanced Styling */}
            <div className='relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#1a1a1a] rounded-2xl p-8 border border-[#F7AB0A]/30 shadow-2xl shadow-[#F7AB0A]/10'>
              <Image 
                src='/logos/icon.png'
                alt='Breme AI Logo'
                width={400}
                height={400}
                className='w-full h-full object-contain drop-shadow-lg'
              />
            </div>
            
            {/* Decorative Data Points */}
            <div className='absolute -top-4 -right-4 w-8 h-8 bg-[#F7AB0A] rounded-full animate-pulse' />
            <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-1000' />
            <div className='absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-500' />
          </div>
        </motion.div>

        {/* Content Section - Enhanced */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className='flex-1 space-y-8 text-center lg:text-left max-w-2xl'
        >
          {/* Main Heading */}
          <div>
            <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight'>
              <span className='text-[#F7AB0A]'>{companyInfo?.name}</span>
              <br />
              <span className='text-white'>Transforming Food Industry Intelligence</span>
            </h4>
            <p className='text-lg md:text-xl text-gray-200 leading-relaxed font-light'>{companyInfo?.aboutCompany}</p>
          </div>
          
          {/* Mission & Vision - Side by Side Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className='bg-gradient-to-br from-[#292929] to-[#1f1f1f] rounded-xl p-6 border border-[#F7AB0A]/20 hover:border-[#F7AB0A]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#F7AB0A]/5'
            >
              <div className='text-3xl mb-3'>🎯</div>
              <h5 className='text-xl font-semibold text-[#F7AB0A] mb-3'>Our Mission</h5>
              <p className='text-sm text-gray-200 leading-relaxed'>{companyInfo?.mission}</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className='bg-gradient-to-br from-[#292929] to-[#1f1f1f] rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5'
            >
              <div className='text-3xl mb-3'>🚀</div>
              <h5 className='text-xl font-semibold text-green-400 mb-3'>Our Vision</h5>
              <p className='text-sm text-gray-200 leading-relaxed'>{companyInfo?.vision}</p>
            </motion.div>
          </div>
          
          {/* Core Values - Enhanced Grid */}
          {companyInfo?.values && companyInfo.values.length > 0 && (
            <div>
              <h5 className='text-2xl font-semibold text-white mb-6 flex items-center justify-center lg:justify-start'>
                <span className='text-2xl mr-3'>💎</span>
                Core Values
              </h5>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className='grid grid-cols-2 lg:grid-cols-3 gap-3'
              >
                {companyInfo.values.map((value: string, index: number) => (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { 
                        scale: 0.8,
                        opacity: 0,
                        y: 20
                      },
                      visible: { 
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className='bg-[#292929] hover:bg-[#333333] rounded-lg p-3 text-center border border-gray-600 hover:border-[#F7AB0A]/30 transition-colors duration-300 hover:shadow-md'
                  >
                    <span className='text-sm font-medium text-gray-200'>{value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
          
          {/* Company Details - Enhanced */}
          <div className='bg-gradient-to-r from-[#F7AB0A]/10 to-green-500/10 rounded-xl p-6 border border-[#F7AB0A]/20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left'>
              <div className='flex flex-col md:flex-row md:items-center'>
                <span className='text-2xl mr-2 mb-1 md:mb-0'>📅</span>
                <div>
                  <div className='text-xs uppercase tracking-wider text-gray-400'>Founded</div>
                  <div className='font-semibold text-[#F7AB0A]'>{companyInfo?.founded}</div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row md:items-center'>
                <span className='text-2xl mr-2 mb-1 md:mb-0'>🌱</span>
                <div>
                  <div className='text-xs uppercase tracking-wider text-gray-400'>Stage</div>
                  <div className='font-semibold text-green-400'>{companyInfo?.stage}</div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row md:items-center'>
                <span className='text-2xl mr-2 mb-1 md:mb-0'>📍</span>
                <div>
                  <div className='text-xs uppercase tracking-wider text-gray-400'>Headquarters</div>
                  <div className='font-semibold text-white'>{companyInfo?.headquarters}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CompanyAbout 
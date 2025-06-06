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
      className='min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center py-20'
    >
      <h3 className='absolute top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center'>
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0 }}
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      >
        <Image 
          src='/logos/breme-logo-concept-1.svg'
          alt='Breme AI Logo'
          width={500}
          height={600}
          className='rounded-lg object-contain bg-black/20 p-8'
        />
      </motion.div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          <span className='text-[#F7AB0A]/90'>{companyInfo?.name}</span> - Transforming Food Industry Intelligence
        </h4>
        
        <div className='space-y-5 text-base'>
          <p>{companyInfo?.aboutCompany}</p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h5 className='text-xl font-semibold text-[#F7AB0A] mb-3'>Our Mission</h5>
              <p className='text-sm text-gray-300'>{companyInfo?.mission}</p>
            </div>
            
            <div>
              <h5 className='text-xl font-semibold text-[#F7AB0A] mb-3'>Our Vision</h5>
              <p className='text-sm text-gray-300'>{companyInfo?.vision}</p>
            </div>
          </div>
          
          {companyInfo?.values && companyInfo.values.length > 0 && (
            <div>
              <h5 className='text-xl font-semibold text-[#F7AB0A] mb-3'>Core Values</h5>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                {companyInfo.values.map((value: string, index: number) => (
                  <div key={index} className='bg-[#292929] rounded-lg p-3 text-center'>
                    <span className='text-sm text-gray-300'>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className='flex flex-col md:flex-row gap-4 text-sm text-gray-400'>
            <div>
              <span className='font-semibold text-[#F7AB0A]'>Founded:</span> {companyInfo?.founded}
            </div>
            <div>
              <span className='font-semibold text-[#F7AB0A]'>Stage:</span> {companyInfo?.stage}
            </div>
            <div>
              <span className='font-semibold text-[#F7AB0A]'>Headquarters:</span> {companyInfo?.headquarters}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CompanyAbout 
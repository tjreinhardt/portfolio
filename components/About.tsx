import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from "../typings"

// Optimized animation variant - computed once
const fadeInVariant = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

type Props = {
  pageInfo: PageInfo
}

const About = memo(({ pageInfo }: Props) => {
  // Memoize processed data
  const memoizedData = useMemo(() => ({
    backgroundInformation: pageInfo?.backgroundInformation || ''
  }), [pageInfo?.backgroundInformation])
  return (
          <motion.div
        variants={fadeInVariant}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className='flex flex-col relative min-h-0 py-12 md:py-20 text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 mx-auto items-center justify-center'>
        <h3 className='absolute top-6 md:top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-base md:text-2xl text-center'>
          About
        </h3>

        <div className='space-y-5 md:space-y-5 px-0 md:px-10 mt-16 md:mt-24'>
          <h4 className='text-xl md:text-2xl lg:text-4xl font-semibold mt-6'>Here is a{" "}
            <span className='underline decoration-[#F7AB0A]'>little</span> background
          </h4>
          <p className=' text-xs md:text-lg pb-14'>
            {memoizedData.backgroundInformation}
          </p>
        </div>

      </motion.div>
    )
  })

  About.displayName = 'About'

  export default About

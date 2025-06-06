import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from "../typings"

type Props = {
  pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}

      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 mx-auto items-center justify-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] ml-4 text-gray-500 text-xl md:text-2xl'>
        About
      </h3>

      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className='-mb-24 md:mb-0 flex-shrink-0 w-40 h-40 mt-[110px] rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      /> */}

      <div className='space-y-5 md:space-y-5 px-0 md:px-10 mt-24'>
        <h4 className='text-xl md:text-2xl lg:text-4xl font-semibold mt-6'>Here is a{" "}
          <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <p className=' text-xs md:text-lg pb-14'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>

    </motion.div>
  )
}

export default About

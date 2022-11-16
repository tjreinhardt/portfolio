import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}

      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='http://partyhopper.s3.amazonaws.com/7e8ecf3c5c5045e7800056ca55f43cad.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a{" "}
          <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <p className='text-sm'>
          I'm Tim. I've been deep-diving into software engineering for the past year. Previously, I was an audio engineer, working in recording studios and live-media productions across the United States. Being a self-taught musician as well, I've always had a passion for creation. Recently I graduated from AppAcademy, and have been creating applications that challenge me as a developer and am constantly implementing the latest technologies. Outside of programming I'm either adventuring with my brother & dog, gaming with my friends, or even helping my friends optimise their own business applications with my newly acquired skills.
        </p>
      </div>

    </motion.div>
  )
}

export default About

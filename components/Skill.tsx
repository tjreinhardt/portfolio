import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
}

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 lg:h-20 lg:w-20
        xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
       ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 lg:h-20 lg:w-20 xl:w-24 xl:h-24 rounded-full z-0'>
        <div className='flex items-center flex-col justify-center h-full text-center'>
          <p className='text-sm md:text-sm font-bold text-black opacity-100'>{skill.progress}%</p>
          <p className='text-xxs md:text-xs lg:text-md font-bold text-black opacity-100 px-2'>{skill.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Skill

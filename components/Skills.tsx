import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
import { Skill as SkillType } from "../typings"

type Props = {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // viewport={{ once: true }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>Skills</h3>
      <h3
        className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-xs'>
        Hover or Tap for proficiency
      </h3>
      <div className='flex'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-20 pr-4'>
          {skills?.slice(0, skills.length / 2).map(skill => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-20'>
          {skills?.slice(skills.length / 2, skills.length).map(skill => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>

      </div>


    </motion.div>
  )
}

export default Skills

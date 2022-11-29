import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity';
import { fetchExperiences } from '../utils/fetchExperiences';

type Props = {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full max-h-[65vh] mt-10 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 min-h-32 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl font-light text-center md:text-start'>{experience.jobTitle}</h4>

        <p className='font-bold text-lg mt-1 text-center md:text-start'> {experience.company} </p>
        <div className='flex space-x-2 my-4 flex-wrap'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full my-1"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>

        <p className='uppercase py-3 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere ?
            "Present"
            : new Date(experience.dateEnded).toDateString()}

        </p>

        <ul className='list-disc space-y-4 ml-5 text-md max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pb-10'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

      </div>
    </article>
  )
}

export default ExperienceCard

import React from 'react'
import { motion } from 'framer-motion'
import { Project } from "../typings"
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Projects
      </h3>
      <div className='mt-8 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mb-10'>
        {projects.map((project, i) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-6 md:p-44 h-screen'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=''
              className='h-50 max-h-[170px] w-auto'
            />

            <div className='space-y-4 md:space-y-6 lg:space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-lg md:text-3xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span>{" "}
                {project?.title}
              </h4>

              <div className='flex items-center md:space-x-2 justify-center'>
                {project?.technologies.map(technology => (
                  <img className="h-10 w-10 rounded-full object-cover" key={technology._id} src={urlFor(technology.image).url()} alt="" />
                ))}
              </div>

              <p className='text-xs md:text-md lg:text-lg text-center md:text-left'>{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects;

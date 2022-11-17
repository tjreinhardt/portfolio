import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import timpic from '../assets/tim-pic.png'
import Link from 'next/link'
import { PageInfo } from "../typings"


type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's ${pageInfo?.name}`,
      "Guy-who-loves-RedBull.tsx",
      "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="http://partyhopper.s3.amazonaws.com/2e561f860c024c7c99717bf054efaf76.png"
        alt=""
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7AB0A' />
        </h1>
        <div>
          <Link href="#about">
            <button className='px-6 py-2 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>About</button>
          </Link>
          <Link href="#experience">
            <button className='px-6 py-2 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='px-6 py-2 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='px-6 py-2 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Projects</button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Hero

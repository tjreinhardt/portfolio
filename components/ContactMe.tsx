import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
}

type Props = {}

function ContactMe({ }: Props) {
  const {
    register,
    handleSubmit } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:timreinhardtmusic@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) {formData.message}`
  };


  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>Contact</h3>


      <div className='flex flex-col space-y-6 md:space-y-10 mt-20 justify-center flex-wrap'>
        <h4 className='text-lg md:text-4xl font-semibold text-center md:mr-0'>
          I have what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-4 md:space-y-10'>
          <div className='text-sm md:text-md flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p>+17028029289</p>
          </div>

          <div className='text-sm md:text-md flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p>timreinhardtmusic@gmail.com</p>
          </div>

          <div className='text-sm md:text-md flex items-center space-x-3 md:space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p>1100 Solitude Trail #1100, Reno NV 89523</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-auto max-w-fit mx-auto'>
          <div className='flex space-x-2 '>
            <input
              {...register('name')}
              placeholder="Name"
              type="text"
              className="outline-none max-w-[145px] md:max-w-fit h-[40px] md:h-auto bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" />
            <input
              {...register('email')}
              placeholder="Email"
              type="email"
              className="outline-none max-w-[145px] md:max-w-fit h-[40px] md:h-auto bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            type="text"
            className="outline-none bg-slate-400/10 rounded-sm h-[40px] md:h-auto border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" />

          <textarea
            {...register('message')}
            placeholder="Message" className="outline-none bg-slate-400/10 h-[70px] md:h-auto rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" />
          <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe

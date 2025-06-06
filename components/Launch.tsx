import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { LaunchInfo } from '../typings'

type Props = {
  launchInfo: LaunchInfo
}

function Launch({ launchInfo }: Props) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'text-yellow-500 border-yellow-500';
      case 'Planned':
        return 'text-blue-500 border-blue-500';
      case 'Future':
        return 'text-gray-500 border-gray-500';
      default:
        return 'text-gray-500 border-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Progress':
        return '🚀';
      case 'Planned':
        return '📋';
      case 'Future':
        return '⭐';
      default:
        return '📅';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-[80vh] md:min-h-screen relative flex overflow-hidden flex-col text-left max-w-full px-10 justify-center mx-auto items-center py-20'
    >
      <h3 className='absolute top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl text-center'>
        Timeline
      </h3>

      <div className='w-full absolute top-[20%] bg-[#F7AB0A]/5 left-0 h-[500px] skew-y-12' />

      <div className='mt-20 z-20 max-w-7xl mx-auto w-full'>
        
        {/* Current Stage Hero */}
        <motion.div 
          initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <div className='inline-block bg-gradient-to-r from-[#F7AB0A] to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4'>
            CURRENT STAGE
          </div>
          <h4 className='text-4xl font-bold text-[#F7AB0A] mb-4'>
            {launchInfo.currentStage}
          </h4>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            {launchInfo.stageDescription}
          </p>
        </motion.div>

        {/* Funding Requirements */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='mb-16'
        >
          <h4 className='text-3xl font-bold text-white mb-8 text-center'>
            Funding Requirements
          </h4>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-gradient-to-br from-[#F7AB0A]/20 to-yellow-600/20 rounded-lg p-6 border border-[#F7AB0A]/30'>
              <div className='text-center mb-6'>
                <div className='text-2xl font-bold text-[#F7AB0A] mb-2'>
                  {launchInfo.fundingNeeds.preSeed.amount}
                </div>
                <div className='text-sm text-gray-400 mb-2'>Pre-Seed Funding</div>
                <div className='text-lg text-white font-semibold'>
                  {launchInfo.fundingNeeds.preSeed.timeline}
                </div>
              </div>
              
              <div className='mb-4'>
                <h5 className='text-lg font-semibold text-white mb-3'>Purpose:</h5>
                <p className='text-gray-300 text-sm mb-4'>
                  {launchInfo.fundingNeeds.preSeed.purpose}
                </p>
              </div>
              
              <div>
                <h5 className='text-lg font-semibold text-white mb-3'>Key Uses:</h5>
                <ul className='space-y-2'>
                  {launchInfo.fundingNeeds.preSeed.keyUses.map((use, index) => (
                    <li key={index} className='flex items-center text-gray-300 text-sm'>
                      <span className='w-2 h-2 bg-[#F7AB0A] rounded-full mr-3 flex-shrink-0' />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg p-6 border border-blue-500/30'>
              <div className='text-center mb-6'>
                <div className='text-2xl font-bold text-blue-400 mb-2'>
                  {launchInfo.fundingNeeds.seedRound.amount}
                </div>
                <div className='text-sm text-gray-400 mb-2'>Seed Round</div>
                <div className='text-lg text-white font-semibold'>
                  {launchInfo.fundingNeeds.seedRound.timeline}
                </div>
              </div>
              
              <div className='mb-4'>
                <h5 className='text-lg font-semibold text-white mb-3'>Purpose:</h5>
                <p className='text-gray-300 text-sm mb-4'>
                  {launchInfo.fundingNeeds.seedRound.purpose}
                </p>
              </div>
              
              <div>
                <h5 className='text-lg font-semibold text-white mb-3'>Key Uses:</h5>
                <ul className='space-y-2'>
                  {launchInfo.fundingNeeds.seedRound.keyUses.map((use, index) => (
                    <li key={index} className='flex items-center text-gray-300 text-sm'>
                      <span className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0' />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='mb-16'
        >
          <h4 className='text-3xl font-bold text-white mb-8 text-center'>
            Development Timeline
          </h4>
          
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F7AB0A] to-gray-500'></div>
            
            <div className='space-y-8'>
              {launchInfo.timeline.map((phase, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className='relative flex items-start'
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-[rgb(36,36,36)] ${getStatusColor(phase.status)} mr-6`}>
                    <span className='text-xl'>{getStatusIcon(phase.status)}</span>
                  </div>
                  
                  {/* Content */}
                  <div className='flex-1 bg-[#292929] rounded-lg p-6 hover:bg-[#333333] transition-colors'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                      <h5 className='text-xl font-semibold text-white mb-2 md:mb-0'>
                        {phase.phase}
                      </h5>
                      <div className='flex items-center space-x-4'>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(phase.status)}`}>
                          {phase.status}
                        </span>
                        <span className='text-sm text-gray-400'>{phase.duration}</span>
                      </div>
                    </div>
                    
                    <p className='text-gray-300 mb-4'>{phase.description}</p>
                    
                    <div>
                      <h6 className='text-sm font-semibold text-[#F7AB0A] mb-2'>Key Milestones:</h6>
                      <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {phase.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex} className='flex items-center text-gray-300 text-sm'>
                            <span className='w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0' />
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Risk Assessment */}
        <motion.div 
          initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          <div className='bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg p-6 border border-red-500/30'>
            <h4 className='text-2xl font-bold text-red-400 mb-6 text-center'>
              Key Risks
            </h4>
            <ul className='space-y-3'>
              {launchInfo.risks.map((risk, index) => (
                <li key={index} className='flex items-start text-gray-300 text-sm'>
                  <span className='w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0' />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
          
          <div className='bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg p-6 border border-green-500/30'>
            <h4 className='text-2xl font-bold text-green-400 mb-6 text-center'>
              Mitigation Strategies
            </h4>
            <ul className='space-y-3'>
              {launchInfo.mitigationStrategies.map((strategy, index) => (
                <li key={index} className='flex items-start text-gray-300 text-sm'>
                  <span className='w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0' />
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Launch 
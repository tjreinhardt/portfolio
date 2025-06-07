import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, staggerContainer, optimizedViewport } from '../utils/animations'

function DataRevolution() {
  const dataFeatures = [
    {
      title: "Custom POS Integration",
      description: "Proprietary point-of-sale system that captures granular product data at the source",
      icon: "🏪",
      benefits: [
        "Real-time inventory tracking",
        "Product lifecycle monitoring",
        "Supply chain transparency",
        "Instant data validation"
      ]
    },
    {
      title: "AI Pattern Recognition",
      description: "Advanced machine learning algorithms find hidden correlations in food industry data",
      icon: "🧠",
      benefits: [
        "Predictive analytics for demand",
        "Quality pattern detection",
        "Consumer behavior insights",
        "Market trend forecasting"
      ]
    },
    {
      title: "Health Intelligence",
      description: "Revolutionary health insights derived from shopping and consumption patterns",
      icon: "❤️",
      benefits: [
        "Nutritional gap analysis",
        "Dietary recommendation engine",
        "Health trend prediction",
        "Fitness app integration"
      ]
    }
  ];

  const useCases = [
    {
      category: "Food Safety & Recalls",
      icon: "🛡️",
      applications: [
        "Instant product recall notifications",
        "Contamination source tracking",
        "Quality control automation",
        "Compliance monitoring"
      ]
    },
    {
      category: "Business Optimization",
      icon: "💰",
      applications: [
        "Waste reduction strategies",
        "Profit margin optimization",
        "Inventory turnover analysis",
        "Cost-saving recommendations"
      ]
    },
    {
      category: "Logistics Intelligence",
      icon: "🚚",
      applications: [
        "Delivery route optimization",
        "Expiration date tracking",
        "Storage condition monitoring",
        "Supply chain efficiency"
      ]
    },
    {
      category: "Customer Personalization",
      icon: "👤",
      applications: [
        "Allergen alert system",
        "Dietary restriction compliance",
        "Personalized nutrition recommendations",
        "Shopping behavior analysis"
      ]
    },
    {
      category: "Health & Fitness Integration",
      icon: "🏃‍♂️",
      applications: [
        "Fitbit shopping cart analysis",
        "Calorie intake optimization",
        "Nutrient deficiency alerts",
        "Wellness goal tracking"
      ]
    },
    {
      category: "Future Innovations",
      icon: "🚀",
      applications: [
        "Predictive health monitoring",
        "Smart grocery recommendations",
        "Automated meal planning",
        "Population health insights"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-0 relative max-w-full px-4 md:px-10 mx-auto py-12 md:py-20'
    >
      <h3 className='absolute top-6 md:top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl text-center'>
        Data Revolution
      </h3>

      <div className='w-full absolute top-[10%] md:top-[20%] bg-[#F7AB0A]/5 left-0 h-[300px] md:h-[500px] -skew-y-12' />

      <div className='mt-16 md:mt-20 z-20 max-w-7xl mx-auto'>
        
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h4 className='text-4xl font-bold text-[#F7AB0A] mb-6'>
            Transforming Food Industry Data
          </h4>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
                         From farm to fork, we&apos;re revolutionizing how food data is captured, analyzed, and utilized. 
            Our comprehensive AI platform provides unprecedented insights into every stage of the food lifecycle, 
            enabling smarter decisions for businesses and healthier choices for consumers.
          </p>
        </motion.div>

        {/* Core Features */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {dataFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ scale: .9, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-[#292929] rounded-lg p-6 hover:bg-[#333333] transition-colors'
            >
              <div className='text-4xl mb-4 text-center'>{feature.icon}</div>
              <h5 className='text-xl font-semibold text-[#F7AB0A] mb-3 text-center'>
                {feature.title}
              </h5>
              <p className='text-gray-300 text-sm mb-4 text-center'>
                {feature.description}
              </p>
              <ul className='space-y-2'>
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className='flex items-center text-gray-300 text-sm'>
                    <span className='w-2 h-2 bg-[#F7AB0A] rounded-full mr-3 flex-shrink-0' />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Use Cases Grid */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='mb-16'
        >
          <h4 className='text-3xl font-bold text-white mb-8 text-center'>
            Unlimited Applications Across the Food Ecosystem
          </h4>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='bg-[#292929] rounded-lg p-6 border-l-4 border-[#F7AB0A] hover:border-l-8 transition-all'
              >
                <div className='flex items-center mb-4'>
                  <span className='text-2xl mr-3'>{useCase.icon}</span>
                  <h5 className='text-lg font-semibold text-white'>
                    {useCase.category}
                  </h5>
                </div>
                
                <ul className='space-y-2'>
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className='flex items-start text-gray-300 text-sm'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0' />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='bg-gradient-to-r from-[#F7AB0A]/20 to-[#F7AB0A]/10 rounded-lg p-8 text-center'
        >
          <h4 className='text-2xl font-bold text-[#F7AB0A] mb-4'>
            The Future of Food Intelligence
          </h4>
          <p className='text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto'>
                         Imagine a world where your shopping cart knows your nutritional needs better than you do. 
             Where food recalls are prevented before they happen. Where businesses eliminate waste through 
             predictive analytics, and where every meal contributes to your long-term health goals. 
             This isn&apos;t science fiction—it&apos;s the future we&apos;re building today.
          </p>
          
          <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-[#F7AB0A]'>99.7%</div>
              <div className='text-sm text-gray-400'>Data Accuracy</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-[#F7AB0A]'>40%</div>
              <div className='text-sm text-gray-400'>Waste Reduction</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-[#F7AB0A]'>85%</div>
              <div className='text-sm text-gray-400'>Health Improvement</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-[#F7AB0A]'>24/7</div>
              <div className='text-sm text-gray-400'>Real-time Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DataRevolution 
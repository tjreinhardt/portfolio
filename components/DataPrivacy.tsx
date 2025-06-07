import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, optimizedViewport, hoverLift } from '../utils/animations'

type Props = {}

function DataPrivacy({}: Props) {
  const privacyFeatures = [
    {
      title: "Complete Transparency",
      icon: "🔍",
      description: "Full visibility into what data we collect and how it's used",
      details: [
        "Real-time data usage dashboard",
        "Granular permission controls",
        "Data flow transparency",
        "Usage notifications"
      ]
    },
    {
      title: "Your Choice, Your Control",
      icon: "🎛️",
      description: "Opt-in or opt-out at any time with immediate effect",
      details: [
        "Instant opt-out capability",
        "Selective data sharing",
        "Retention period controls",
        "Data deletion requests"
      ]
    },
    {
      title: "Financial Incentives",
      icon: "💰",
      description: "Get rewarded for contributing to food industry intelligence",
      details: [
        "POS system cost reductions",
        "Revenue sharing programs",
        "Performance-based rebates",
        "Third-party data licensing fees"
      ]
    }
  ];

  const pricingTiers = [
    {
      tier: "Standard Plan",
      dataSharing: "Opt-Out",
      price: "Market Rate",
      features: [
        "Basic POS functionality",
        "Standard payment processing",
        "Basic reporting",
        "Customer support"
      ],
      savings: "0%",
      dataAccess: "None"
    },
    {
      tier: "Smart Insights Plan",
      dataSharing: "Partial Opt-In",
      price: "25% Discount",
      features: [
        "Enhanced POS features",
        "AI-powered analytics",
        "Inventory optimization",
        "Customer behavior insights",
        "Waste reduction reports"
      ],
      savings: "25%",
      dataAccess: "Anonymized transaction data"
    },
    {
      tier: "Data Partner Plan",
      dataSharing: "Full Opt-In",
      price: "50% Discount + Revenue Share",
      features: [
        "Complete AI suite access",
        "Predictive analytics",
        "Revenue sharing from data",
        "Custom reporting",
        "Health compliance monitoring",
        "Priority support"
      ],
      savings: "50%+",
      dataAccess: "Comprehensive data participation"
    }
  ];

  return (
    <motion.div 
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={optimizedViewport}
      className='min-h-0 relative max-w-full px-4 md:px-10 mx-auto py-12 md:py-20'
    >
              <h3 className='absolute top-6 md:top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[6px] md:tracking-[12px] lg:tracking-[20px] text-gray-500 text-sm md:text-lg lg:text-2xl text-center'>
          Privacy & Security
        </h3>

      <div className='w-full absolute top-[10%] md:top-[20%] bg-[#F7AB0A]/5 left-0 h-[300px] md:h-[500px] skew-y-12' />

      <div className='mt-16 md:mt-20 z-20 max-w-7xl mx-auto w-full'>
        
        {/* Hero Section */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='text-center mb-16'
        >
          <h4 className='text-3xl md:text-4xl font-bold text-[#F7AB0A] mb-6'>
            Privacy-First Data Excellence
          </h4>
          <p className='text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
            We believe in the highest standards of data protection. Our privacy-first approach ensures 
            that we collect, process, and utilize data responsibly while delivering maximum value.
          </p>
          
          <div className='bg-gradient-to-r from-green-500/20 to-[#F7AB0A]/20 rounded-lg p-4 md:p-6 max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
              <div>
                <div className='text-xl md:text-2xl font-bold text-green-400'>100%</div>
                <div className='text-xs md:text-sm text-gray-300'>Compliance Rate</div>
              </div>
              <div>
                <div className='text-xl md:text-2xl font-bold text-[#F7AB0A]'>Zero</div>
                <div className='text-xs md:text-sm text-gray-300'>Data Breaches</div>
              </div>
              <div>
                <div className='text-xl md:text-2xl font-bold text-blue-400'>24/7</div>
                <div className='text-xs md:text-sm text-gray-300'>Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Privacy Standards */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16'
        >
          <motion.div 
            variants={fadeIn}
            {...hoverLift}
            className='bg-[#292929] rounded-lg p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300'
          >
            <div className='text-center mb-6'>
              <div className='text-3xl md:text-4xl mb-4'>🔒</div>
              <h5 className='text-lg md:text-xl font-semibold text-green-400 mb-2'>
                Enterprise Security
              </h5>
            </div>
            <p className='text-sm md:text-base text-gray-300 mb-4 leading-relaxed'>
              Our data infrastructure meets the highest security standards with end-to-end encryption, 
              secure data centers, and rigorous access controls.
            </p>
            <ul className='space-y-2'>
              <li className='flex items-center text-gray-300 text-sm'>
                <span className='w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                AES-256 encryption
              </li>
              <li className='flex items-center text-gray-300 text-sm'>
                <span className='w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                SOC 2 Type II compliance
              </li>
              <li className='flex items-center text-gray-300 text-sm'>
                <span className='w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                Multi-factor authentication
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            {...hoverLift}
            className='bg-[#292929] rounded-lg p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300'
          >
            <div className='text-center mb-6'>
              <div className='text-3xl md:text-4xl mb-4'>⚖️</div>
              <h5 className='text-lg md:text-xl font-semibold text-blue-400 mb-2'>
                Regulatory Compliance
              </h5>
            </div>
            <p className='text-sm md:text-base text-gray-300 mb-4 leading-relaxed'>
              We comply with all major privacy regulations to ensure your data rights are protected 
              and businesses meet their compliance obligations.
            </p>
            <ul className='space-y-2'>
              <li className='flex items-center text-gray-300 text-sm'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0' />
                GDPR compliant
              </li>
              <li className='flex items-center text-gray-300 text-sm'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0' />
                CCPA adherent
              </li>
              <li className='flex items-center text-gray-300 text-sm'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0' />
                HIPAA ready
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Transparency Commitment */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='bg-gradient-to-r from-[#F7AB0A]/20 to-purple-600/20 rounded-lg p-6 md:p-8 text-center mb-16'
        >
          <h4 className='text-2xl md:text-3xl font-bold text-[#F7AB0A] mb-6'>
            Transparency & Control
          </h4>
          <p className='text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
            You maintain full control over your data. We provide clear visibility into how your data is used, 
            with the ability to opt-out or modify permissions at any time.
          </p>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-[#292929] rounded-lg p-4'>
              <h5 className='text-lg font-bold text-[#F7AB0A] mb-2'>Data Usage</h5>
              <p className='text-sm text-gray-300'>Clear documentation of how your data creates value</p>
            </div>
            <div className='bg-[#292929] rounded-lg p-4'>
              <h5 className='text-lg font-bold text-[#F7AB0A] mb-2'>Opt-Out Rights</h5>
              <p className='text-sm text-gray-300'>Easy withdrawal from data sharing programs</p>
            </div>
            <div className='bg-[#292929] rounded-lg p-4'>
              <h5 className='text-lg font-bold text-[#F7AB0A] mb-2'>Data Portability</h5>
              <p className='text-sm text-gray-300'>Access and export your data whenever needed</p>
            </div>
          </div>
        </motion.div>

        {/* Privacy Features */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16'
        >
          {privacyFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              {...hoverLift}
              className='bg-[#292929] rounded-lg p-6 hover:bg-[#333333] transition-colors border border-gray-700 hover:border-[#F7AB0A]/30'
            >
              <div className='text-4xl mb-4 text-center'>{feature.icon}</div>
              <h5 className='text-xl font-semibold text-[#F7AB0A] mb-3 text-center'>
                {feature.title}
              </h5>
              <p className='text-gray-300 text-sm mb-4 text-center'>
                {feature.description}
              </p>
              <ul className='space-y-2'>
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className='flex items-center text-gray-300 text-sm'>
                    <span className='w-2 h-2 bg-[#F7AB0A] rounded-full mr-3 flex-shrink-0' />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='mb-16'
        >
          <h4 className='text-3xl font-bold text-white mb-8 text-center'>
            Data Sharing = Cost Savings
          </h4>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {pricingTiers.map((tier, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`bg-[#292929] rounded-lg p-6 border-2 transition-all ${
                  index === 2 ? 'border-[#F7AB0A] transform scale-105' : 
                  index === 1 ? 'border-green-500' : 'border-gray-600'
                }`}
              >
                <div className='text-center mb-6'>
                  <h5 className='text-xl font-semibold text-white mb-2'>{tier.tier}</h5>
                  <div className='text-sm text-gray-400 mb-2'>{tier.dataSharing}</div>
                  <div className='text-2xl font-bold text-[#F7AB0A]'>{tier.price}</div>
                  <div className='text-lg font-semibold text-green-500'>Save {tier.savings}</div>
                </div>
                
                <ul className='space-y-2 mb-6'>
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center text-gray-300 text-sm'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className='border-t border-gray-600 pt-4'>
                  <div className='text-xs text-gray-400 mb-1'>Data Usage:</div>
                  <div className='text-sm text-gray-300'>{tier.dataAccess}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='bg-gradient-to-r from-[#F7AB0A]/20 to-green-500/20 rounded-lg p-8'
        >
          <h4 className='text-2xl font-bold text-[#F7AB0A] mb-6 text-center'>
            Why This Matters for Restaurant Success
          </h4>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h5 className='text-lg font-semibold text-white mb-4'>The Challenge</h5>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-center'>
                  <span className='w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0' />
                  60% of restaurants fail within the first year
                </li>
                <li className='flex items-center'>
                  <span className='w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0' />
                  80% fail within 5 years
                </li>
                <li className='flex items-center'>
                  <span className='w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0' />
                  High POS system costs drain cash flow
                </li>
                <li className='flex items-center'>
                  <span className='w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0' />
                  Limited access to actionable insights
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className='text-lg font-semibold text-white mb-4'>Our Solution</h5>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-center'>
                  <span className='w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                  Reduce POS costs by up to 50%
                </li>
                <li className='flex items-center'>
                  <span className='w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                  AI-powered insights for better decisions
                </li>
                <li className='flex items-center'>
                  <span className='w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                  Revenue sharing opportunities
                </li>
                <li className='flex items-center'>
                  <span className='w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                  Optimize operations to improve survival rates
                </li>
              </ul>
            </div>
          </div>
          
          <div className='mt-8 text-center'>
            <p className='text-lg text-gray-300 italic'>
              &ldquo;Lower costs + Better insights = Higher survival rates. Your data helps improve the entire food industry.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DataPrivacy 
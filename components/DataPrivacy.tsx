import React from 'react'
import { motion } from 'framer-motion'

function DataPrivacy() {
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-screen relative flex overflow-hidden flex-col text-left max-w-full px-10 justify-center mx-auto items-center py-20'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Data Privacy
      </h3>

      <div className='w-full absolute top-[20%] bg-[#F7AB0A]/5 left-0 h-[500px] skew-y-12' />

      <div className='mt-20 z-20 max-w-7xl mx-auto'>
        
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h4 className='text-4xl font-bold text-[#F7AB0A] mb-6'>
            Your Data, Your Choice, Your Benefit
          </h4>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            We believe in complete transparency and fair value exchange. Choose how much data you want to share 
            and get rewarded accordingly. From basic POS functionality to AI-powered insights and revenue sharing, 
            the choice is entirely yours.
          </p>
        </motion.div>

        {/* Privacy Features */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {privacyFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0, opacity: 0 }}
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
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className='flex items-center text-gray-300 text-sm'>
                    <span className='w-2 h-2 bg-[#F7AB0A] rounded-full mr-3 flex-shrink-0' />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='mb-16'
        >
          <h4 className='text-3xl font-bold text-white mb-8 text-center'>
            Data Sharing = Cost Savings
          </h4>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {pricingTiers.map((tier, index) => (
              <motion.div 
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
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
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, optimizedViewport, hoverLift, fadeIn } from '../utils/animations'

function DataApplications() {
  const dataApplications = [
    {
      title: "Smart Health Shopping",
      icon: "🏥💡",
      description: "Health data + POS + source food data for personalized nutrition guidance",
      integrations: [
        "MyFitnessPal nutrition tracking",
        "Apple Health & Google Fit integration", 
        "Chronic disease management apps",
        "Dietitian recommendation platforms"
      ],
      revenueModel: "Subscription SaaS for health platforms ($5-15/user/month)",
      marketSize: "$36B+ health app market",
      partnerships: ["Fitbit", "Noom", "Weight Watchers", "Healthcare Systems"]
    },
    {
      title: "Intelligent Cost Optimization", 
      icon: "💰🧠",
      description: "Smart money apps integration for location-based cost savings and quality alternatives",
      integrations: [
        "Mint & YNAB budget optimization",
        "Grocery delivery cost comparison",
        "Location-based price matching",
        "Quality-to-cost ratio analytics"
      ],
      revenueModel: "Commission on savings generated (2-5% of user savings)",
      marketSize: "$105B+ personal finance app market",
      partnerships: ["Mint", "YNAB", "Honey", "Rakuten", "Instacart"]
    },
    {
      title: "Supply Chain Intelligence",
      icon: "🚛📊",
      description: "Source-to-consumer tracking for supply chain optimization and transparency",
      integrations: [
        "Farm-to-fork traceability",
        "Supply chain risk prediction",
        "Sustainability scoring",
        "Food recall rapid response"
      ],
      revenueModel: "Enterprise licensing ($50K-500K/year per major retailer)",
      marketSize: "$8.2B supply chain analytics market",
      partnerships: ["Walmart", "Amazon Fresh", "Sysco", "US Foods"]
    },
    {
      title: "Preventive Health Analytics",
      icon: "🔬⚕️",
      description: "Disease prediction and prevention through food pattern analysis",
      integrations: [
        "CDC health monitoring systems",
        "Insurance risk assessment",
        "Clinical research platforms",
        "Pharmaceutical research"
      ],
      revenueModel: "Research licensing & insurance partnerships ($1M+ per study)",
      marketSize: "$366B+ healthcare analytics market",
      partnerships: ["Mayo Clinic", "Kaiser Permanente", "Pfizer", "Johnson & Johnson"]
    },
    {
      title: "Smart City Food Planning",
      icon: "🏙️🍎",
      description: "Municipal food security and urban planning optimization",
      integrations: [
        "City planning departments",
        "Food desert identification",
        "Emergency food distribution",
        "Public health initiatives"
      ],
      revenueModel: "Government contracts ($500K-5M per city)",
      marketSize: "$1.42T+ smart cities market",
      partnerships: ["City Governments", "USDA", "WHO", "UN Food Programme"]
    },
    {
      title: "AI-Powered Food Discovery",
      icon: "🤖🍽️",
      description: "Personalized food recommendations and meal planning optimization",
      integrations: [
        "Recipe recommendation engines",
        "Meal kit delivery services",
        "Restaurant suggestion algorithms",
        "Cultural cuisine exploration"
      ],
      revenueModel: "Revenue share with food delivery (3-8% of orders)",
      marketSize: "$9.7B online food delivery market",
      partnerships: ["DoorDash", "Uber Eats", "Blue Apron", "HelloFresh"]
    }
  ];

  const integrationEcosystem = [
    {
      category: "Health & Fitness",
      partners: ["Fitbit", "MyFitnessPal", "Noom", "Apple Health", "Google Fit"],
      value: "$257B market",
      integration: "Nutrition tracking + shopping recommendations"
    },
    {
      category: "Financial Technology", 
      partners: ["Mint", "YNAB", "Honey", "Rakuten", "Capital One"],
      value: "$112B market", 
      integration: "Smart spending + cost optimization"
    },
    {
      category: "Food Delivery & Retail",
      partners: ["Instacart", "DoorDash", "Amazon Fresh", "Walmart"],
      value: "$1.7T market",
      integration: "Personalized recommendations + supply optimization"
    },
    {
      category: "Healthcare Systems",
      partners: ["Mayo Clinic", "Kaiser", "CVS Health", "Teladoc"],
      value: "$214B market",
      integration: "Preventive care + nutrition therapy"
    }
  ];

  return (
    <motion.div 
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={optimizedViewport}
      className='min-h-0 relative flex overflow-hidden flex-col text-left max-w-full px-4 md:px-10 justify-center mx-auto items-center py-12 md:py-20'
    >
      <h3 className='absolute top-6 md:top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[6px] md:tracking-[12px] lg:tracking-[20px] text-gray-500 text-sm md:text-lg lg:text-2xl text-center'>
        Data Applications
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
            Central Nervous System of the Food Industry
          </h4>
          <p className='text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
            Our source-level food data creates endless partnership opportunities and revenue streams. 
            From preventing diseases to optimizing supply chains, we&apos;re reshaping how the world understands food.
          </p>
          
          <div className='bg-gradient-to-r from-[#F7AB0A]/20 to-green-500/20 rounded-lg p-4 md:p-6 max-w-4xl mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
              <div>
                <div className='text-xl md:text-2xl font-bold text-[#F7AB0A]'>$6.6T+</div>
                <div className='text-xs md:text-sm text-gray-300'>Total Addressable Market</div>
              </div>
              <div>
                <div className='text-xl md:text-2xl font-bold text-green-400'>50+</div>
                <div className='text-xs md:text-sm text-gray-300'>Integration Opportunities</div>
              </div>
              <div>
                <div className='text-xl md:text-2xl font-bold text-blue-400'>15</div>
                <div className='text-xs md:text-sm text-gray-300'>Revenue Streams</div>
              </div>
              <div>
                <div className='text-xl md:text-2xl font-bold text-purple-400'>∞</div>
                <div className='text-xs md:text-sm text-gray-300'>Partnership Potential</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Applications Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16'
        >
          {dataApplications.map((app, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              {...hoverLift}
              className='bg-[#292929] rounded-lg p-4 md:p-6 hover:bg-[#333333] transition-all duration-300 border border-gray-700 hover:border-[#F7AB0A]/30'
            >
              <div className='text-center mb-6'>
                <div className='text-3xl md:text-4xl mb-4'>{app.icon}</div>
                <h5 className='text-lg md:text-xl font-semibold text-[#F7AB0A] mb-2'>
                  {app.title}
                </h5>
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
                  {app.description}
                </p>
              </div>
              
              <div className='space-y-4'>
                <div>
                  <h6 className='text-sm font-semibold text-white mb-2'>Key Integrations:</h6>
                  <ul className='space-y-1'>
                    {app.integrations.map((integration, idx) => (
                      <li key={idx} className='flex items-center text-gray-300 text-sm'>
                        <span className='w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0' />
                        {integration}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className='border-t border-gray-600 pt-4'>
                  <div className='grid grid-cols-1 gap-3'>
                    <div>
                      <div className='text-xs text-gray-400 mb-1'>Revenue Model:</div>
                      <div className='text-sm text-green-400 font-semibold'>{app.revenueModel}</div>
                    </div>
                  
                    <div>
                      <div className='text-xs text-gray-400 mb-1'>Market Size:</div>
                      <div className='text-sm text-blue-400 font-semibold'>{app.marketSize}</div>
                    </div>
                    
                    <div>
                      <div className='text-xs text-gray-400 mb-1'>Target Partners:</div>
                      <div className='text-sm text-gray-300'>
                        {app.partnerships.slice(0, 2).join(", ")} + {app.partnerships.length - 2} more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Ecosystem */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='mb-16'
        >
          <h4 className='text-2xl md:text-3xl font-bold text-white mb-8 text-center'>
            Partnership Ecosystem
          </h4>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={optimizedViewport}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            {integrationEcosystem.map((ecosystem, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                {...hoverLift}
                className='bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-4 md:p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300'
              >
                <div className='text-center mb-4'>
                  <h5 className='text-lg md:text-xl font-semibold text-purple-400 mb-2'>
                    {ecosystem.category}
                  </h5>
                  <div className='text-xl md:text-2xl font-bold text-white'>{ecosystem.value}</div>
                  <div className='text-sm text-gray-400'>Market Opportunity</div>
                </div>
                
                <div className='mb-4'>
                  <div className='text-sm font-semibold text-white mb-2'>Integration Value:</div>
                  <div className='text-sm text-gray-300 italic'>&ldquo;{ecosystem.integration}&rdquo;</div>
                </div>
                
                <div>
                  <div className='text-sm font-semibold text-white mb-2'>Key Partners:</div>
                  <div className='flex flex-wrap gap-2'>
                    {ecosystem.partners.map((partner, partnerIndex) => (
                      <span 
                        key={partnerIndex}
                        className='bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs'
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Revenue Potential - "Why Our Data Is Incredibly Valuable" */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='bg-gradient-to-r from-[#F7AB0A]/20 to-yellow-600/20 rounded-lg p-6 md:p-8 text-center'
        >
          <h4 className='text-2xl md:text-3xl font-bold text-[#F7AB0A] mb-6'>
            Why Our Data Is Incredibly Valuable
          </h4>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8'>
            <div>
              <h5 className='text-lg font-semibold text-white mb-3'>Source-Level Accuracy</h5>
              <p className='text-sm text-gray-300 leading-relaxed'>
                Unlike aggregated data, we capture information at the point of origin - restaurants, farms, suppliers. 
                This granular accuracy is impossible to replicate.
              </p>
            </div>
            
            <div>
              <h5 className='text-lg font-semibold text-white mb-3'>Real-Time Intelligence</h5>
              <p className='text-sm text-gray-300 leading-relaxed'>
                Live transaction data combined with health outcomes creates predictive insights 
                that can prevent diseases before they occur.
              </p>
            </div>
            
            <div>
              <h5 className='text-lg font-semibold text-white mb-3'>Network Effects</h5>
              <p className='text-sm text-gray-300 leading-relaxed'>
                Each new food establishment exponentially increases data value. 
                More connections = better predictions = higher revenue potential.
              </p>
            </div>
          </div>
          
          <div className='bg-[#292929] rounded-lg p-4 md:p-6'>
            <h5 className='text-xl font-bold text-[#F7AB0A] mb-6 text-center'>
              Conservative Revenue Projection
            </h5>
            
            {/* Progressive Revenue Timeline */}
            <div className='relative'>
              {/* Connecting Progress Line */}
              <div className='absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 hidden md:block' />
              
              {/* Revenue Milestones */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* Phase 1: Year 1-2 */}
                <div className='relative bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105'>
                  {/* Progress Indicator */}
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-[#292929] flex items-center justify-center hidden md:flex'>
                    <div className='w-2 h-2 bg-white rounded-full' />
                  </div>
                  
                  <div className='text-center'>
                    <div className='text-2xl md:text-3xl font-bold text-green-400 mb-2'>
                      $50M-100M
                    </div>
                    <div className='text-sm font-semibold text-green-300 mb-3 uppercase tracking-wide'>
                      Year 1-2: Foundation
                    </div>
                    <div className='text-sm text-gray-300 leading-relaxed'>
                      Initial partnerships with health apps, finance platforms, and early enterprise clients
                    </div>
                    
                    {/* Key Metrics */}
                    <div className='mt-4 pt-4 border-t border-green-500/20'>
                      <div className='flex justify-between items-center text-xs'>
                        <span className='text-gray-400'>Revenue Stream:</span>
                        <span className='text-green-300 font-medium'>Partnerships</span>
                      </div>
                      <div className='flex justify-between items-center text-xs mt-1'>
                        <span className='text-gray-400'>Growth Rate:</span>
                        <span className='text-green-300 font-medium'>200%+ YoY</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2: Year 3-5 */}
                <div className='relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105'>
                  {/* Progress Indicator */}
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#292929] flex items-center justify-center hidden md:flex'>
                    <div className='w-2 h-2 bg-white rounded-full' />
                  </div>
                  
                  <div className='text-center'>
                    <div className='text-2xl md:text-3xl font-bold text-blue-400 mb-2'>
                      $500M-1B
                    </div>
                    <div className='text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wide'>
                      Year 3-5: Scale
                    </div>
                    <div className='text-sm text-gray-300 leading-relaxed'>
                      Scaled integrations across multiple industries with enterprise licensing and data products
                    </div>
                    
                    {/* Key Metrics */}
                    <div className='mt-4 pt-4 border-t border-blue-500/20'>
                      <div className='flex justify-between items-center text-xs'>
                        <span className='text-gray-400'>Revenue Stream:</span>
                        <span className='text-blue-300 font-medium'>Enterprise + SaaS</span>
                      </div>
                      <div className='flex justify-between items-center text-xs mt-1'>
                        <span className='text-gray-400'>Market Position:</span>
                        <span className='text-blue-300 font-medium'>Market Leader</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3: Year 5+ */}
                <div className='relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105'>
                  {/* Progress Indicator */}
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#292929] flex items-center justify-center hidden md:flex'>
                    <div className='w-2 h-2 bg-white rounded-full' />
                  </div>
                  
                  <div className='text-center'>
                    <div className='text-2xl md:text-3xl font-bold text-purple-400 mb-2'>
                      $2B+
                    </div>
                    <div className='text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wide'>
                      Year 5+: Dominance
                    </div>
                    <div className='text-sm text-gray-300 leading-relaxed'>
                      Data monopoly value with unparalleled food intelligence platform commanding premium pricing
                    </div>
                    
                    {/* Key Metrics */}
                    <div className='mt-4 pt-4 border-t border-purple-500/20'>
                      <div className='flex justify-between items-center text-xs'>
                        <span className='text-gray-400'>Revenue Stream:</span>
                        <span className='text-purple-300 font-medium'>Data Monopoly</span>
                      </div>
                      <div className='flex justify-between items-center text-xs mt-1'>
                        <span className='text-gray-400'>Market Cap:</span>
                        <span className='text-purple-300 font-medium'>$10B+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Growth Trajectory Summary */}
              <div className='mt-8 pt-6 border-t border-gray-600'>
                <div className='text-center'>
                  <div className='text-sm text-gray-400 mb-2'>Total Revenue Growth Trajectory</div>
                  <div className='flex items-center justify-center space-x-4 text-xs'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 bg-green-500 rounded-full' />
                      <span className='text-gray-300'>Foundation</span>
                    </div>
                    <div className='text-gray-500'>→</div>
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 bg-blue-500 rounded-full' />
                      <span className='text-gray-300'>Scale</span>
                    </div>
                    <div className='text-gray-500'>→</div>
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 bg-purple-500 rounded-full' />
                      <span className='text-gray-300'>Dominance</span>
                    </div>
                  </div>
                  <div className='mt-3 text-sm text-[#F7AB0A] font-semibold'>
                    Conservative 40x Revenue Multiple Over 5 Years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DataApplications 
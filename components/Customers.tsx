import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, optimizedViewport, hoverLift } from '../utils/animations'

type Props = {
  customers: any[]
}

function Customers({ customers }: Props) {
  // Define customer benefits with proper structure
  const customerBenefits = [
    {
      id: "1",
      title: "Smart Dining Rewards",
      icon: "🍽️",
      description: "Earn points and get personalized dining recommendations based on your preferences and dietary needs",
      category: "Dining Incentives",
      benefits: [
        "10% cashback on every meal at participating venues",
        "Personalized menu recommendations based on dietary restrictions",
        "Early access to new restaurant openings and events",
        "Free appetizer on your birthday month",
        "Skip-the-line privileges during peak hours"
      ],
      dataExchange: "Dining preferences, nutritional choices, visit frequency",
      venueValue: "35% increase in customer retention, higher average order value"
    },
    {
      id: "2",
      title: "Safe Ride Home Program",
      icon: "🚗",
      description: "Free or discounted rides home to prevent drunk driving and ensure customer safety",
      category: "Safety & Transportation",
      benefits: [
        "Free Uber/Lyft rides home after spending $50+ at participating venues",
        "50% discount on rides for all venue visits",
        "Priority pickup during busy nights",
        "Group ride coordination for parties",
        "Safety notifications sent to emergency contacts"
      ],
      dataExchange: "Location data, spending patterns, ride frequency",
      venueValue: "60% more customers stay longer, reduced liability concerns"
    },
    {
      id: "3",
      title: "Social Savings Network",
      icon: "👥",
      description: "Connect with friends and earn group discounts while discovering new entertainment venues",
      category: "Social & Entertainment",
      benefits: [
        "Group discounts: 4+ people get 20% off total bill",
        "Friend referral bonuses: $10 credit for each new friend",
        "Social check-in rewards at multiple venues",
        "Exclusive access to private events and VIP sections",
        "Share dining experiences and earn points for reviews"
      ],
      dataExchange: "Social connections, group preferences, entertainment habits",
      venueValue: "45% increase in group bookings, viral marketing effect"
    },
    {
      id: "4",
      title: "Health & Wellness Tracking",
      icon: "💪",
      description: "Monitor your food intake and get health insights while enjoying dining out",
      category: "Health & Fitness",
      benefits: [
        "Automatic calorie and nutrition tracking from restaurant meals",
        "Healthier menu options highlighted based on your goals",
        "Fitness app integration (MyFitnessPal, Apple Health)",
        "Wellness challenges with dining rewards",
        "Allergen alerts and ingredient transparency"
      ],
      dataExchange: "Health goals, dietary restrictions, fitness data",
      venueValue: "Attracts health-conscious customers, menu optimization insights"
    },
    {
      id: "5",
      title: "Entertainment Discovery Engine",
      icon: "🎭",
      description: "Never miss out on events, shows, or experiences that match your interests",
      category: "Events & Entertainment",
      benefits: [
        "Personalized event recommendations based on your interests",
        "Early bird pricing on concerts, shows, and special events",
        "VIP upgrades and exclusive venue access",
        "Last-minute deal alerts for unsold tickets",
        "Social calendar integration with friends' plans"
      ],
      dataExchange: "Entertainment preferences, event attendance, social calendar",
      venueValue: "Better event promotion, improved capacity utilization"
    },
    {
      id: "6",
      title: "Local Discovery Rewards",
      icon: "🗺️",
      description: "Explore new neighborhoods and venues with exclusive local insider benefits",
      category: "Local Exploration",
      benefits: [
        "New venue explorer bonus: 25% off first visit to any new location",
        "Local insider deals not available to general public",
        "Neighborhood loyalty programs with escalating rewards",
        "Tourist and visitor special welcome packages",
        "Local business cross-promotion partnerships"
      ],
      dataExchange: "Location patterns, exploration habits, local preferences",
      venueValue: "Increased foot traffic, better neighborhood presence"
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
        Customer Benefits
      </h3>

      <div className='w-full absolute top-[10%] md:top-[20%] bg-[#F7AB0A]/5 left-0 h-[300px] md:h-[500px] skew-y-12' />

      <div className='mt-20 z-20 max-w-7xl mx-auto w-full'>
        
        {/* Hero Section */}
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='text-center mb-16'
        >
          <h4 className='text-3xl md:text-4xl font-bold text-[#F7AB0A] mb-6'>
            Your Data = Your Rewards
          </h4>
          <p className='text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
            Get incredible benefits at your favorite venues while helping us create a better food industry. 
            The more you participate, the more you save, and the safer everyone becomes.
          </p>
          
          <div className='flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center bg-gradient-to-r from-[#F7AB0A]/20 to-green-500/20 rounded-lg p-4 md:p-6 max-w-4xl mx-auto'>
            <div className='text-center flex-1'>
              <div className='text-2xl md:text-3xl mb-2'>🏪</div>
              <div className='text-xs md:text-sm text-gray-300'>
                <div className='font-semibold text-white'>Venues Benefit</div>
                More customers, better insights
              </div>
            </div>
            <div className='text-2xl md:text-4xl text-[#F7AB0A]'>⚡</div>
            <div className='text-center flex-1'>
              <div className='text-2xl md:text-3xl mb-2'>👤</div>
              <div className='text-xs md:text-sm text-gray-300'>
                <div className='font-semibold text-white'>You Benefit</div>
                Discounts, rewards, safety
              </div>
            </div>
            <div className='text-2xl md:text-4xl text-[#F7AB0A]'>⚡</div>
            <div className='text-center flex-1'>
              <div className='text-2xl md:text-3xl mb-2'>🧠</div>
              <div className='text-xs md:text-sm text-gray-300'>
                <div className='font-semibold text-white'>AI Benefits</div>
                Smarter food industry
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Benefits Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16'
        >
          {customerBenefits.map((benefit, index) => (
            <motion.div 
              key={benefit.id}
              variants={fadeIn}
              {...hoverLift}
              className='bg-[#292929] rounded-lg p-4 md:p-6 hover:bg-[#333333] transition-all duration-300 border border-gray-700 hover:border-[#F7AB0A]/30'
            >
              <div className='text-center mb-6'>
                <div className='text-4xl md:text-5xl mb-4'>{benefit.icon}</div>
                <h5 className='text-lg md:text-xl font-semibold text-[#F7AB0A] mb-2'>
                  {benefit.title}
                </h5>
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
                  {benefit.description}
                </p>
                <div className='inline-block bg-[#F7AB0A]/20 text-[#F7AB0A] px-3 py-1 rounded-full text-xs font-semibold'>
                  {benefit.category}
                </div>
              </div>
              
              <div className='mb-6'>
                <h6 className='text-sm font-semibold text-white mb-3'>Your Benefits:</h6>
                <ul className='space-y-2'>
                  {benefit.benefits.map((perk: string, perkIndex: number) => (
                    <li key={perkIndex} className='flex items-start text-gray-300 text-sm'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0' />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className='border-t border-gray-600 pt-4'>
                <div className='mb-3'>
                  <div className='text-xs text-gray-400 mb-1'>Data Exchange:</div>
                  <div className='text-sm text-gray-300'>{benefit.dataExchange}</div>
                </div>
                
                <div>
                  <div className='text-xs text-gray-400 mb-1'>Venue Impact:</div>
                  <div className='text-sm text-green-400'>{benefit.venueValue}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Benefit - Safe Ride Home */}
        <motion.div 
          variants={hoverLift}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 md:p-8 mb-16 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300'
        >
          <div className='text-center mb-8'>
            <div className='text-5xl md:text-6xl mb-4'>🚗💙</div>
            <h4 className='text-2xl md:text-3xl font-bold text-blue-400 mb-4'>
              Safe Ride Home Program
            </h4>
            <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
              Our flagship safety initiative - preventing DUIs while keeping the party going
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='text-center'>
              <h5 className='text-lg font-semibold text-white mb-3'>For You</h5>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li>✅ Free rides home after $50+ spend</li>
                <li>✅ 50% discount on all venue rides</li>
                <li>✅ Priority pickup on busy nights</li>
                <li>✅ Group coordination for parties</li>
              </ul>
            </div>
            
            <div className='text-center'>
              <h5 className='text-lg font-semibold text-white mb-3'>For Venues</h5>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li>✅ Customers stay longer & spend more</li>
                <li>✅ Reduced liability concerns</li>
                <li>✅ Enhanced reputation for safety</li>
                <li>✅ More repeat customers</li>
              </ul>
            </div>
            
            <div className='text-center'>
              <h5 className='text-lg font-semibold text-white mb-3'>For Society</h5>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li>✅ Prevent drunk driving incidents</li>
                <li>✅ Save lives and reduce accidents</li>
                <li>✅ Support responsible drinking culture</li>
                <li>✅ Strengthen community safety</li>
              </ul>
            </div>
          </div>
          
          <div className='mt-8 text-center'>
            <p className='text-lg text-blue-300 italic'>
              &ldquo;Your safety is worth more than any data. That&apos;s why this program comes first.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Call to Action
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='text-center bg-gradient-to-r from-[#F7AB0A]/20 to-yellow-600/20 rounded-lg p-6 md:p-8 transition-all duration-300'
        >
          <h4 className='text-xl md:text-2xl font-bold text-[#F7AB0A] mb-4'>
            Ready to Start Earning Rewards?
          </h4>
          <p className='text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto'>
            Join the thousands of diners who are already saving money, staying safe, and helping revolutionize the food industry.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <button className='bg-[#F7AB0A] text-black py-3 px-6 md:px-8 rounded-lg font-semibold hover:bg-[#F7AB0A]/90 transition-colors text-sm md:text-base'>
              Download the App
            </button>
            <button className='border border-[#F7AB0A] text-[#F7AB0A] py-3 px-6 md:px-8 rounded-lg font-semibold hover:bg-[#F7AB0A]/10 transition-colors text-sm md:text-base'>
              Find Partner Venues
            </button>
          </div>
          
          <div className='mt-6 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400'>
            <div>
              <span className='font-semibold text-[#F7AB0A]'>1M+</span> Active Users
            </div>
            <div>
              <span className='font-semibold text-[#F7AB0A]'>500+</span> Partner Venues
            </div>
            <div>
              <span className='font-semibold text-[#F7AB0A]'>$2.3M</span> Saved by Customers
            </div>
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  )
}

export default Customers 
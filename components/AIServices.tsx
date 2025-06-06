import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer, optimizedViewport, hoverLift } from '../utils/animations'

type Props = {
  aiServices: any[]
}

function AIServices({ aiServices }: Props) {
  const aiCapabilities = [
    {
      category: "Data Processing",
      description: "Advanced AI algorithms process millions of transactions in real-time, extracting meaningful patterns and insights",
      metrics: [
        "99.9% accuracy in data classification",
        "Real-time processing of 10M+ transactions",
        "Predictive analytics with 95% confidence"
      ],
      icon: "🧠"
    },
    {
      category: "Network Intelligence",
      description: "Sophisticated machine learning models that understand complex relationships between food establishments",
      metrics: [
        "Cross-platform pattern recognition",
        "Dynamic network mapping",
        "Automated quality scoring"
      ],
      icon: "🕸️"
    },
    {
      category: "Predictive Analytics",
      description: "Forward-looking insights that help businesses make data-driven decisions before problems occur",
      metrics: [
        "Health outcome prediction",
        "Supply chain optimization",
        "Demand forecasting"
      ],
      icon: "🔮"
    }
  ];

  const industryProblems = [
    {
      problem: "Health Outbreaks",
      statistic: "76M Americans get sick from food annually",
      solution: "AI-powered early detection system",
      impact: "Prevent 90% of food-related illnesses"
    },
    {
      problem: "Supply Chain Inefficiency",
      statistic: "$165B lost annually in food waste",
      solution: "Predictive inventory optimization",
      impact: "Reduce waste by 40-60%"
    },
    {
      problem: "POS System Fragmentation",
      statistic: "500+ different POS systems in market",
      solution: "Universal AI translation layer",
      impact: "Connect 100% of food establishments"
    },
    {
      problem: "Consumer Health Tracking",
      statistic: "80% of people don't track food quality",
      solution: "Automated health score generation",
      impact: "Improve personal health outcomes by 50%"
    }
  ];

  const coreServices = [
    {
      title: "Breme Connect",
      description: "Revolutionary POS integration that connects to any food establishment's system, creating a unified data stream from the source",
      icon: "🔗",
      features: [
        "Universal POS system integration",
        "Real-time transaction monitoring",
        "Automated data standardization",
        "Source-level ingredient tracking",
        "Revenue sharing with restaurants",
        "Zero-friction setup process"
      ]
    },
    {
      title: "Breme Analyze",
      description: "Advanced AI engine that processes and understands food data, creating actionable insights for health, business, and supply chain optimization",
      icon: "🧠",
      features: [
        "Machine learning pattern recognition",
        "Health outcome prediction",
        "Supply chain optimization",
        "Quality scoring algorithms",
        "Trend analysis and forecasting",
        "Cross-platform data correlation"
      ]
    },
    {
      title: "Breme Protect",
      description: "Comprehensive monitoring and alert system that prevents food-related health issues before they occur",
      icon: "🛡️",
      features: [
        "Early contamination detection",
        "Outbreak prevention systems",
        "Supply chain traceability",
        "Allergen prevention systems",
        "Health trend analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative bg-[rgb(36,36,36)] py-20 px-4">
      {/* Background Effects */}
      <div className='w-full absolute top-[20%] bg-[#F7AB0A]/5 left-0 h-[500px] skew-y-12' />
      
      <motion.div 
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={optimizedViewport}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="uppercase tracking-[12px] md:tracking-[15px] lg:tracking-[20px] text-gray-500 text-lg md:text-xl lg:text-2xl mb-8 text-center">
            AI Services
          </h3>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Next-Generation <span className="text-[#F7AB0A]">Food Intelligence</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Three revolutionary AI services that transform how the food industry operates, from POS acquisition to health monitoring
          </p>
        </div>

        {/* AI Capabilities Overview */}
        <motion.div
          variants={hoverLift}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">AI-Powered Capabilities</h3>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={optimizedViewport}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {aiCapabilities.map((capability, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                {...hoverLift}
                className="bg-[#292929] rounded-xl p-6 md:p-8 text-center border border-gray-700 hover:border-[#F7AB0A]/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-4">{capability.icon}</div>
                <h4 className="text-lg md:text-xl font-semibold text-[#F7AB0A] mb-4">{capability.category}</h4>
                <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">{capability.description}</p>
                <div className="space-y-2">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-[#1f1f1f] rounded-lg p-2 text-xs md:text-sm text-white">
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Industry Problems We Solve */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Industry Problems We Solve</h3>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={optimizedViewport}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {industryProblems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                {...hoverLift}
                className="bg-[#292929] rounded-xl p-6 md:p-8 border border-gray-700 hover:border-[#F7AB0A]/30 transition-all duration-300"
              >
                <h4 className="text-lg md:text-xl font-bold text-[#F7AB0A] mb-3">{item.problem}</h4>
                <div className="text-sm md:text-base text-red-400 font-semibold mb-4">{item.statistic}</div>
                <div className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">{item.solution}</div>
                <div className="text-sm md:text-base text-green-400 font-medium">{item.impact}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Core AI Services */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Our Three Core AI Services</h3>
          <div className="space-y-12">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={optimizedViewport}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                {/* Service Icon & Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#F7AB0A] to-[#F7AB0A]/70 rounded-full flex items-center justify-center text-4xl md:text-6xl">
                      {service.icon}
                    </div>
                    <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-[#292929] border-2 border-[#F7AB0A] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex-1">
                  <div className="bg-[#292929] rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#F7AB0A]/30 transition-all duration-300">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h4>
                    <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">{service.description}</p>
                    
                    <div>
                      <h5 className="text-lg md:text-xl font-semibold text-[#F7AB0A] mb-4">Core Features</h5>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-[#F7AB0A] rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-[#F7AB0A]/20 to-transparent p-8 md:p-12 rounded-2xl border border-[#F7AB0A]/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Built on Proven Technology</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F7AB0A] rounded-full flex items-center justify-center text-xl md:text-2xl mx-auto mb-4">🧠</div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Machine Learning</h4>
                <p className="text-gray-300 text-xs md:text-sm">Pattern recognition & prediction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F7AB0A] rounded-full flex items-center justify-center text-xl md:text-2xl mx-auto mb-4">☁️</div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Cloud Infrastructure</h4>
                <p className="text-gray-300 text-xs md:text-sm">Scalable & secure processing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F7AB0A] rounded-full flex items-center justify-center text-xl md:text-2xl mx-auto mb-4">🔗</div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">API Integration</h4>
                <p className="text-gray-300 text-xs md:text-sm">Seamless POS connectivity</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F7AB0A] rounded-full flex items-center justify-center text-xl md:text-2xl mx-auto mb-4">🔒</div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Data Security</h4>
                <p className="text-gray-300 text-xs md:text-sm">Enterprise-grade protection</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="text-center"
        >
          <div className="bg-[#292929] rounded-2xl p-8 md:p-12 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the AI revolution in food intelligence. Our three-tier service model adapts to your business needs while maximizing value for all participants.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-colors duration-300">
                Reach Out
              </button>
              <button className="border-2 border-[#F7AB0A] text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AIServices 
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  aiServices: any[]
}

function AIServices({ aiServices }: Props) {
  const aiCapabilities = [
    {
      category: "Real-Time Intelligence",
      icon: "⚡",
      description: "Instant insights from live transaction data",
      metrics: ["Sub-second response", "24/7 monitoring", "Live data streams"]
    },
    {
      category: "Predictive Analytics", 
      icon: "🔮",
      description: "Forecast trends and prevent problems before they occur",
      metrics: ["30-day forecasts", "Trend analysis", "Early warning system"]
    },
    {
      category: "Automated Intelligence",
      icon: "🤖", 
      description: "Self-learning systems that improve with every transaction",
      metrics: ["Zero manual input", "Continuous learning", "Pattern recognition"]
    }
  ];

  const industryProblems = [
    {
      problem: "Restaurant Failure Crisis",
      statistic: "17% fail in year 1, 49% within 5 years",
      solution: "Predictive failure prevention through data insights",
      impact: "Reduce failure rates by identifying problems early"
    },
    {
      problem: "Food Safety Incidents", 
      statistic: "48M Americans get foodborne illness annually",
      solution: "Real-time contamination tracking and alerts",
      impact: "Prevent outbreaks through supply chain monitoring"
    },
    {
      problem: "Food Waste Crisis",
      statistic: "40% of food produced is wasted globally",
      solution: "Demand forecasting and inventory optimization",
      impact: "Reduce waste through predictive ordering"
    },
    {
      problem: "Supply Chain Disruptions",
      statistic: "$74B lost annually to supply issues",
      solution: "Multi-source tracking and alternative routing",
      impact: "Maintain operations during disruptions"
    }
  ];

  const coreServices = [
    {
      title: "POS Acquisition & Integration Platform",
      description: "Strategic acquisition of established POS companies with immediate access to restaurant data",
      features: [
        "Target companies with 100+ restaurant clients",
        "Seamless AI integration into existing systems", 
        "Preserve client relationships during transition",
        "Immediate data access from day one"
      ],
      icon: "🏢"
    },
    {
      title: "Data-for-Discount Intelligence Engine", 
      description: "Revolutionary pricing model where restaurants save money in exchange for data sharing",
      features: [
        "25% discount for anonymized transaction data",
        "50% discount + revenue share for comprehensive data",
        "Complete opt-in/opt-out control",
        "Transparent data usage policies"
      ],
      icon: "💰"
    },
    {
      title: "Health & Safety Intelligence Network",
      description: "AI-powered food safety and health monitoring across the entire food ecosystem",
      features: [
        "Real-time contamination detection",
        "Supply chain traceability",
        "Allergen prevention systems",
        "Health trend analysis"
      ],
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen relative bg-[rgb(36,36,36)] py-20 px-4">
      {/* Background Effects */}
      <div className='w-full absolute top-[20%] bg-[#F7AB0A]/5 left-0 h-[500px] skew-y-12' />
      
      <motion.div 
        initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl mb-8 text-center">
            AI Services
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next-Generation <span className="text-[#F7AB0A]">Food Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Three revolutionary AI services that transform how the food industry operates, from POS acquisition to health monitoring
          </p>
        </div>

        {/* AI Capabilities Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">AI-Powered Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-[#292929] rounded-xl p-8 text-center border border-gray-700 hover:border-[#F7AB0A]/50 transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h4 className="text-xl font-semibold text-[#F7AB0A] mb-4">{capability.category}</h4>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-[#1f1f1f] rounded-lg p-2 text-sm text-white">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industry Problems We Solve */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Industry Problems We Solve</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {industryProblems.map((item, index) => (
              <div key={index} className="bg-[#292929] rounded-xl p-8 border border-gray-700 hover:border-[#F7AB0A]/30 transition-all duration-300">
                <h4 className="text-xl font-bold text-[#F7AB0A] mb-3">{item.problem}</h4>
                <div className="text-red-400 font-semibold mb-4">{item.statistic}</div>
                <div className="text-gray-300 mb-4">{item.solution}</div>
                <div className="text-green-400 font-medium">{item.impact}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core AI Services */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Three Core AI Services</h3>
          <div className="space-y-12">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Service Icon & Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#F7AB0A] to-[#F7AB0A]/70 rounded-full flex items-center justify-center text-6xl">
                      {service.icon}
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#292929] border-2 border-[#F7AB0A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex-1">
                  <div className="bg-[#292929] rounded-2xl p-8 border border-gray-700 hover:border-[#F7AB0A]/30 transition-all duration-300">
                    <h4 className="text-3xl font-bold text-white mb-4">{service.title}</h4>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                    
                    <div>
                      <h5 className="text-xl font-semibold text-[#F7AB0A] mb-4">Core Features</h5>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-[#F7AB0A] rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
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
          initial={{ y: 50, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-[#F7AB0A]/20 to-transparent p-12 rounded-2xl border border-[#F7AB0A]/30">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Built on Proven Technology</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7AB0A] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">🧠</div>
                <h4 className="text-xl font-semibold text-white mb-2">Machine Learning</h4>
                <p className="text-gray-300 text-sm">Pattern recognition & prediction</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7AB0A] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">☁️</div>
                <h4 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h4>
                <p className="text-gray-300 text-sm">Scalable & secure processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7AB0A] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">🔗</div>
                <h4 className="text-xl font-semibold text-white mb-2">API Integration</h4>
                <p className="text-gray-300 text-sm">Seamless POS connectivity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7AB0A] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">🔒</div>
                <h4 className="text-xl font-semibold text-white mb-2">Data Security</h4>
                <p className="text-gray-300 text-sm">Enterprise-grade protection</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-[#292929] rounded-2xl p-12 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the AI revolution in food intelligence. Our three-tier service model adapts to your business needs while maximizing value for all participants.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300">
                Reach Out
              </button>
              <button className="border-2 border-[#F7AB0A] text-[#F7AB0A] hover:bg-[#F7AB0A] hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
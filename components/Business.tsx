import React from 'react'
import { motion } from 'framer-motion'
import { BusinessModel } from '../typings'
import { fadeIn, staggerContainer, optimizedViewport, hoverLift } from '../utils/animations'

type Props = {
  businessModel: BusinessModel
}

function Business({ businessModel }: Props) {
  const valuationMetrics = [
    { label: "TAM (Food Industry Data)", value: "$9.4T", growth: "+6.4% YoY" },
    { label: "Potential POS Acquisitions", value: "2,000+", subtitle: "Food establishments with 50+ clients" },
    { label: "Combined Food Establishments", value: "250K+", subtitle: "Restaurants, grocery, venues, markets" },
    { label: "Data Revenue Potential", value: "$500M+", subtitle: "Annual within 5 years" }
  ];

  const acquisitionStrategy = [
    {
      phase: "Phase 1: Foundation",
      timeline: "0-18 months",
      funding: "$500K-$1.2M Pre-Seed",
      milestones: ["Full-time founders", "AI prototype", "Initial partnerships"],
      icon: "🚀"
    },
    {
      phase: "Phase 2: Strategic Acquisition", 
      timeline: "18-30 months",
      funding: "$50M-$300M Series A",
      milestones: ["First POS acquisition", "100+ food establishment integration", "Data platform launch"],
      icon: "🎯"
    },
    {
      phase: "Phase 3: Market Expansion",
      timeline: "30-42 months", 
      funding: "$1B+ Series B",
      milestones: ["Multi-state presence", "10K+ food establishments", "Partnership ecosystem"],
      icon: "📈"
    }
  ];

  const competitiveAdvantage = [
    {
      title: "Source-Level Data Access",
      description: "Direct POS integration provides highest quality, real-time transaction data",
      impact: "99.7% accuracy vs 60-80% for third-party aggregators"
    },
    {
      title: "Strategic Acquisition Model", 
      description: "Acquire existing POS companies with established food industry relationships",
      impact: "Immediate access to 250K+ food establishments vs years of customer acquisition"
    },
    {
      title: "Data-for-Discount Innovation",
      description: "Revolutionary pricing model: food establishments save 25-50% for data sharing",
      impact: "Reduces business failure rates across the food industry (17% fail year 1, 49% within 5 years)"
    },
    {
      title: "Network Effects Platform",
      description: "More food establishments = better insights = more valuable partnerships",
      impact: "Exponential value growth as platform scales"
    }
  ];

  const marketComparisons = [
    { company: "Toast (POS only)", valuation: "$24.8B", revenue: "$5.2B", note: "Limited to POS services" },
    { company: "Snowflake (Data)", valuation: "$45B+", revenue: "$2.7B", note: "Generic data platform" },
    { company: "Palantir (Analytics)", valuation: "$20B+", revenue: "$2.2B", note: "Government/enterprise focus" },
    { company: "Breme AI (Vision)", valuation: "TBD", revenue: "Pre-revenue", note: "Food industry data monopoly" }
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
          <h3 className="uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl mb-8 text-center">
            Business Strategy
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The <span className="text-[#F7AB0A]">$1 Billion</span> Opportunity
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Strategic POS acquisition combined with AI-powered food intelligence creates the most valuable data platform in the $9.4T food industry
          </p>
          
          {/* Market Scope Clarification */}
          <div className="mt-12 bg-gradient-to-r from-[#F7AB0A]/10 to-blue-500/10 rounded-xl p-6 border border-[#F7AB0A]/20">
            <h4 className="text-2xl font-bold text-[#F7AB0A] mb-4 text-center">
              Beyond Restaurants: Complete Food Industry Domination
            </h4>
            <p className="text-lg text-gray-300 text-center mb-6">
              Our vision encompasses every point where food is sold, creating the ultimate food data monopoly
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-[#292929]/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🍽️</div>
                <div className="text-sm font-semibold text-white">Restaurants</div>
                <div className="text-xs text-gray-400">400K+ in US</div>
              </div>
              <div className="bg-[#292929]/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🛒</div>
                <div className="text-sm font-semibold text-white">Grocery Stores</div>
                <div className="text-xs text-gray-400">63K+ locations</div>
              </div>
              <div className="bg-[#292929]/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🍺</div>
                <div className="text-sm font-semibold text-white">Bars & Pubs</div>
                <div className="text-xs text-gray-400">65K+ venues</div>
              </div>
              <div className="bg-[#292929]/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🏬</div>
                <div className="text-sm font-semibold text-white">Wholesale</div>
                <div className="text-xs text-gray-400">15K+ distributors</div>
              </div>
              <div className="bg-[#292929]/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🌾</div>
                <div className="text-sm font-semibold text-white">Farmers Markets</div>
                <div className="text-xs text-gray-400">8K+ markets</div>
              </div>
              <div className="bg-[#292929]/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🎪</div>
                <div className="text-sm font-semibold text-white">Entertainment</div>
                <div className="text-xs text-gray-400">Venues & Events</div>
              </div>
            </div>
          </div>
        </div>

        {/* Valuation Metrics */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Company Valuation Drivers</h3>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={optimizedViewport}
            className="grid md:grid-cols-4 gap-6"
          >
            {valuationMetrics.map((metric, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                {...hoverLift}
                className="bg-[#292929] rounded-xl p-6 text-center border border-gray-700 hover:border-[#F7AB0A]/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#F7AB0A] mb-2">{metric.value}</div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.growth || metric.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Acquisition Strategy Timeline */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Strategic Acquisition Timeline</h3>
          <div className="space-y-8">
            {acquisitionStrategy.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-[#292929] rounded-xl p-8 hover:bg-[#333333] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-[#F7AB0A] rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
                        {phase.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{phase.phase}</h4>
                        <p className="text-gray-400">{phase.timeline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#F7AB0A]">{phase.funding}</div>
                      <div className="text-sm text-gray-400">Funding Range</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Key Milestones:</h5>
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-[#F7AB0A] rounded-full mr-3 flex-shrink-0" />
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < acquisitionStrategy.length - 1 && (
                  <div className="absolute left-6 -bottom-4 w-0.5 h-8 bg-[#F7AB0A]"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Competitive Advantages</h3>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={optimizedViewport}
            className="grid md:grid-cols-2 gap-8"
          >
            {competitiveAdvantage.map((advantage, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                {...hoverLift}
                className="bg-[#292929] rounded-xl p-8 border border-gray-700 hover:border-[#F7AB0A]/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-[#F7AB0A] mb-4">{advantage.title}</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">{advantage.description}</p>
                <div className="text-green-400 font-semibold">{advantage.impact}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Market Comparison */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Market Valuation Comparison</h3>
          <div className="bg-[#292929] rounded-xl p-8 border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left text-[#F7AB0A] font-semibold py-4">Company</th>
                    <th className="text-left text-[#F7AB0A] font-semibold py-4">Valuation</th>
                    <th className="text-left text-[#F7AB0A] font-semibold py-4">Revenue</th>
                    <th className="text-left text-[#F7AB0A] font-semibold py-4">Key Differentiator</th>
                  </tr>
                </thead>
                <tbody>
                  {marketComparisons.map((company, index) => (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="py-4 text-white font-medium">{company.company}</td>
                      <td className="py-4 text-[#F7AB0A] font-semibold">{company.valuation}</td>
                      <td className="py-4 text-gray-300">{company.revenue}</td>
                      <td className="py-4 text-gray-300">{company.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Investment Thesis */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#F7AB0A]/20 via-transparent to-[#F7AB0A]/20 p-12 rounded-2xl border border-[#F7AB0A]/30">
            <h3 className="text-3xl font-bold text-white mb-6">Why $1B+ Valuation Makes Sense</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-[#F7AB0A] mb-3">Market Size</h4>
                <p className="text-gray-300">$9.4T global food industry with 6.4% annual growth provides massive TAM for data monetization</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#F7AB0A] mb-3">Strategic Moat</h4>
                <p className="text-gray-300">POS acquisition creates immediate market access and source-level data monopoly</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#F7AB0A] mb-3">Network Effects</h4>
                <p className="text-gray-300">More food establishments = better insights = more valuable partnerships = exponential value growth</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#292929] rounded-xl">
              <p className="text-xl text-white font-semibold">
                <span className="text-[#F7AB0A]">Conservative estimate:</span> $5-10B valuation within 5 years based on data revenue alone
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Business 
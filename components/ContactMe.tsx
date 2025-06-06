import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from "react-hook-form"
import { fadeIn, staggerContainer, optimizedViewport, hoverLift } from '../utils/animations'

type Inputs = {
  name: string,
  email: string,
  company: string,
  inquiryType: string,
  message: string,
}

type Props = {}

function ContactMe({ }: Props) {
  const [selectedInquiry, setSelectedInquiry] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // FormSubmit - completely free, no signup required
      const response = await fetch('https://formsubmit.co/info@bremenow.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          inquiry_type: formData.inquiryType,
          message: formData.message,
          _subject: `${formData.inquiryType} Inquiry - ${formData.company}`,
          _template: 'table', // Nice HTML email formatting
          _captcha: 'false' // Disable captcha for API usage
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset(); // Clear the form
        setSelectedInquiry(''); // Clear selected inquiry
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds  
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypes = [
    {
      type: "Investment Opportunity",
      icon: "💰",
      description: "Series A-B funding rounds",
      details: "Join our $1B+ valuation journey"
    },
    {
      type: "Strategic Partnership",
      icon: "🤝",
      description: "Enterprise integrations",
      details: "Access $9.4T food industry data"
    },
    {
      type: "POS Acquisition",
      icon: "🏪",
      description: "Sell your POS company",
      details: "Premium valuations + growth"
    },
    {
      type: "Enterprise Client",
      icon: "🏢",
      description: "Data licensing & analytics",
      details: "Custom intelligence solutions"
    }
  ];

  const stats = [
    { value: "$9.4T", label: "Total Addressable Market" },
    { value: "100+", label: "Target POS Acquisitions" },
    { value: "$1B+", label: "Projected Valuation" },
    { value: "50M+", label: "Restaurant Customers" }
  ];

  return (
    <div className='min-h-[80vh] md:min-h-screen relative flex flex-col text-left max-w-7xl mx-auto items-center py-20 px-6'>
      <motion.h3 
        initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='absolute top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center'
      >
        Get In Touch
      </motion.h3>

      <div className='mt-20 z-20 w-full max-w-6xl'>
        
        {/* Hero Section */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='text-center mb-16'
        >
          <h4 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Ready to Transform the{" "}
            <span className='text-[#F7AB0A]'>$9.4T Food Industry?</span>
          </h4>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
                         Join us in building the central nervous system of food intelligence. Whether you&apos;re an investor, 
             strategic partner, or enterprise client, we have the data and vision to reshape how the world eats.
          </p>
          
          {/* Stats Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-[#F7AB0A]/10 to-green-500/10 rounded-lg p-6 max-w-4xl mx-auto'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='text-center'
              >
                <div className='text-2xl md:text-3xl font-bold text-[#F7AB0A]'>{stat.value}</div>
                <div className='text-xs md:text-sm text-gray-300'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Inquiry Types */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='mb-16'
        >
          <h5 className='text-2xl font-bold text-white mb-8 text-center'>
            How Can We Partner Together?
          </h5>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {inquiryTypes.map((inquiry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onClick={() => setSelectedInquiry(inquiry.type)}
                className={`bg-[#292929] rounded-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                  selectedInquiry === inquiry.type 
                    ? 'border-[#F7AB0A] bg-[#F7AB0A]/5' 
                    : 'border-transparent hover:border-[#F7AB0A]/30'
                }`}
              >
                <div className='text-center'>
                  <div className='text-4xl mb-3'>{inquiry.icon}</div>
                  <h6 className='text-lg font-semibold text-[#F7AB0A] mb-2'>{inquiry.type}</h6>
                  <p className='text-gray-300 text-sm mb-2'>{inquiry.description}</p>
                  <p className='text-green-400 text-xs font-semibold'>{inquiry.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='bg-gradient-to-br from-[#292929] to-[#1f1f1f] rounded-lg p-8 shadow-2xl'
        >
          <div className='flex flex-col lg:flex-row gap-12'>
            
            {/* Left Side - Value Prop */}
            <div className='lg:w-1/2'>
              <h5 className='text-2xl font-bold text-white mb-6'>
                Why Partner with Breme AI?
              </h5>
              
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-[#F7AB0A] rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-black font-bold text-sm'>1</span>
                  </div>
                  <div>
                    <h6 className='font-semibold text-white mb-1'>Source-Level Data Access</h6>
                                         <p className='text-gray-300 text-sm'>Direct POS integration gives us unmatched data quality that competitors can&apos;t access</p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-[#F7AB0A] rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-black font-bold text-sm'>2</span>
                  </div>
                  <div>
                    <h6 className='font-semibold text-white mb-1'>Massive Market Opportunity</h6>
                    <p className='text-gray-300 text-sm'>$9.4T food industry with 1M+ restaurants needing intelligence solutions</p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-[#F7AB0A] rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-black font-bold text-sm'>3</span>
                  </div>
                  <div>
                    <h6 className='font-semibold text-white mb-1'>Strategic Acquisition Model</h6>
                    <p className='text-gray-300 text-sm'>Immediate market access through POS acquisitions vs. years of customer acquisition</p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-[#F7AB0A] rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-black font-bold text-sm'>4</span>
                  </div>
                  <div>
                    <h6 className='font-semibold text-white mb-1'>Network Effects at Scale</h6>
                    <p className='text-gray-300 text-sm'>More data = better insights = more valuable partnerships = exponential growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className='lg:w-1/2'>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Full Name *"
                      type="text"
                      className="w-full bg-[#1a1a1a] rounded-lg border border-gray-600 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-[#F7AB0A] focus:outline-none"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Please enter a valid email'
                        }
                      })}
                      placeholder="Business Email *"
                      type="email"
                      className="w-full bg-[#1a1a1a] rounded-lg border border-gray-600 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-[#F7AB0A] focus:outline-none"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <input
                    {...register('company', { required: 'Company is required' })}
                    placeholder="Company/Organization *"
                    type="text"
                    className="w-full bg-[#1a1a1a] rounded-lg border border-gray-600 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-[#F7AB0A] focus:outline-none"
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                </div>

                <div>
                  <select
                    {...register('inquiryType', { required: 'Please select an inquiry type' })}
                    value={selectedInquiry}
                    onChange={(e) => setSelectedInquiry(e.target.value)}
                    className="w-full bg-[#1a1a1a] rounded-lg border border-gray-600 px-4 py-3 text-white transition-all focus:border-[#F7AB0A] focus:outline-none"
                  >
                    <option value="">Select Inquiry Type *</option>
                    {inquiryTypes.map((inquiry) => (
                      <option key={inquiry.type} value={inquiry.type}>
                        {inquiry.type}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType && <p className="text-red-400 text-xs mt-1">{errors.inquiryType.message}</p>}
                </div>

                <div>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                                         placeholder="Tell us about your goals and how we can work together *"
                    rows={4}
                    className="w-full bg-[#1a1a1a] rounded-lg border border-gray-600 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-[#F7AB0A] focus:outline-none resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    'Start the Conversation'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                    <div className="text-green-400 font-semibold mb-1">✅ Message Sent Successfully!</div>
                    <p className="text-green-300 text-sm">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-center">
                    <div className="text-red-400 font-semibold mb-1">❌ Failed to Send Message</div>
                    <p className="text-red-300 text-sm">Please try again or email us directly at info@bremenow.com</p>
                  </div>
                )}
                
                <p className='text-gray-400 text-xs text-center'>
                  {submitStatus === 'idle' && 'We typically respond within 24 hours for qualified inquiries'}
                </p>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={optimizedViewport}
          className='mt-16 text-center bg-gradient-to-r from-[#F7AB0A]/10 to-green-500/10 rounded-lg p-8'
        >
          <h5 className='text-2xl font-bold text-white mb-4'>
            Ready to Build the Future of Food Intelligence?
          </h5>
          <p className='text-lg text-gray-300 mb-6 max-w-3xl mx-auto'>
            Join industry leaders who are already partnering with us to unlock unprecedented insights 
            from the world&apos;s largest source-level food dataset.
          </p>
          <div className='flex flex-wrap justify-center gap-4 text-sm text-gray-400'>
            <span>📧 info@bremenow.com</span>
            <span>📞 Investor Hotline: Available upon request</span>
            <span>🌍 Reno • Remote</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactMe

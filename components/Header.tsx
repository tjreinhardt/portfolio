import React, { useState, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import { Social } from "../typings"

type Props = {
  socials: Social[]
  onLogout?: () => void
}

function Header({ socials, onLogout }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const [autoHideTimer, setAutoHideTimer] = useState<NodeJS.Timeout | null>(null);

  const navigationItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#ai-services", label: "AI Services" },
    { href: "#business", label: "Business Model" },
    { href: "#data-applications", label: "Data Applications" },
    { href: "#customers", label: "Customer Benefits" },
    { href: "#privacy", label: "Privacy & Security" },
    { href: "#launch", label: "Timeline" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isNowScrolled = scrollPosition > 50;
      setIsScrolled(isNowScrolled);
      
      // Always show navbar initially, then auto-hide on desktop after delay
      if (isNowScrolled && !isHoveringTop && window.innerWidth >= 1024) {
        if (autoHideTimer) clearTimeout(autoHideTimer);
        setAutoHideTimer(setTimeout(() => {
          if (!isHoveringTop) setShowNavbar(false);
        }, 3000)); // Hide after 3 seconds on desktop
      } else {
        setShowNavbar(true);
        if (autoHideTimer) {
          clearTimeout(autoHideTimer);
          setAutoHideTimer(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (autoHideTimer) clearTimeout(autoHideTimer);
    };
  }, [isHoveringTop, autoHideTimer]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle navbar hover and interaction
  const handleNavbarEnter = () => {
    setIsHoveringTop(true);
    setShowNavbar(true);
    if (autoHideTimer) {
      clearTimeout(autoHideTimer);
      setAutoHideTimer(null);
    }
  };

  const handleNavbarLeave = () => {
    setIsHoveringTop(false);
    // Start auto-hide timer if scrolled and on desktop
    if (isScrolled && window.innerWidth >= 1024) {
      setAutoHideTimer(setTimeout(() => {
        setShowNavbar(false);
      }, 2000));
    }
  };

  const handleTopAreaHover = () => {
    if (isScrolled && !showNavbar) {
      setShowNavbar(true);
      setIsHoveringTop(true);
    }
  };

  return (
    <>
      {/* Invisible hover area at top of screen */}
      <div 
        className='fixed top-0 left-0 right-0 h-20 z-40 pointer-events-auto'
        onMouseEnter={handleTopAreaHover}
        onMouseLeave={() => setIsHoveringTop(false)}
      />

      {/* Header */}
      <motion.header 
        initial={{ y: 0 }}
        animate={{ 
          y: showNavbar ? 0 : -100,
          opacity: showNavbar ? 1 : 0.95
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        onMouseEnter={handleNavbarEnter}
        onMouseLeave={handleNavbarLeave}
        className={`fixed top-0 left-0 right-0 p-3 md:p-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[rgb(36,36,36)]/96 backdrop-blur-md shadow-lg border-b border-[#F7AB0A]/20' 
            : 'bg-transparent'
        }`}
      >
        <div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
          {/* Left side: Social Icons + Logo */}
          <div className='flex items-center space-x-4'>
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className='flex flex-row items-center'
            >
              <div className='flex space-x-1'>
                {socials.slice(0, 3).map((social) => (
                  <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor="gray"
                    bgColor="transparent"
                    className="!h-7 !w-7 md:!h-8 md:!w-8 hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </motion.div>

            {/* Breme Logo */}
            <motion.div
              initial={{
                x: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1
              }}
              className='hidden md:block'
            >
              <Link href="#hero">
                <div className='relative w-16 h-8 cursor-pointer hover:opacity-80 transition-opacity'>
                  <Image 
                    src='/breme-logo.png'
                    alt='Breme AI'
                    fill
                    className='object-contain'
                  />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation Menu */}
          <motion.nav
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className='hidden lg:flex flex-row items-center space-x-2 xl:space-x-3 text-gray-300 text-xs uppercase tracking-wide'
          >
            {navigationItems.slice(0, -1).map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className='hover:text-[#F7AB0A] transition-all duration-200 cursor-pointer px-2 py-1.5 rounded hover:bg-[#F7AB0A]/10 whitespace-nowrap text-center'
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            {onLogout && (
              <button
                onClick={onLogout}
                className='bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 text-black px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 whitespace-nowrap ml-2'
              >
                Logout
              </button>
            )}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={toggleMenu}
            className='lg:hidden flex flex-col justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer z-50 relative'
            aria-label="Toggle navigation menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className='block w-6 h-0.5 bg-gray-300 mb-1'
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='block w-6 h-0.5 bg-gray-300 mb-1'
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className='block w-6 h-0.5 bg-gray-300'
            />
          </motion.button>

          {/* Desktop Contact Button */}
          <Link href="#contact" className="hidden lg:block">
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-row items-center text-gray-300 cursor-pointer hover:text-[#F7AB0A] transition-colors group'
            >
              <SocialIcon
                className='cursor-pointer !h-7 !w-7 xl:!h-8 xl:!w-8 group-hover:opacity-75 transition-opacity'
                network="email"
                fgColor='gray'
                bgColor='transparent'
              />
              <p className='uppercase ml-2 text-xs xl:text-sm text-gray-400 whitespace-nowrap'>
                Get In Touch
              </p>
            </motion.div>
          </Link>
        </div>
      </motion.header>

      {/* Mobile/Tablet Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black/60 z-40 lg:hidden'
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className='fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[rgb(36,36,36)] z-50 lg:hidden shadow-2xl border-l border-gray-600'
            >
              <div className='flex flex-col h-full'>
                {/* Menu Header */}
                <div className='flex items-center justify-between p-4 md:p-6 border-b border-gray-600'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-8 h-8 bg-[#F7AB0A] rounded-full flex items-center justify-center'>
                      <span className='text-black font-bold text-sm'>B</span>
                    </div>
                    <h3 className='text-[#F7AB0A] font-bold text-lg'>Menu</h3>
                  </div>
                  <button
                    onClick={closeMenu}
                    className='text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700'
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className='flex-1 px-4 md:px-6 py-4 overflow-y-auto'>
                  <ul className='space-y-2'>
                    {navigationItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          delay: index * 0.08,
                          duration: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className='block py-3 px-4 text-gray-300 hover:text-[#F7AB0A] hover:bg-[#F7AB0A]/10 rounded-lg transition-all duration-200 uppercase tracking-wide text-sm font-medium border border-transparent hover:border-[#F7AB0A]/20'
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                    {onLogout && (
                      <motion.li
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          delay: navigationItems.length * 0.08,
                          duration: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <button
                          onClick={() => {
                            onLogout();
                            closeMenu();
                          }}
                          className='w-full text-left py-3 px-4 bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 text-black rounded-lg transition-all duration-200 uppercase tracking-wide text-sm font-semibold border border-transparent'
                        >
                          Logout
                        </button>
                      </motion.li>
                    )}
                  </ul>
                </nav>

                {/* Social Links Footer */}
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className='p-4 md:p-6 border-t border-gray-600 bg-[#292929]'
                >
                  <p className='text-gray-400 text-xs uppercase tracking-wider mb-3'>Connect With Us</p>
                  <div className='flex space-x-2 justify-start'>
                    {socials.map((social) => (
                      <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                        className="!h-8 !w-8 hover:opacity-75 transition-opacity"
                      />
                    ))}
                  </div>
                  <div className='mt-4 pt-3 border-t border-gray-600'>
                    <p className='text-xs text-gray-500'>
                      Breme AI • Food Intelligence Platform
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

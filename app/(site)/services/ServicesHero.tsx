'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = ['Innovate', 'Analyze', 'Optimize', 'Transform']

export default function ServicesHero() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 relative dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            We help you
            <div className="relative h-20 md:h-24 overflow-hidden">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  className={`absolute inset-0 flex justify-center items-center text-blue-600`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ 
                    y: currentWord === index ? 0 : -50, 
                    opacity: currentWord === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering businesses with cutting-edge solutions and expert consulting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#services" 
              className="inline-block rounded-full font-semibold transition-colors bg-black px-4 py-4 text-white duration-500 ease-in-out hover:bg-transparent hover:text-black hover:border border-black dark:hover:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,0 C75,50 25,50 0,100 Z"
            fill="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Code } from 'lucide-react'
import { Card, CardContent } from './ui/card'

interface ServicesProps {
  mousePosition: { x: number; y: number }
}

const Services: React.FC<ServicesProps> = ({ mousePosition }) => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies including React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'WebApp Development',
      description: 'Full-stack web applications with robust backend systems, databases, and seamless user experiences.',
      features: ['Full Stack Solutions', 'API Integration', 'Database Design', 'User Authentication'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using Flutter and React Native for iOS and Android.',
      features: ['Cross Platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
      color: 'from-green-500 to-teal-500',
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to bring your ideas to life with 
            cutting-edge development and data science expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="h-full border-2 border-transparent hover:border-gradient-to-r hover:from-blue-500/50 hover:to-teal-500/50 transition-all duration-300 overflow-hidden relative">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  animate={{
                    x: (mousePosition.x - window.innerWidth / 2) * 0.01,
                    y: (mousePosition.y - window.innerHeight / 2) * 0.01,
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                />
                
                <CardContent className="p-6 relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:shadow-lg transition-shadow`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl mb-3 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-lg transition-colors duration-300"
                    whileHover={{
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)',
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to bring your project to life?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-shadow"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
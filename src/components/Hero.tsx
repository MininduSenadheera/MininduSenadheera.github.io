import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Instagram, Facebook } from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'

interface HeroProps {
  mousePosition: { x: number; y: number }
}

const ROLES = ['Data Scientist', 'Software Engineer', 'Traveller']

const TypewriterText: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && currentText === currentRole) {
      setIsPaused(true)
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length)
      return
    }

    if (isPaused) return

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1))
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentRoleIndex, isPaused])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="text-xl text-muted-foreground flex items-center gap-2"
    >
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        className="text-blue-500"
      >
        |
      </motion.span>
      {currentText === 'Traveller' && (
        <MapPin size={20} className="text-blue-500 ml-2" />
      )}
    </motion.div>
  )
}

const Hero: React.FC<HeroProps> = ({ mousePosition }) => {
  const techIcons = [
    { name: 'React', x: '10%', y: '20%' },
    { name: 'Python', x: '80%', y: '30%' },
    { name: 'TypeScript', x: '20%', y: '70%' },
    { name: 'AWS', x: '90%', y: '60%' },
    { name: 'Node.js', x: '15%', y: '40%' },
    { name: 'Flutter', x: '85%', y: '80%' },
  ]

  const socialLinks = [
    { icon: Mail, href: 'mailto:minindusenadheera@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/minindu', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/minindu', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/minindu_senadheera', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/minindu.senadheera', label: 'Facebook' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.4), 
            rgba(20, 184, 166, 0.3), 
            rgba(147, 197, 253, 0.2),
            transparent 60%)`
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 15 }}
      />
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 0.8}px, 
            rgba(99, 102, 241, 0.3), 
            rgba(59, 130, 246, 0.2),
            transparent 50%)`
        }}
        transition={{ type: 'spring', stiffness: 25, damping: 20 }}
      />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x * 1.2}px ${mousePosition.y * 1.2}px, 
            rgba(168, 85, 247, 0.2), 
            rgba(59, 130, 246, 0.15),
            transparent 40%)`
        }}
        transition={{ type: 'spring', stiffness: 60, damping: 30 }}
      />
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute text-blue-500/30 pointer-events-none z-10"
          style={{
            left: tech.x,
            top: tech.y,
          }}
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * (0.02 + index * 0.005),
            y: (mousePosition.y - window.innerHeight / 2) * (0.02 + index * 0.005),
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        >
          <span className="text-2xl opacity-70">{tech.name}</span>
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl mb-4">Hi there, I'm{' '}</h1>
            <motion.h1
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 30px rgba(59, 130, 246, 0.8)',
                filter: 'brightness(1.3)',
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl cursor-pointer font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Minindu Senadheera
            </motion.h1>
          </motion.div>
          <TypewriterText />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-md"
          >
            <p>
              Passionate about creating innovative solutions through data science and full-stack development.
              Currently pursuing excellence in technology while exploring the world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-muted hover:bg-blue-500 hover:text-white transition-colors relative z-30"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-96 h-96">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="relative w-full h-full"
              animate={{
                y: (mousePosition.y - window.innerHeight / 2) * 0.01,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
                whileHover={{
                  borderColor: 'rgba(59, 130, 246, 0.4)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)',
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-4 rounded-xl overflow-hidden bg-white/80 backdrop-blur-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
                <div className="relative w-full h-full p-3">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="/images/ProfilePic.png"
                      alt="Minindu Senadheera"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-3 -right-3 w-5 h-5 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-3 h-3 bg-blue-400 rounded-full"
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

              {/* Subtle Corner Accent */}
              <motion.div
                className="absolute top-8 right-8 w-10 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 1, delay: 1.5 }}
              />

              <motion.div
                className="absolute bottom-8 left-8 w-1 h-10 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </motion.div>

            {/* Ambient Light Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
              whileHover={{
                opacity: 1,
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)',
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import MouseFollower from './components/MouseFollower'

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <MouseFollower mousePosition={mousePosition} />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />
      <Navigation />
      <main>
        <Hero mousePosition={mousePosition} />
        <About />
        <Services mousePosition={mousePosition} />
        <Projects />
        <TechStack />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}
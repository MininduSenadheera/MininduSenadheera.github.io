import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/minindu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/minindu', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:minindu@example.com', label: 'Email' },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-medium mb-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Minindu Senadheera
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full Stack Software Engineer & Data Scientist passionate about creating 
              innovative solutions and exploring new technologies while traveling the world.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Bandaragama, Sri Lanka</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-muted-foreground hover:text-blue-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Minindu Senadheera. All rights reserved.</span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Minindu Senadheera</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
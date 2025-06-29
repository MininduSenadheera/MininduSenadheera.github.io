import { motion } from 'framer-motion'
import {
  Database,
  Cloud,
  Code2,
  Server,
  Container,
  Smartphone,
  Globe,
  Layers,
  GitBranch,
  Palette,
  Zap,
  Monitor,
  Terminal,
  FileCode,
  Cpu,
  HardDrive
} from 'lucide-react'

const TechStack = () => {
  const technologies = [
    { name: 'React', color: '#61DAFB', icon: Code2 },
    { name: 'Node.js', color: '#339933', icon: Server },
    { name: 'TypeScript', color: '#3178C6', icon: FileCode },
    { name: 'Python', color: '#3776AB', icon: Terminal },
    { name: 'Java', color: '#007396', icon: Cpu },
    { name: 'Flutter', color: '#02569B', icon: Smartphone },
    { name: 'Docker', color: '#2496ED', icon: Container },
    { name: 'AWS', color: '#FF9900', icon: Cloud },
    { name: 'Azure', color: '#0078D4', icon: Cloud },
    { name: 'MongoDB', color: '#47A248', icon: Database },
    { name: 'Firebase', color: '#FFCA28', icon: Zap },
    { name: 'PostgreSQL', color: '#336791', icon: Database },
    { name: 'MySQL', color: '#4479A1', icon: HardDrive },
    { name: 'Redis', color: '#DC382D', icon: Database },
    { name: 'Git', color: '#E10098', icon: GitBranch },
    { name: 'Next.js', color: '#000000', icon: Globe },
    { name: 'Nest.js', color: '#4FC08D', icon: Code2 },
    { name: 'Tailwind', color: '#06B6D4', icon: Palette },
    { name: 'Material UI', color: '#007FFF', icon: Layers },
    { name: 'Bootstrap', color: '#7952B3', icon: Monitor },
  ]

  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <section className="py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life, from frontend frameworks
            to cloud platforms and everything in between.
          </p>
        </motion.div>
        <div className="relative mb-8">
          <motion.div
            animate={{
              x: [0, -50 * technologies.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex gap-8 mb-8"
          >
            {duplicatedTechnologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 w-24 h-24 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center group border border-border"
                >
                  <div className="text-center">
                    <div
                      className="w-8 h-8 mx-auto mb-2 rounded-md flex items-center justify-center"
                      style={{ color: tech.color }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            animate={{
              x: [-50 * technologies.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
            className="flex gap-8"
          >
            {duplicatedTechnologies.reverse().map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={`${tech.name}-reverse-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 w-24 h-24 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center group border border-border"
                >
                  <div className="text-center">
                    <div
                      className="w-8 h-8 mx-auto mb-2 rounded-md flex items-center justify-center"
                      style={{ color: tech.color }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            {
              title: 'Frontend',
              techs: ['React', 'Next', 'TypeScript', 'Tailwind'],
              color: 'from-blue-500 to-cyan-500',
              icon: Monitor,
            },
            {
              title: 'Backend',
              techs: ['Node.js', 'NestJS', 'Python', 'Java'],
              color: 'from-green-500 to-teal-500',
              icon: Server,
            },
            {
              title: 'Database',
              techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
              color: 'from-purple-500 to-pink-500',
              icon: Database,
            },
            {
              title: 'Cloud & DevOps',
              techs: ['AWS', 'Docker', 'Firebase', 'GCP'],
              color: 'from-orange-500 to-red-500',
              icon: Cloud,
            },
          ].map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <CategoryIcon className="text-white" size={20} />
                </div>
                <h3 className="font-medium mb-2">{category.title}</h3>
                <div className="text-sm text-muted-foreground">
                  {category.techs.join(' | ')}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const About = () => {
  const highlights = [
    { icon: '💻', text: 'Full Stack Development' },
    { icon: '📊', text: 'Data Science & Analytics' },
    { icon: '🌍', text: 'Travel Enthusiast' },
    { icon: '🚀', text: 'Innovation Focused' },
    { icon: '🤝', text: 'Team Collaboration' },
    { icon: '🎓', text: 'Continuous Learner' },
  ]

  const works = [
    {
      role: 'Senior Software Engineer',
      company: 'ZeroBeta',
      period: '2025 July - Present',
      location: 'Toronto, Canada'
    },
    {
      role: 'Software Engineer',
      company: 'PSHA',
      period: '2024 July - 2025 June',
      location: 'New York, USA'
    },
    {
      role: 'Software Engineer / Data Scientist',
      company: 'Sling Mobility',
      period: '2023 May - 2024 June',
      location: 'Colombo, Sri Lanka'
    },
    {
      role: 'Intern Data Scientist',
      company: 'Sling Mobility',
      period: '2022 November - 2023 May',
      location: 'Colombo, Sri Lanka'
    }
  ]

  const educations = [
    {
      degree: 'BSc (hons) IT specialised in Data Science',
      institution: 'Sri Lanka Institute of Information Technology',
      period: '2020 - 2024'
    },
    {
      degree: 'Secondary Education',
      institution: "S.Thomas' College Mount Lavinia",
      period: '2017-2019'
    },
    {
      degree: 'Diploma in IT',
      institution: "ESOFT Metro Campus",
      period: '2016 - 2017'
    },
    {
      degree: 'Primary Education',
      institution: 'Ashoka College Horana',
      period: '2004-2016'
    }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm a dedicated Full Stack Software Engineer and Data Scientist with a passion for transforming complex problems into elegant solutions. My journey in technology began with curiosity and has evolved into expertise across multiple domains. When I'm not coding, you'll find me exploring new destinations, capturing moments through photography, and learning about different cultures around the world.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <span className="text-2xl">{highlight.icon}</span>
                <span className="text-sm">{highlight.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-500" />
                Carrier Journey
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500" />
                <div className="space-y-8">
                  {works.map((work, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="relative pl-12"
                    >
                      <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-background" />
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{work.role}</h4>
                            <span className="text-sm text-muted-foreground">{work.period}</span>
                          </div>
                          <div className="flex gap-4">
                            <p className="text-muted-foreground">{work.company}</p>
                            <div className="flex items-center gap-2">
                              <MapPin className="text-blue-500" size={16} />
                              <span className="text-sm">{work.location}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <GraduationCap className="text-blue-500" />
                Education Journey
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500" />
                <div className="space-y-8">
                  {educations.map((education, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="relative pl-12"
                    >
                      <div className="absolute left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-background" />
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{education.degree}</h4>
                            <span className="text-sm text-muted-foreground">{education.period}</span>
                          </div>
                          <p className="text-muted-foreground">{education.institution}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Code, Database, Smartphone } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ImageWithFallback } from './ImageWithFallback'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Artigala Ayurveda',
      category: 'E-commerce',
      description: 'Comprehensive e-commerce platform with payment integration and invoice system',
      fullDescription: 'A full-featured e-commerce platform for Ayurvedic products featuring secure payment processing, buy now pay later options, automated invoice generation, inventory management, and customer portal. Built with modern web technologies for optimal performance.',
      image: '/projects/ArtigalaAyurveda.png',
      techStack: ['React', 'Typescript', 'Firebase'],
      features: ['Payment Gateway', 'Invoice System', 'Inventory Management'],
      liveUrl: 'https://artigalaayurveda.com',
      type: 'fullstack',
    },
    {
      id: 2,
      title: 'Portfolio for UI/UX Designer',
      category: 'Portfolio',
      description: 'Personal portfolio website showcasing UI/UX design projects',
      fullDescription: 'A sleek and modern portfolio website designed for a UI/UX designer, featuring interactive project showcases, case studies, and a contact form. Built with responsive design principles to ensure optimal viewing on all devices.',
      image: '/projects/Ashen.png',
      techStack: ['React', 'Typescript'],
      features: ['Responsive Design', 'Interactive Projects', 'Case Studies'],
      liveUrl: 'https://ashen-ravisara.github.io',
      type: 'web'
    },
    {
      id: 3,
      title: 'Website for travel agency',
      category: 'Website',
      description: 'A visually appealing website for a travel agency',
      fullDescription: 'A visually appealing website for a travel agency, featuring destination showcases, booking forms, and customer testimonials. Designed to attract and engage potential travelers with stunning visuals and easy navigation.',
      techStack: ['React', 'Typescript'],
      features: ['Responsive Design', 'Adventure Packages', 'Booking System'],
      liveUrl: 'https://blootoursandtourism.com',
      type: 'web'
    },
    {
      id: 4,
      title: 'FieldR Cricket Analytics',
      category: 'Sports Analytics',
      description: 'Advanced cricket analytics and match organizing app ',
      fullDescription: 'Mobile application providing comprehensive cricket analytics including player statistics, match organising, digital score sheet and performance insights. Features real-time data processing and intuitive visualizations for cricket enthusiasts.',
      image: '/projects/fieldr.png',
      techStack: ['React', 'NodeJS', 'AWS', 'MongoDB'],
      features: ['Real-time Analytics', 'Player Statistics', 'Data Visualization', 'Digital Score Sheet', 'Match Organizing'],
      liveUrl: 'https://community.fieldr.lk',
      type: 'mobile'
    },
    {
      id: 5,
      title: 'Sumangala College OBA',
      category: 'Community',
      description: 'Old Boys Association management system',
      fullDescription: 'Comprehensive management system for the Old Boys Association including member management, event organization, communication tools, and donation tracking.',
      image: '/projects/Sumangala.png',
      techStack: ['React', 'Node.js', 'MongoDB', 'AWS'],
      features: ['Member Management', 'Event Organization', 'Communication Tools', 'Donation Tracking'],
      liveUrl: 'https://m.sumangalaoba.com',
      type: 'fullstack'
    },
    {
      id: 6,
      title: 'Website for Aenigm3Labs',
      category: 'Website',
      description: 'Website for Aenigm3Labs, a tech company',
      fullDescription: 'Professional website for Aenigm3Labs showcasing their services, projects, and company information. Features a modern design with responsive layout and easy navigation.',
      image: '/projects/aenigme.png',
      techStack: ['React', 'Typescript', 'AWS'],
      features: ['Responsive Design', 'Service Showcase', 'Project Portfolio'],
      liveUrl: 'https://aenigm3labs.com',
      type: 'web'
    },
    {
      id: 7,
      title: 'Website for Sling Mobility',
      category: 'Website',
      description: 'Website for Sling Mobility, a EV company',
      fullDescription: 'Professional website for Sling Mobility showcasing their electric vehicle products, services, and company information. Features a modern design with responsive layout and easy navigation.',
      image: '/projects/sling.png',
      techStack: ['React', 'Typescript', 'GCP'],
      features: ['Responsive Design', 'Service Showcase', 'Product Portfolio'],
      liveUrl: 'https://slingmobility.com',
      type: 'web'
    },
    {
      id: 8,
      title: 'Aspirus Health Care',
      category: 'Healthcare',
      description: 'Complete healthcare management system with web and mobile applications',
      fullDescription: 'Integrated healthcare management system featuring patient management, appointment scheduling, medical records, and telemedicine capabilities. Available on both web and mobile platforms.',
      image: '/projects/AspirusHealthCare.png',
      techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL'],
      features: ['Patient Management', 'Appointment System', 'Medical Records', 'Telemedicine'],
      liveUrl: '#',
      type: 'fullstack'
    },
    {
      id: 9,
      title: 'Airbnb Price Predictor',
      category: 'Data Science',
      description: 'Machine learning model for predicting Airbnb rental prices',
      fullDescription: 'Advanced machine learning model that predicts Airbnb rental prices based on location, amenities, and market conditions. Includes data visualization dashboard and API for integration.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'React'],
      features: ['Price Prediction', 'Market Analysis', 'Data Visualization', 'API Integration'],
      liveUrl: '#',
      type: 'data'
    },
    {
      id: 10,
      title: 'DWBI Projects',
      category: 'Business Intelligence',
      description: 'Data warehouse and business intelligence solutions',
      fullDescription: 'Comprehensive data warehousing and business intelligence solutions including ETL processes, data modeling, and interactive dashboards for business decision making.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      techStack: ['SQL Server', 'Power BI', 'SSIS', 'Python'],
      features: ['ETL Processes', 'Data Modeling', 'Interactive Dashboards', 'Reporting'],
      liveUrl: '#',
      type: 'data'
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'web': return <Code className="w-4 h-4" />
      case 'mobile': return <Smartphone className="w-4 h-4" />
      case 'data': return <Database className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'web': return 'from-blue-500 to-cyan-500'
      case 'mobile': return 'from-green-500 to-teal-500'
      case 'data': return 'from-purple-500 to-pink-500'
      case 'fullstack': return 'from-orange-500 to-red-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, mobile applications,
            and data science solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title} style={{ height: 250 }}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(project.type)} text-white text-xs flex items-center gap-1`}>
                      {getTypeIcon(project.type)}
                      {project.category}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  if (!project) return null
                  return (
                    <div>
                      <div className="relative">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(project.type)} text-white text-sm flex items-center gap-1`}>
                            {getTypeIcon(project.type)}
                            {project.category}
                          </div>
                        </div>
                        <h3 className="text-2xl mb-4">{project.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.fullDescription}
                        </p>
                        <div className="mb-6">
                          <h4 className="text-lg mb-3">Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getTypeColor(project.type)}`} />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="text-lg mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-muted rounded-md text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button
                          className="flex-1 w-full"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Project
                        </Button>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
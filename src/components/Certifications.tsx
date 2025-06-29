import { motion } from 'framer-motion'
import { ImageWithFallback } from './ImageWithFallback'

const Certifications = () => {
  const certifications = [
    '/certificates/Azure Fundamentals.png',
    '/certificates/Great Learning Python for machine learning.jpg',
    '/certificates/microsoft-certified-azure-fundamentals.png',
    '/certificates/Python_for_Beginners_E-Certificate.jpg',
    '/certificates/Udemy Automate boring stuff with python.jpg',
    '/certificates/One Month Learn JavaScript Certificate.jpg',
    '/certificates/One Month Learn jQuery Certificate.jpg',
    '/certificates/One Month Learn SQL Certificate.jpg',
    '/certificates/One Month Learn WordPress  Certificate.jpg',
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise across cloud platforms,
            data engineering, and modern development technologies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {certifications.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={certificate} alt={certificate}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-blue-500/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
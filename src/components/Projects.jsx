import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Notescope - HackPSU 2024',
      description: 'AI-powered notebook app with real-time transcription & intelligent Q&A. Built with Next.js, OpenAI API, and Firebase during a 24-hour hackathon.',
      technologies: ['Next.js', 'Node.js', 'Firebase', 'MongoDB', 'OpenAI API'],
      image: '📝',
      link: 'https://devpost.com/software/notescope',
      color: 'from-blue-500 to-cyan-500',
      award: 'Peraton Challenge Winner',
    },
    {
      title: 'Seeker - Design Showcase',
      description: 'AI-powered detection system reducing airport debris response time from 30+ minutes to under 5 minutes. Built with YOLOv8 & Raspberry Pi.',
      technologies: ['YOLOv8', 'Python', 'Raspberry Pi', 'Computer Vision'],
      image: '🔍',
      link: null,
      color: 'from-purple-500 to-pink-500',
      award: 'Most Innovative Solution',
    },
    {
      title: 'Solar-Powered Poultry Health Monitoring',
      description: 'CNN-based computer vision system for automated poultry health monitoring. Trained models using optical & thermal imaging with real-time inference.',
      technologies: ['CNN', 'Python', 'Computer Vision', 'Raspberry Pi', 'TensorFlow'],
      image: '🐔',
      link: 'https://sites.psu.edu/lfshowcasefa25/2025/12/10/solar-powered-poultry-health-monitoring-device/',
      color: 'from-green-500 to-emerald-500',
      award: 'Best Innovation Award',
    },
  ]

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 relative z-10">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="relative z-10">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-2"></div>
            <motion.div
              className="w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"
              animate={{
                width: ['48px', '96px', '48px'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-xl overflow-hidden h-full card-hover flex flex-col relative group/card border border-white/10">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500/50 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500/50 rounded-br-xl"></div>
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover/card:from-purple-500/30 group-hover/card:to-pink-500/30 transition-all duration-300"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover/card:opacity-20 blur-xl transition-opacity duration-300"
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <motion.div 
                    className="absolute inset-0 bg-black/20 group-hover/card:bg-black/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.span 
                    className="relative z-10 drop-shadow-2xl"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                  >
                    {project.image}
                  </motion.span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <h3 className="text-2xl font-bold text-white flex-1 min-w-0">{project.title}</h3>
                      {project.award && (
                        <motion.span 
                          className="px-3 py-1.5 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-semibold relative overflow-hidden whitespace-nowrap flex-shrink-0"
                          animate={{
                            boxShadow: [
                              '0 0 10px rgba(251, 191, 36, 0.5)',
                              '0 0 20px rgba(251, 191, 36, 0.8)',
                              '0 0 10px rgba(251, 191, 36, 0.5)',
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.span
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="relative z-10 flex items-center gap-1">
                            <span>🏆</span>
                            <span>{project.award}</span>
                          </span>
                        </motion.span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/70 transition-all relative overflow-hidden group/btn"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                      />
                      <motion.span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <FaExternalLinkAlt className="relative z-10" />
                      </motion.span>
                      <span className="relative z-10">View Project</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


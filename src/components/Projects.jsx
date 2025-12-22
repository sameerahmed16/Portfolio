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
      description: 'Awarded Peraton Challenge Most Creative Implementation of Generative AI. Developed an AI-powered notebook application leveraging OpenAI API, Next.js, Node.js, Firebase, and MongoDB to deliver real-time lecture transcription, AI-driven summarization, and intelligent Q&A support during a 24-hour hackathon.',
      technologies: ['Next.js', 'Node.js', 'Firebase', 'MongoDB', 'OpenAI API'],
      image: '📝',
      link: 'https://devpost.com/software/notescope',
      color: 'from-blue-500 to-cyan-500',
      award: 'Peraton Challenge Winner',
    },
    {
      title: 'Seeker - Design Showcase',
      description: 'Awarded Most Innovative Solution. Engineered an AI-powered Foreign Object Detection and Removal system using YOLOv8, Raspberry Pi, real-time object tracking, alerting system, and depth mapping, reducing airport debris response time from over 30 minutes to under 5 minutes.',
      technologies: ['YOLOv8', 'Python', 'Raspberry Pi', 'Computer Vision'],
      image: '🔍',
      link: null,
      color: 'from-purple-500 to-pink-500',
      award: 'Most Innovative Solution',
    },
    {
      title: 'Solar-Powered Poultry Health Monitoring',
      description: 'Awarded Best Innovation in Agricultural Sciences. Built and trained CNN-based computer vision models for automated poultry health detection using optical and thermal image data, developing data preprocessing workflows, labeling strategies, training, and real-time inference pipelines.',
      technologies: ['CNN', 'Python', 'Computer Vision', 'Raspberry Pi', 'TensorFlow'],
      image: '🐔',
      link: 'https://sites.psu.edu/lfshowcasefa25/2025/12/10/solar-powered-poultry-health-monitoring-device/',
      color: 'from-green-500 to-emerald-500',
      award: 'Best Innovation Award',
    },
  ]

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass rounded-xl overflow-hidden h-full card-hover flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <span className="relative z-10">{project.image}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    {project.award && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-semibold">
                        🏆 {project.award}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      <FaExternalLinkAlt /> View Project
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


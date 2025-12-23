import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'ITCON Services',
      location: 'Vienna, VA',
      period: 'Jun 2025 - Aug 2025',
      description: [
        'Designed Power Apps solutions reducing manual data entry by 40%+',
        'Integrated Power Platform with SharePoint & Dataverse for scalable workflows',
        'Delivered user-friendly apps with 50+ trained end-users',
      ],
    },
    {
      title: 'Intern',
      company: 'Contour Software',
      location: 'Karachi, Pakistan',
      period: 'Jul 2024 - Aug 2024',
      description: [
        'Built team selection model optimizing 100+ athlete combinations',
        'Collaborated with QA using Agile & Jira for sprint management',
      ],
    },
    {
      title: 'IT User Support Specialist',
      company: 'Pennsylvania State University',
      location: 'State College, PA',
      period: 'Dec 2023 - Present',
      description: [
        'Resolved 20+ weekly tech issues with 95%+ satisfaction rate',
        'Managed Windows & macOS systems using ServiceNow & Office 365',
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 14, repeat: Infinity }}
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
            <span className="text-gradient">Experience</span>
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Enhanced Timeline dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      '0 0 0px rgba(168, 85, 247, 0.5)',
                      '0 0 15px rgba(168, 85, 247, 0.8)',
                      '0 0 0px rgba(168, 85, 247, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 group ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="glass rounded-xl p-6 card-hover relative overflow-hidden border border-white/10"
                  >
                    {/* Left border accent */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-l-xl"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg relative overflow-hidden"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <FaBriefcase className="text-white text-xl relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white">{exp.title}</h3>
                        <p className="text-xl text-purple-400 mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt /> {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt /> {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="text-gray-300 flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span 
                            className="text-purple-400 mt-1"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          >
                            ▹
                          </motion.span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


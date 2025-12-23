import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact,
  FaNode,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiMicrosoftazure,
  SiAmazonaws,
  SiGooglecloud,
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: FaJava, level: 90, color: 'text-orange-500' },
        { name: 'JavaScript', icon: FaJs, level: 90, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: SiTypescript, level: 85, color: 'text-blue-500' },
        { name: 'C/C++', icon: FaJs, level: 85, color: 'text-blue-400' },
        { name: 'Python', icon: FaPython, level: 85, color: 'text-yellow-400' },
        { name: 'SQL', icon: SiPostgresql, level: 80, color: 'text-blue-500' },
        { name: 'HTML/CSS', icon: FaHtml5, level: 95, color: 'text-orange-400' },
        { name: 'R', icon: FaPython, level: 75, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: FaReact, level: 90, color: 'text-blue-400' },
        { name: 'Next.js', icon: SiNextdotjs, level: 85, color: 'text-gray-400' },
        { name: 'Node.js', icon: FaNode, level: 88, color: 'text-green-500' },
        { name: 'Express', icon: SiExpress, level: 85, color: 'text-gray-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'text-cyan-400' },
        { name: 'Firebase', icon: SiFirebase, level: 85, color: 'text-orange-400' },
        { name: 'OpenAI API', icon: FaPython, level: 80, color: 'text-green-400' },
        { name: 'YOLOv8', icon: FaPython, level: 85, color: 'text-purple-400' },
      ],
    },
    {
      title: 'Cloud Platforms & Tools',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, level: 80, color: 'text-orange-500' },
        { name: 'Azure', icon: SiMicrosoftazure, level: 85, color: 'text-blue-500' },
        { name: 'GCP', icon: SiGooglecloud, level: 75, color: 'text-blue-400' },
        { name: 'Git', icon: FaGitAlt, level: 90, color: 'text-orange-500' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: 'text-blue-500' },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-44 h-44 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.28, 0.15],
            x: [0, -35, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 13, repeat: Infinity }}
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
            <span className="text-gradient">Skills</span>
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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-purple-400 relative inline-block"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 0.8)',
                    '0 0 10px rgba(168, 85, 247, 0.5)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {category.title}
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -8, rotate: [0, -3, 3, 0] }}
                      className="glass rounded-xl p-6 card-hover relative overflow-hidden group border border-white/10"
                    >
                      {/* Corner accent */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
                      
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300"
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="flex items-center gap-4 mb-4 relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className={`text-3xl ${skill.color}`} />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                          <div className="mt-2 bg-gray-700 rounded-full h-2.5 overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.3 }}
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                            >
                              <motion.div
                                className="absolute inset-0 bg-white/30"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                              />
                            </motion.div>
                          </div>
                          <span className="text-sm text-gray-400 mt-1 font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaAward, FaBook } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = {
    degree: 'Bachelor of Science in Computer Science',
    minor: 'Minor in Engineering Leadership Development',
    university: 'The Pennsylvania State University',
    location: 'University Park',
    graduation: 'Expected Graduation: May 2026',
    gpa: 'GPA: 3.75/4.00',
    awards: [
      'Most Innovative Solution Award Winner 2025',
      'HackPSU 2024 Winner',
      'President Walker Award Recipient',
    ],
    coursework: [
      'Object Oriented Design',
      'Software Design',
      'Digital Design',
      'Programming in C++',
      'Data Structures and Algorithms',
      'Artificial Intelligence',
      'Computer Organization and Design',
      'Systems Programming',
      'Project Management',
      'Networks',
    ],
  }

  return (
    <section id="education" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            <span className="text-gradient">Education</span>
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

        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass rounded-xl p-8 card-hover relative overflow-hidden group"
          >
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className="flex items-start gap-4 mb-6">
              <motion.div 
                className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <FaGraduationCap className="text-white text-2xl" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-white">{education.university}</h3>
                <p className="text-lg text-purple-400 mb-1">{education.degree}</p>
                <p className="text-gray-300 mb-2">{education.minor}</p>
                <p className="text-gray-400 text-sm mb-2">{education.location}</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                    {education.graduation}
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm text-pink-300">
                    {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div 
              className="glass rounded-xl p-6 card-hover relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all duration-300"
              />
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <FaAward className="text-yellow-400 text-xl" />
                </motion.div>
                <h4 className="text-xl font-bold text-white">Awards & Honors</h4>
              </div>
              <ul className="space-y-2">
                {education.awards.map((award, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-yellow-400 mt-1">🏆</span>
                    <span>{award}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="glass rounded-xl p-6 card-hover relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"
              />
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaBook className="text-blue-400 text-xl" />
                </motion.div>
                <h4 className="text-xl font-bold text-white">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education


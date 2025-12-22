import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <img 
                  src="/profile-picture.jfif" 
                  alt="Sameer Ahmed" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science student at The Pennsylvania State University, expected to graduate in May 2026, 
              with a passion for building innovative software solutions. My journey combines academic excellence (GPA: 3.75/4.00) 
              with hands-on experience in software development, AI, and full-stack technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I've had the privilege of working as a Software Development Intern at ITCON Services, where I designed 
              and deployed Microsoft Power Apps solutions that reduced manual data entry by over 40%. I'm also currently 
              serving as an IT User Support Specialist at Penn State, providing technical support with a 95%+ user satisfaction rate.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My projects have been recognized with awards including the Most Innovative Solution Award 2025, HackPSU 2024 Winner, 
              and the Peraton Challenge Most Creative Implementation of Generative AI. When I'm not coding, I'm representing 
              Penn State as a Global Ambassador and playing cricket as a National Champion.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {['AI & Machine Learning', 'Full-Stack Development', 'Problem Solving', 'Innovation'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 glass rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, 30, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-36 h-36 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
            y: [0, -40, 0],
          }}
          transition={{ duration: 9, repeat: Infinity }}
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
            <span className="text-gradient">About Me</span>
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="glass rounded-2xl p-8 card-hover relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-0 hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative z-10">
                <motion.img 
                  src="/profile-picture.jfif" 
                  alt="Sameer Ahmed" 
                  className="w-full h-full object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass rounded-xl p-6 card-hover relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <p className="text-lg text-gray-200 leading-relaxed relative z-10">
                I'm a senior Computer Science major at Penn State with a minor in Engineering Leadership Development, passionate about building technology that solves real-world problems. My experience spans software development, AI, automation, and IT systems, with hands-on work across industry, research, and campus operations. I've contributed to impactful projects for organizations like FEMA and led award-winning initiatives in AI and robotics. Driven by curiosity and collaboration, I enjoy creating efficient, user-focused solutions that make a meaningful impact.
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-4 mt-6">
              {['AI & ML', 'Full-Stack', 'Problem Solving', 'Innovation'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-5 py-2.5 glass rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all cursor-default"
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


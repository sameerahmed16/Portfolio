import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/sameerahmed16', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sameerahmed16', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sameerahmed0016@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>
      
      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl opacity-20"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)'
              : 'radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent)',
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 300],
            y: [0, (Math.random() - 0.5) * 300],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">👋</span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 relative"
        >
          <motion.span
            className="text-gradient animate-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] inline-block"
            animate={{
              filter: [
                'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))',
                'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))',
                'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Sameer Ahmed
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl mb-4 text-gray-300 relative"
          animate={{
            textShadow: [
              '0 0 10px rgba(168, 85, 247, 0.3)',
              '0 0 20px rgba(236, 72, 153, 0.5)',
              '0 0 10px rgba(168, 85, 247, 0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Computer Science Student & Software Developer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Crafting innovative AI & full-stack solutions
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold shadow-lg hover:shadow-purple-500/70 transition-all relative overflow-hidden group glow-purple"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Get In Touch
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="/SameerAhmed_Resume.pdf"
            download
            className="px-8 py-3 glass rounded-full font-semibold flex items-center gap-2 hover:bg-white/30 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaDownload />
            </motion.div>
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-20"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-gray-400 hover:text-purple-400 transition-all relative group"
              aria-label={label}
            >
              <motion.div
                className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Icon className="relative z-10" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.a 
            href="#about" 
            className="text-gray-400 hover:text-purple-400 transition-colors block"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HiArrowDown className="text-4xl drop-shadow-lg" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    { icon: FaEnvelope, text: 'sameerahmed0016@gmail.com', href: 'mailto:sameerahmed0016@gmail.com' },
    { icon: FaPhone, text: '(814) 812-5644', href: 'tel:+18148125644' },
    { icon: FaMapMarkerAlt, text: 'State College, PA', href: null },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sameerahmed16', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/sameerahmed16', label: 'GitHub' },
  ]

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
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
            <span className="text-gradient">Get In Touch</span>
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

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-6 text-white text-center"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 0.8)',
                    '0 0 10px rgba(168, 85, 247, 0.5)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href || undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className={`flex items-center gap-4 glass rounded-lg p-4 card-hover relative overflow-hidden group ${
                        info.href ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"
                        animate={{ 
                          x: ['-100%', '100%'],
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                      <motion.div 
                        className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg relative z-10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-white text-xl" />
                      </motion.div>
                      <span className="text-gray-300 relative z-10">{info.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div>
              <motion.h3 
                className="text-2xl font-bold mb-6 text-white text-center"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 0.8)',
                    '0 0 10px rgba(168, 85, 247, 0.5)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                Connect With Me
              </motion.h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -8, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 glass rounded-lg text-2xl text-gray-400 hover:text-purple-400 transition-colors relative group/social overflow-hidden"
                    aria-label={label}
                  >
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover/social:opacity-100 transition-opacity"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <Icon className="relative z-10" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16 text-gray-400"
      >
        <p>© {new Date().getFullYear()} Sameer Ahmed. All rights reserved.</p>
      </motion.div>
    </section>
  )
}

export default Contact


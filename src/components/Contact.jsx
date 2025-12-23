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
    <section id="contact" ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Contact Information</h3>
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
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Connect With Me</h3>
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
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 glass rounded-lg text-2xl text-gray-400 hover:text-purple-400 transition-colors"
                    aria-label={label}
                  >
                    <Icon />
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


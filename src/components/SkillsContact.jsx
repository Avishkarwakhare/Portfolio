import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Instagram, Twitter } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import girlImg from '../assets/girl.png'

const socials = [
  { icon: Mail, href: 'mailto:avishkarwakhare@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/avishkar-wakhare/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Avishkarwakhare', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/_inventi0n/?hl=en', label: 'Instagram' },
]

export default function SkillsContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const response = await fetch('https://formspree.io/f/mnjgeqbl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ submitting: false, submitted: false, error: 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message.' })
    }
  }

  return (
    <div className="w-full relative z-20 py-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mt-8 mb-16 overflow-visible">
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full lg:w-[50%] items-center lg:items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-row lg:flex-col gap-6 lg:gap-8 lg:py-8 lg:pr-8 lg:border-r border-white/10"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors p-2 lg:p-0"
              title={social.label}
            >
              <social.icon size={26} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex-1 flex flex-col relative z-20 bg-[#0d071a] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl"
        >
          <div className="flex flex-col gap-2 w-full mb-6 relative">
            <div className="absolute -left-48 top-0 w-[1200px] h-72 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/10 to-transparent blur-[140px] -z-10 pointer-events-none" />
            
            <h2 className="text-gray-400 font-medium tracking-widest text-xs uppercase">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-[2.8rem] font-bold text-white tracking-tighter">Contact.</h3>
          </div>

          {status.submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4 items-center justify-center py-12 text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              <Button 
                variant="outline" 
                onClick={() => setStatus({ ...status, submitted: false })}
                className="mt-4 border-white/10 text-white hover:bg-white/5"
              >
                Send another message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-[0.95rem] font-bold tracking-wide text-white">Your Name</label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name" 
                  className="bg-[#1a1233] border-transparent h-12 rounded-xl text-base text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-white/20 transition-all" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.95rem] font-bold tracking-wide text-white">Your email</label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address" 
                  className="bg-[#1a1233] border-transparent h-12 rounded-xl text-base text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-white/20 transition-all" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.95rem] font-bold tracking-wide text-white">Your Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..." 
                  rows={3} 
                  className="bg-[#1a1233] border-transparent resize-none rounded-xl text-base text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-white/20 p-4 transition-all" 
                />
              </div>
              <Button 
                type="submit"
                disabled={status.submitting}
                size="lg" 
                className="rounded-xl w-max px-8 h-11 text-sm font-bold mt-2 bg-white text-black hover:bg-gray-200 transition-colors shadow-none border-0 disabled:opacity-50"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </Button>
              {status.error && <p className="text-red-400 text-sm mt-2">{status.error}</p>}
            </form>
          )}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full lg:w-[50%] relative flex justify-center items-center h-[400px] md:h-[550px] pointer-events-none"
      >
        <div className="w-full h-full relative flex items-center justify-center p-4 lg:p-8 mt-4 lg:mt-0 z-[-2]">
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/15 to-blue-500/15 rounded-full blur-[100px] -z-10" />
          
          <img 
            src={girlImg} 
            alt="Girl Illustration" 
            className="animation w-full max-w-[550px] scale-[1.1] lg:scale-115 origin-center object-contain drop-shadow-[0_20px_60px_rgba(168,85,247,0.3)] filter brightness-110 contrast-105"
          />
        </div>
      </motion.div>

    </div>
  )
}



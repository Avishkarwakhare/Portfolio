import { motion } from 'framer-motion'
import heroImg from '../assets/photo.png'

export default function Overview() {
  return (
    <div className="w-full relative z-20 flex flex-col gap-24 font-jakarta">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 flex flex-col relative"
        >
        
          <div className="absolute -left-48 top-0 w-[1200px] h-72 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/10 to-transparent blur-[140px] -z-10 pointer-events-none" />
          
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">INTRODUCTION</p>
          <h2 className="text-6xl md:text-[5.5rem] font-bold text-white mb-8 tracking-tighter">Overview.</h2>
          <p className="text-lg md:text-[1.1rem] text-muted-foreground leading-[1.8] font-medium max-w-[42rem]">
              I’m a passionate frontend developer with expertise in React.js, JavaScript (ES6+), HTML5, CSS3, and the MERN stack.
              I specialize in building responsive, user‑friendly web applications and delivering seamless experiences across devices.
              With experience in integrating REST APIs, modular microservices, and scalable deployments, I enjoy creating impactful
              solutions that combine performance with great design. I’m a quick learner who thrives on solving problems and turning
              ideas into polished, real‑world applications!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-2/5 relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-sm relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10" />
            
            {/* <div className="relative aspect-[3/4] p-[2px] bg-gradient-to-br from-purple-500/50 via-transparent to-blue-500/50 rounded-[3rem] overflow-hidden backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-[#0a0a0c]/80 -z-10" />
              <img 
                src={heroImg} 
                alt="Your Photo" 
                className="w-full h-full object-cover rounded-[2.9rem] opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-purple-400/50 rounded-tl-xl" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-blue-400/50 rounded-br-xl" />
            </div> */}

            {/* <div className="absolute -bottom-6 -right-6 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-white/70 uppercase tracking-tighter">Availability: Open</span>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


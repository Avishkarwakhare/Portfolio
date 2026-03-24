import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const techIcons = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", className: "invert opacity-90" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"  },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"  },
  // { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  // { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", className: "invert opacity-90" },
  // { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  // { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "MYSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", className: "invert opacity-90" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Vercel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", className: "invert opacity-90" },
]

export default function TechStack() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-20%" })

  return (
    <div className="w-full relative z-20 flex flex-col justify-center min-h-screen py-32 overflow-visible" ref={containerRef}>
      
      <div className="flex flex-col gap-2 mb-20 w-full relative z-10 text-center lg:text-left px-4 lg:px-0 overflow-visible">
        <div className="absolute -left-48 top-0 w-[1200px] h-72 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/10 to-transparent blur-[140px] -z-10 pointer-events-none" />
        
        <h2 className="text-muted-foreground font-mono tracking-widest text-sm uppercase">TECH</h2>
        <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">Skills.</h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-12 md:gap-20 max-w-5xl mx-auto relative z-20 px-4 mt-8">
        {techIcons.map((icon, idx) => (
          <motion.div 
            key={`${icon.name}-${isInView}`}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.05 }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.6}
            dragTransition={{ power: 0.2, timeConstant: 8000, bounceStiffness: 40, bounceDamping: 0.5 }}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            className="relative flex items-center justify-center p-2 rounded-2xl cursor-grab hover:scale-110 transition-transform duration-300 group z-10 hover:z-50"
          >
            <motion.div
              animate={{ 
                y: [0, -12, 12, 0],
                rotate: [0, 6, -6, 0]
              }}
              transition={{ 
                duration: 10 + (idx % 5), 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="relative flex flex-col items-center"
            >
              <img 
                src={icon.url} 
                alt={icon.name} 
                className={`w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] pointer-events-none transition-all duration-300 ${icon.className || ""}`}
                draggable="false"
              />
              
              <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/20 rounded-full text-white pointer-events-none whitespace-nowrap shadow-xl">
                {icon.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

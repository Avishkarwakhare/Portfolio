import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link2, Github } from 'lucide-react'

// Projects data featuring images, bulleted formats, and tags
const projects = [
  {
    id: 1,
    title: "Markdown Blog Platform",
    image: "/markblog_dash.png",
    summary: "A robust full-stack blogging platform that allows users to write, edit, and publish blogs smoothly using Markdown.",
    features: [
      "User authentication using JWT with secure login sessions.",
      "Real-time split-screen Markdown editing with live HTML preview rendering.",
      "AI-driven PDF-to-Markdown document converter for instant content migration.",
      "Optimized dark mode interface for writers."
    ],
    tags: [
      { name: "react", color: "#61dafb" },
      { name: "nodejs", color: "#339933" },
      { name: "mongodb", color: "#47a248" },
      { name: "express", color: "#a855f7" }
    ],
    link: "https://markblogy.vercel.app/",
    github: "https://github.com/Avishkarwakhare/Blogging-Platform"
  },
  {
    id: 2,
    title: "Exam Paper Generator",
    image: "/exam.png",
    summary: "A comprehensive educational management system allowing teachers to dynamically create question banks and assign exams.",
    features: [
      "Teacher dashboard for managing classes, students, and robust question banks.",
      "Advanced AI-based automated multiple-choice question generation from raw text.",
      "Randomized test parameters dynamically generated to prevent cheating.",
      "Automated evaluation and grading exports."
    ],
    tags: [
      { name: "react", color: "#61dafb" },
      { name: "ai-integration", color: "#ff4d4f" },
      { name: "tailwindcss", color: "#38bdf8" }
    ],
    link: "https://github.com/Avishkarwakhare/Exam-paper-generator",
    github: "https://github.com/Avishkarwakhare/Exam-paper-generator"
  },
  {
    id: 3,
    title: "Live Sports Scoreboard",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2605",
    summary: "A dynamic real-time sports scoreboard application showing live scores, detailed match updates, and player statistics for major cricket and football leagues.",
    features: [
      "Real-time live score updates utilizing Rapid API for extreme low latency.",
      "Detailed player statistics and dynamic historical match viewer.",
      "Fully responsive mobile-friendly UI layout.",
      "Continuous long-polling integration for non-stop streaming data."
    ],
    tags: [
      { name: "javascript", color: "#f7df1e" },
      { name: "php", color: "#777bb4" },
      { name: "mysql", color: "#4479a1" }
    ],
    link: "https://github.com/Avishkarwakhare/live-scoreboard",
    github: "https://github.com/Avishkarwakhare/live-scoreboard"
  }
]

function ProjectCard({ project, index }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      className="w-full relative group"
    >
      <div
        className="w-full relative bg-[#0a0618]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 md:p-10 hover:border-white/10 transition-colors duration-500 shadow-[0_0_50px_-20px_rgba(0,0,0,0.5)] flex flex-col group-hover:bg-[#0c0822]/60"
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
      >
        <div style={{ transform: "translateZ(50px)" }} className="flex items-center gap-3 mb-6 w-full relative z-20">
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">{project.title}</h3>
          <Link2 className="text-neutral-500 w-5 h-5 md:w-6 md:h-6 mt-1" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between mb-8 w-full relative z-20">

          <div
            style={{ transform: "translateZ(40px)" }}
            className="w-full md:flex-1 aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] relative border border-white/5 group-hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div
            style={{ transform: "translateZ(60px)" }}
            className="flex flex-row md:flex-col gap-4 shrink-0"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0c0822] border border-[#a855f7]/50 flex items-center justify-center text-[#a855f7] hover:bg-[#a855f7] hover:text-white transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <Link2 className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0c0822] border border-[#a855f7]/50 flex items-center justify-center text-[#a855f7] hover:bg-[#a855f7] hover:text-white transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col relative z-20 w-full">
          <p style={{ transform: "translateZ(30px)" }} className="text-base md:text-lg text-neutral-300 mb-6 font-medium leading-relaxed max-w-4xl">
            {project.summary}
          </p>

          <ul style={{ transform: "translateZ(25px)" }} className="list-disc list-outside text-[0.95rem] md:text-[1.05rem] text-neutral-400 ml-5 space-y-2 mb-8 marker:text-neutral-600 font-light tracking-wide max-w-4xl">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <div style={{ transform: "translateZ(35px)" }} className="flex flex-wrap gap-4 mt-auto">
            {project.tags.map(tag => (
              <span key={tag.name} className="text-sm md:text-base font-bold font-mono tracking-tight" style={{ color: tag.color }}>
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="w-full flex flex-col relative z-20 py-24 min-h-screen">

      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col mb-16 md:mb-24 px-2 relative"
      >
        <div className="absolute -left-48 top-0 w-[1200px] h-72 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/10 to-transparent blur-[140px] -z-10 pointer-events-none" />

        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">MY WORK</p>
        <h2 className="text-6xl md:text-[5.5rem] font-bold text-white mb-8 tracking-tighter">Projects.</h2>
        <p className="text-lg md:text-[1.1rem] text-muted-foreground leading-[1.8] font-medium max-w-[48rem]">
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it.
          It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-32 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link2, Github, X, ExternalLink } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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

function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0a0618] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0618] via-transparent to-transparent md:hidden" />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto max-h-[60vh] md:max-h-none">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
              
              <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                {project.summary}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-neutral-400 text-sm flex gap-2">
                      <span className="text-[#a855f7] mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span
                    key={tag.name}
                    className="px-3 py-1 rounded-full text-xs font-mono border border-white/5"
                    style={{ color: tag.color, backgroundColor: `${tag.color}10` }}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  <Github className="w-5 h-5" />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="w-full flex flex-col relative z-20 py-16 min-h-[50vh]">
      {/* Background Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col mb-12 md:mb-16 px-4 relative"
      >
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">MY WORK</p>
        <h2 className="text-6xl md:text-[5.5rem] font-bold text-white mb-8 tracking-tighter">Projects.</h2>
        <p className="text-lg md:text-[1.1rem] text-muted-foreground leading-[1.8] font-medium max-w-[48rem]">
          Following projects showcases my skills and experience through real-world examples of my work.
          Click on any project to see detailed information and links.
        </p>
      </motion.div>

      <div className="w-full px-4 overflow-visible">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper !pb-14"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!w-[300px] md:!w-[500px]"
              onClick={() => handleProjectClick(project)}
            >
              <div className="group relative w-full aspect-[4/5] md:aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/5 cursor-pointer hover:border-white/20 transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                  <div className="flex items-center gap-2 text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #a855f7 !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background-image: none !important;
          background: rgba(0,0,0,0.5) !important;
        }
      `}} />
    </div>
  )
}

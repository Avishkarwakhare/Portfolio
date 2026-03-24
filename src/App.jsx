import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import CosmicBackground from './components/CosmicBackground'
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame, AnimatePresence } from 'framer-motion'
import { Eye, Download } from 'lucide-react'

import Projects from './components/Projects'
import Overview from './components/Overview'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Training from './components/Training'
import Certifications from './components/Certifications'
import SkillsContact from './components/SkillsContact'
import heroImg from './assets/user.svg'

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({ children, baseVelocity = 0.5 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef(-1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * Math.abs(baseVelocity) * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * Math.abs(velocityFactor.get()) * 0.1;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 flex whitespace-nowrap flex-nowrap w-full items-center">
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

function App() {
  const [showResumeOptions, setShowResumeOptions] = useState(false)
  const resumeRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target)) {
        setShowResumeOptions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-clip">
      <div className="fixed top-0 left-0 w-full h-screen z-0 bg-black pointer-events-none">
        <CosmicBackground />
      </div>

      <main className="relative z-10 w-full flex flex-col items-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
        <div className="absolute top-[40vh] left-[-200px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />

        <header className="w-full max-w-7xl flex justify-between items-center p-6 lg:px-12 absolute top-0 z-50">
          <div className="font-black text-2xl tracking-tighter">
            <span className="text-purple-500">A</span>VISHKAR
          </div>
          <nav className="flex gap-8 text-[16px] font-semibold text-muted-foreground items-center tracking-wide">
            <div className="relative" ref={resumeRef}>
              <button 
                onClick={() => setShowResumeOptions(!showResumeOptions)}
                className="hover:text-foreground transition-colors py-2 uppercase"
              >
                Resume
              </button>
              <AnimatePresence>
                {showResumeOptions && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-[100]"
                  >
                    <div className="p-2 flex flex-col gap-1">
                      <a 
                        href="/resume.pdf" 
                        target="_blank"
                        className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-xl transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                          <Eye size={20} />
                        </div>
                        <span className="text-white font-semibold">View</span>
                      </a>
                      <a 
                        href="/resume.pdf" 
                        download
                        className="flex items-center gap-4 px-4 py-3 hover:bg-white/10 rounded-xl transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                          <Download size={20} />
                        </div>
                        <span className="text-white font-semibold">Download</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#about" className="hover:text-foreground transition-colors uppercase">About</a>
            <a href="#work" className="hover:text-foreground transition-colors uppercase">Work</a>
            <a href="#contact" className="hover:text-foreground transition-colors uppercase">Contact</a>
          </nav>
        </header>

        <section id="hero" className="w-full max-w-7xl h-screen max-h-[1100px] min-h-[700px] flex flex-col justify-center px-6 lg:px-12 relative">

          <div className="relative z-40 w-full lg:w-3/5 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              className="flex flex-col z-40 pointer-events-none mt-[-25%]"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">
                Hi, I'm
              </h2>
              <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                Avishkar<span className="text-white animate-pulse">.</span>
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-[15%] md:bottom-[15%] right-[-10%] md:right-[-5%] lg:right-[0%] w-[90%] md:w-[70%] lg:w-[750px] z-20 pointer-events-none"
          >
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-[100px] -z-10" />
            <img
              src={heroImg}
              alt="Hero Avatar"
              className="animation w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.4)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-0 md:bottom-4 left-1/2 -translate-x-1/2 w-screen overflow-hidden py-0 pointer-events-none select-none z-10"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <ParallaxText baseVelocity={6}>
              {[...Array(4)].map((_, i) => (
                <p key={i} className="text-[90px] md:text-[130px] lg:text-[180px] font-bold tracking-tighter whitespace-nowrap m-0 pr-8 lg:pr-16 text-[#a19fb9] opacity-[0.25]">
                  Full-Stack Developer.
                </p>
              ))}
            </ParallaxText>
          </motion.div>

        </section>

        <section id="about" className="w-full max-w-7xl px-6 lg:px-12 pt-12 pb-24 flex flex-col items-center relative z-20">
          <Overview />
        </section>

        <section id="tech-stack" className="w-full max-w-7xl px-6 lg:px-12 flex flex-col items-center relative z-20">
          <TechStack />
        </section>

        <section id="work" className="w-full max-w-7xl min-h-screen px-6 lg:px-12 py-24 flex flex-col items-center relative z-20">
          <Projects />
        </section>

        <section id="education" className="w-full max-w-7xl px-6 lg:px-12 flex flex-col items-center relative z-20">
          <Education />
        </section>

        <section id="training" className="w-full max-w-7xl px-6 lg:px-12 flex flex-col items-center relative z-20">
          <Training />
        </section>

        <section id="certifications" className="w-full max-w-7xl px-6 lg:px-12 flex flex-col items-center relative z-20">
          <Certifications />
        </section>

        <section id="contact" className="w-full max-w-7xl px-6 lg:px-12 flex flex-col items-center relative z-20">
          <SkillsContact />
        </section>
      </main>
    </div>
  )
}

export default App

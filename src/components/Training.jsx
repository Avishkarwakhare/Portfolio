import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'

export default function Training() {
  return (
    <div className="w-full relative z-20 flex flex-col gap-16 py-24">
      <div className="flex flex-col gap-2 relative">
        <div className="absolute -left-48 top-0 w-[1200px] h-72 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/10 to-transparent blur-[140px] -z-10 pointer-events-none" />

        <h2 className="text-pink-400 font-mono tracking-widest text-sm uppercase">/// TRAINING.LOG</h2>
        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Experience.</h3>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full p-8 md:p-12 rounded-[2rem] bg-pink-950/20 border border-pink-500/20 backdrop-blur-lg shadow-[0_0_40px_-10px_rgba(236,72,153,0.15)] flex flex-col gap-8 hover:border-pink-500/40 transition-colors"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 border-b border-pink-500/10 pb-8 font-jakarta">
          <div>
            <h4 className="text-3xl lg:text-4xl font-bold text-white mb-3">Data Structure And Algorithm Using Python</h4>
            <p className="text-2xl text-pink-300/80 font-light">CSE Pathshala</p>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <span className="px-5 py-2.5 bg-pink-500/10 text-pink-300 font-mono tracking-wider rounded-xl border border-pink-500/30 w-fit whitespace-nowrap">
              June '25 – July '25
            </span>
            <a 
              href="https://drive.google.com/file/d/1V_x3o4TuwvggVU7EkgWsGoyskqozuSKr/view?pli=1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10 h-11 px-6 rounded-xl flex items-center gap-2"
              >
                View Certificate
                <ExternalLink size={16} />
              </Button>
            </a>
          </div>
        </div>
        <ul className="list-disc list-outside text-lg lg:text-xl text-white/70 space-y-4 ml-6 marker:text-pink-500 font-light leading-relaxed">
          <li>Learned core DSA concepts in Python, including lists, sets, and searching techniques.</li>
          <li>Improved understanding of algorithmic thinking and efficient data handling.</li>
          <li>Built skills in writing clean, structured, and optimized Python code using OOP principles.</li>
        </ul>
      </motion.div>
    </div>
  )
}

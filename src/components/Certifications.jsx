import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const certs = [
  { name: "Privacy And Security In Social Media", issuer: "NPTEL", date: "Nov' 25", link: "https://drive.google.com/file/d/1311fLa5xCkFJnf9wg9fik7LNSoewZ2Py/view" },
  { name: "Master Generative AI & Generative AI tools", issuer: "Udemy", date: "Aug' 25", link: "https://drive.google.com/file/d/1wrKMTgNws3HUsgoEyOXnbnnLXYBLXo2g/view" },
  { name: "Responsive Web Design", issuer: "Free Code Camp", date: "Oct' 23", link: "https://www.freecodecamp.org/certification/fcc4b82ae45-bbc7-45f4-a983-00069a301da9/responsive-web-design" }
]

export default function Certifications() {
  return (
    <div className="w-full relative z-20 flex flex-col gap-16 py-24">
      <div className="flex flex-col gap-2 relative">
        <div className="absolute -left-48 top-0 w-[1200px] h-72 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/10 to-transparent blur-[140px] -z-10 pointer-events-none" />

        <h2 className="text-blue-400 font-mono tracking-widest text-sm uppercase">/// CERTIFICATIONS.LOG</h2>
        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Credentials.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 md:p-10 rounded-[2rem] bg-[#0c0822] border border-blue-500/20 hover:border-blue-400/60 transition-all duration-500 flex flex-col gap-6 group hover:-translate-y-2 shadow-xl hover:shadow-blue-500/10"
          >
            
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 border border-blue-500/20">
              <svg xmlns="http://www.w3.org/-2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white leading-tight min-h-[60px]">{cert.name}</h4>
            <div className="mt-8 pt-6 flex flex-col gap-6 border-t border-white/5">
              <div className="flex justify-between items-end">
                <span className="text-blue-300 font-medium text-lg">{cert.issuer}</span>
                <span className="text-muted-foreground font-mono">{cert.date}</span>
              </div>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 rounded-xl bg-blue-500/10 text-blue-400 font-semibold flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition-all duration-300 group/btn"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

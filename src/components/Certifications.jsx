import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Medal, Calendar, ShieldCheck } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const certs = [
  { name: "OCI 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "Mar 2026", link: "https://drive.google.com/file/d/1X5dX3JAk8oWcnoV6PSJb_0pumRYC3zhP/view?usp=sharing" },
  { name: "Privacy And Security In Social Media", issuer: "NPTEL", date: "Nov 2025", link: "https://drive.google.com/file/d/1311fLa5xCkFJnf9wg9fik7LNSoewZ2Py/view" },
  { name: "Master Generative AI & Generative AI tools", issuer: "Udemy", date: "Aug 2025", link: "https://drive.google.com/file/d/1wrKMTgNws3HUsgoEyOXnbnnLXYBLXo2g/view" },
  { name: "The Bits and Bytes of Computer Networking", issuer: "Google", date: "Sep 2024", link: "https://drive.google.com/file/d/1keLJGaX8FS0YVKZnMWxurWOCzxd_48QE/view?usp=sharing" },
  { name: "Introduction to Hardware and Operating Systems", issuer: "IBM", date: "Sep 2024", link: "https://drive.google.com/file/d/1HypoMX3fRWn1PEoAnsE1cNZxF9K8rAoL/view?usp=sharing" },
  { name: "Responsive Web Design", issuer: "Free Code Camp", date: "Oct 2023", link: "https://www.freecodecamp.org/certification/fcc4b82ae45-bbc7-45f4-a983-00069a301da9/responsive-web-design" }
]

function CertModal({ cert, isOpen, onClose }) {
  if (!cert) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            className="relative w-full max-w-lg bg-[#0c0822] border border-blue-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white mt-5 mr-3"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center gap-6 relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <Medal className="w-10 h-10" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white tracking-tight">{cert.name}</h3>
                <div className="flex flex-col items-center gap-2">
                   <div className="flex items-center gap-2 text-blue-300 font-medium text-xl">
                      <ShieldCheck className="w-5 h-5" />
                      {cert.issuer}
                   </div>
                   <div className="flex items-center gap-2 text-muted-foreground font-mono">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                   </div>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 my-2" />

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCertClick = (cert) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  return (
    <div className="w-full relative z-20 flex flex-col gap-16 py-24">
      <div className="flex flex-col gap-2 relative px-4">
        <div className="absolute -left-48 top-0 w-[1200px] h-72 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/10 to-transparent blur-[140px] -z-10 pointer-events-none" />

        <h2 className="text-blue-400 font-mono tracking-widest text-sm uppercase">/// CERTIFICATIONS.LOG</h2>
        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Credentials.</h3>
      </div>

      <div className="w-full px-4">
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
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="certSwiper !pb-14"
        >
          {certs.map((cert, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[300px] md:!w-[400px]"
              onClick={() => handleCertClick(cert)}
            >
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#0c0822] border border-blue-500/20 hover:border-blue-400/60 transition-all duration-500 flex flex-col gap-8 group cursor-pointer shadow-xl hover:shadow-blue-500/20 h-[350px] justify-center items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 border border-blue-500/20 shadow-lg">
                  <Medal className="w-10 h-10" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white leading-tight min-h-[60px] group-hover:text-blue-300 transition-colors">{cert.name}</h4>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-blue-400/80 font-medium">{cert.issuer}</span>
                    <span className="text-muted-foreground/60 font-mono text-sm">{cert.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Details</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <CertModal
        cert={selectedCert}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .certSwiper .swiper-pagination-bullet {
          background: rgba(59, 130, 246, 0.2) !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          transition: all 0.3s ease !important;
        }
        .certSwiper .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
      `}} />
    </div>
  )
}

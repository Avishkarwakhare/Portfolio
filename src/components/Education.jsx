import { motion } from 'framer-motion'

const education = [
  {
    degree: "Bachelor of Technology | Computer Science and Engineering",
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    date: "Aug 2023 - Present",
    score: "CGPA: 7.19"
  },
  {
    degree: "Intermediate",
    school: "Army Public School",
    location: "Ambala Cantt, Haryana",
    date: "Apr 2022 - Mar 2023",
    score: "Percentage: 71%"
  },
  {
    degree: "Matriculation",
    school: "Army Public School",
    location: "Ambala Cantt, Haryana",
    date: "Apr 2020 - Mar 2021",
    score: "Percentage: 88%"
  }
]

export default function Education() {
  return (
    <div className="w-full relative z-20 flex flex-col gap-16 py-24">
      <div className="flex flex-col gap-2 relative">

        <div className="absolute -left-48 top-0 w-[1200px] h-72 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/10 to-transparent blur-[140px] -z-10 pointer-events-none" />

        <h2 className="text-purple-400 font-mono tracking-widest text-sm uppercase">/// EDUCATION.LOG</h2>
        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Academic.</h3>
      </div>

      <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-8 flex flex-col gap-12">
        {education.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="pl-8 relative"
          >
            <div className="absolute w-5 h-5 bg-purple-500 rounded-full -left-[10.5px] top-4 shadow-[0_0_20px_rgba(168,85,247,1)] border-2 border-black" />
            
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#0c051a] to-transparent border border-white/10 backdrop-blur-md shadow-2xl hover:border-purple-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <h4 className="text-2xl lg:text-3xl font-bold text-white max-w-xl leading-tight">{item.degree}</h4>
                <span className="px-5 py-2 bg-purple-500/10 text-purple-300 text-sm font-mono tracking-wider rounded-xl border border-purple-500/30 whitespace-nowrap w-fit">
                  {item.date}
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                <div>
                  <p className="text-xl text-white/80 font-medium mb-1">{item.school}</p>
                  <p className="text-muted-foreground">{item.location}</p>
                </div>
                <p className="text-purple-400 font-mono font-bold text-lg">{item.score}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

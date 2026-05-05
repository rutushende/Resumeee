import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Indus University, Ahmedabad, Gujarat',
    period: '2023 – 2027',
    score: 'CGPA: 8.30',
    status: 'current',
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'P.G. Public School, Nandurbar, Maharashtra',
    period: '2023',
    score: '59%',
    status: 'completed',
  },
  {
    degree: 'Secondary Education (10th)',
    institution: 'P.G. Public School, Nandurbar, Maharashtra',
    period: '2021',
    score: '79%',
    status: 'completed',
  },
]

const certifications = [
  {
    title: 'Python Programming',
    issuer: 'Udemy',
    color: 'from-brand-600 to-brand-400',
  },
  {
    title: 'Data Analytics Simulation',
    issuer: 'Deloitte',
    color: 'from-accent-600 to-accent-400',
  },
]

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-3">My Background</p>
          <h2 className="section-heading">Education & Certifications</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative pl-8 space-y-6">
              {/* Vertical line */}
              <div className="absolute left-3 top-4 bottom-0 w-px bg-gradient-to-b from-brand-600/60 via-accent-600/30 to-transparent" />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className={`absolute -left-5 top-5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    edu.status === 'current'
                      ? 'border-brand-500 bg-brand-600'
                      : 'border-slate-600 bg-dark-900'
                  }`}>
                    {edu.status === 'current' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </div>

                  <div className="glass-hover rounded-2xl p-6">
                    {/* Degree title */}
                    <h3 className="font-display font-semibold text-white text-base leading-tight mb-3">
                      {edu.degree}
                    </h3>
                    {/* Institution + Year on same line */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <p className="text-brand-400 text-sm font-medium">{edu.institution}</p>
                      <span className={`tag shrink-0 ${edu.status === 'current' ? 'border-green-500/30 text-green-400 bg-green-500/10' : 'text-slate-400'}`}>
                        {edu.status === 'current' ? '● Active  2023 – 2027' : edu.period}
                      </span>
                    </div>
                    {/* Score on next line */}
                    <div className="mt-2 pt-2 border-t border-white/5">
                      <span className="font-mono font-semibold text-sm gradient-text">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
              <HiAcademicCap className="text-brand-400" size={18} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-hover rounded-xl p-5"
                >
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${cert.color} mb-3`} />
                  <h4 className="font-display font-medium text-white text-sm mb-1">{cert.title}</h4>
                  <p className="text-slate-500 text-xs font-mono">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>

            {/* Strengths card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass rounded-xl p-5 mt-4"
            >
              <h3 className="font-display font-semibold text-white text-sm mb-4">Core Attributes</h3>
              {['Problem-Solving Mindset', 'Quick Learner', 'Team Player'].map((s, i) => (
                <div key={s} className="flex items-center gap-3 mb-3 last:mb-0">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-600/20 to-accent-600/20 border border-brand-600/20 flex items-center justify-center text-brand-400 text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-slate-300 text-sm">{s}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-brand-900/20 via-transparent to-transparent" />
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-600/8 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-80 h-80 bg-accent-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="section-heading">Contact Me</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-4 mb-4" />
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            I'm open to internships, collaborations, and freelance opportunities. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: FiMail, label: 'Email', value: 'kundansurya24@gmail.com', href: 'mailto:kundansurya24@gmail.com' },
              { icon: FiPhone, label: 'Phone', value: '+91 72498 19135', href: 'tel:+917249819135' },
              { icon: FiMapPin, label: 'Location', value: 'Ahmedabad, Gujarat', href: null },
            ].map((item) => (
              <div key={item.label} className="glass-hover rounded-xl p-4 flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center text-brand-400 shrink-0">
                  <item.icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs font-mono">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-slate-200 text-sm hover:text-brand-400 transition-colors truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="glass rounded-xl p-5">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: 'https://github.com/kundansurya26', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kundan-suryawanshi/', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:kundansurya24@gmail.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-600/40 transition-all hover:scale-110"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-slate-400 text-xs font-mono uppercase tracking-widest mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-600/50 focus:bg-brand-600/5 transition-all"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-mono uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-600/50 focus:bg-brand-600/5 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full btn-primary justify-center py-3.5 ${status === 'sent' ? 'from-green-600 to-green-500' : ''}`}
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

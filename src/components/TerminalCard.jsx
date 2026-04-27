import { motion } from 'framer-motion'

export default function TerminalCard({ children, className = '' }) {
  return (
    <motion.div
      className={`terminal-border scanline relative overflow-hidden rounded-2xl bg-black/60 p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, borderColor: 'rgba(0,255,136,.45)' }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

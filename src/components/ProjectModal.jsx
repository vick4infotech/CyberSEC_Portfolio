import { motion } from 'framer-motion'
import { X, AlertTriangle } from 'lucide-react'

const riskClass = { High: 'text-red-300 border-red-400/30 bg-red-500/10', Medium: 'text-yellow-200 border-yellow-300/30 bg-yellow-500/10', Operational: 'text-blueglow border-blueglow/30 bg-blueglow/10' }

export default function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.article className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-green/25 bg-[#07100d] p-5 shadow-glow" initial={{ scale: .94, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 16 }} onClick={(e) => e.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-sm text-green">$ open project --details</p>
            <h2 className="mt-2 text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-slate-400">{project.type}</p>
          </div>
          <button onClick={onClose} className="rounded-xl border border-white/10 p-2 text-slate-400 hover:border-green/40 hover:text-green"><X /></button>
        </div>
        <div className="grid gap-6 md:grid-cols-[1fr_.9fr]">
          <div className="space-y-5">
            <Block title="Objective" text={project.objective} />
            <Block title="Business Impact" text={project.impact} />
            <Block title="Remediation" text={project.remediation} />
          </div>
          <div className="space-y-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/50">
              {project.image ? <img src={project.image} alt="Project evidence placeholder" className="h-52 w-full object-cover opacity-85" /> : <div className="grid h-52 place-items-center text-slate-500">screenshot placeholder</div>}
            </div>
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${riskClass[project.risk]}`}><AlertTriangle size={16} /> Risk: {project.risk}</div>
            <TagList title="Tools Used" items={project.tools} />
            <TagList title="Vulnerabilities" items={project.vulnerabilities} />
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}

function Block({ title, text }) {
  return <section><h3 className="mb-2 text-green">{title}</h3><p className="leading-7 text-slate-300">{text}</p></section>
}
function TagList({ title, items }) {
  return <section><h3 className="mb-3 text-green">{title}</h3><div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full border border-green/20 bg-green/5 px-3 py-1 text-xs text-slate-300">{item}</span>)}</div></section>
}

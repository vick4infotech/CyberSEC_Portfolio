import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Page from '../components/Page.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  return (
    <Page>
      <SectionHeader command="ls -la ./projects" title="Interactive Security Projects" description="Each project is structured around objective, tooling, validated vulnerabilities, risk, business impact, and remediation." />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.button key={project.title} onClick={() => setSelected(project)} className="group overflow-hidden rounded-2xl border border-green/15 bg-black/60 text-left shadow-glow" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -6 }}>
            <div className="h-52 border-b border-white/10 bg-white/5">
              {project.image ? <img src={project.image} alt="Project screenshot placeholder" className="h-full w-full object-cover opacity-75 transition group-hover:scale-[1.03] group-hover:opacity-90" /> : <div className="grid h-full place-items-center text-slate-500">screenshot placeholder</div>}
            </div>
            <div className="p-6">
              <p className="text-xs text-green">{project.type}</p>
              <h2 className="mt-2 text-2xl font-bold text-white">{project.title}</h2>
              <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">{project.objective}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.vulnerabilities.slice(0, 3).map(v => <span className="rounded-full border border-green/20 px-3 py-1 text-xs text-green" key={v}>{v}</span>)}</div>
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </Page>
  )
}

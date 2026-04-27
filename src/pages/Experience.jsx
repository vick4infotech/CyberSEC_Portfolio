import { motion } from 'framer-motion'
import Page from '../components/Page.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <Page>
      <SectionHeader command="cat ./experience/security-timeline.log" title="Security-Focused Experience" description="Timeline view of security contributions, hardening work, vulnerability handling, and user/data protection practices." />
      <div className="relative ml-3 border-l border-green/25 pl-8">
        {experience.map((item, index) => (
          <motion.article key={item.role} className="relative mb-10 rounded-2xl border border-green/15 bg-black/60 p-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
            <span className="absolute -left-[43px] top-7 h-5 w-5 rounded-full border border-green bg-black shadow-glow" />
            <p className="text-sm text-green">{item.period}</p>
            <h2 className="mt-2 text-2xl font-bold text-white">{item.role}</h2>
            <p className="mt-1 text-slate-400">{item.org}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {item.items.map(point => <li key={point} className="flex gap-3"><span className="text-green">▹</span><span>{point}</span></li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </Page>
  )
}

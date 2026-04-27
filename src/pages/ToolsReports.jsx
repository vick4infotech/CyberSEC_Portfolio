import { motion } from 'framer-motion'
import { FileText, Wrench } from 'lucide-react'
import Page from '../components/Page.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CVButton from '../components/CVButton.jsx'
import { reports, toolCategories } from '../data/tools.js'
import { profile } from '../data/profile.js'

export default function ToolsReports() {
  return (
    <Page>
      <SectionHeader command="inventory --tools --reports" title="Tools, Stack & Reports" description="Operational tooling organized by assessment workflow, plus report previews for structured communication of risk." />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {toolCategories.map((cat, index) => (
          <motion.article key={cat.category} className="rounded-2xl border border-green/15 bg-black/60 p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -6 }}>
            <Wrench className="mb-4 text-green" />
            <h2 className="text-xl font-bold text-white">{cat.category}</h2>
            <div className="mt-5 flex flex-wrap gap-2">{cat.tools.map(tool => <span key={tool} className="rounded-full border border-green/20 bg-green/5 px-3 py-1 text-xs text-slate-300">{tool}</span>)}</div>
          </motion.article>
        ))}
      </section>

      <section className="mt-14">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-green">$ ls ./sample-reports</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Reports Section</h2>
          </div>
          <CVButton />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reports.map((report, index) => (
            <motion.article key={report.title} className="rounded-2xl border border-green/15 bg-black/60 p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
              <FileText className="mb-4 text-blueglow" />
              <h3 className="text-lg font-bold text-white">{report.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{report.summary}</p>
              <a href={profile.cv} download className="mt-5 inline-flex rounded-xl border border-green/25 px-4 py-2 text-sm font-bold text-green transition hover:bg-green hover:text-black">Download PDF</a>
            </motion.article>
          ))}
        </div>
      </section>
    </Page>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import Page from '../components/Page.jsx'
import CVButton from '../components/CVButton.jsx'
import { profile } from '../data/profile.js'

const typed = ['$ initializing security profile...', '$ loading web, mobile, api, devsecops modules...', '$ status: ready']

export default function Home() {
  return (
    <Page className="gradient-panel rounded-3xl border border-green/15 p-5 md:p-10">
      <section className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <div className="mb-8 rounded-2xl border border-green/20 bg-black/60 p-4 shadow-glow">
            {typed.map((line, index) => (
              <motion.p key={line} className="cursor text-sm text-green" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .35 }}>
                {line}
              </motion.p>
            ))}
          </div>
          <motion.h1 className="text-4xl font-black tracking-tight text-white md:text-7xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}>
            {profile.name}
          </motion.h1>
          <motion.p className="mt-4 text-xl font-semibold text-green md:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}>{profile.title}</motion.p>
          <motion.p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>{profile.tagline}</motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-xl border border-green/30 bg-green/10 px-5 py-3 text-sm font-bold text-green transition hover:-translate-y-1 hover:bg-green hover:text-black">View Projects <ArrowRight size={17} /></Link>
            <CVButton />
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-1 hover:border-blueglow/40 hover:text-blueglow"><Mail size={17} /> Contact</Link>
          </motion.div>
        </div>
        <motion.div className="terminal-border relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-black/60 p-4" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .45 }}>
          <img src={profile.profileImage} alt="Victor Ayenikanju profile placeholder" className="h-full w-full rounded-2xl object-cover opacity-90 grayscale-[25%]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-green/20 bg-black/75 p-4 backdrop-blur">
            <p className="text-xs text-green">active_profile</p>
            <p className="mt-1 text-sm text-slate-300">Pentest evidence, exploit impact, remediation clarity.</p>
          </div>
        </motion.div>
      </section>
    </Page>
  )
}

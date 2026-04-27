import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Page from '../components/Page.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <Page>
      <SectionHeader command="connect --secure-channel" title="Contact" description="Use the form for local interaction, or connect through professional channels." />
      <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="rounded-2xl border border-green/15 bg-black/60 p-6">
          <label className="mb-2 block text-sm text-green">Name</label>
          <input required className="mb-4 w-full rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100 outline-none focus:border-green/50" />
          <label className="mb-2 block text-sm text-green">Email</label>
          <input type="email" required className="mb-4 w-full rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100 outline-none focus:border-green/50" />
          <label className="mb-2 block text-sm text-green">Message</label>
          <textarea required rows="6" className="mb-5 w-full resize-none rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100 outline-none focus:border-green/50" />
          <button className="rounded-xl bg-green px-5 py-3 font-bold text-black transition hover:-translate-y-1 hover:shadow-glow">Send Message</button>
          {sent && <p className="mt-4 text-sm text-green">Message captured locally. Connect a backend or form service to send production emails.</p>}
        </form>
        <aside className="rounded-2xl border border-green/15 bg-black/60 p-6">
          <h2 className="text-2xl font-bold text-white">Professional Links</h2>
          <div className="mt-6 space-y-3">
            <a className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-green/40 hover:text-green" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            <a className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-green/40 hover:text-green" href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-green/40 hover:text-green" href={`mailto:${profile.email}`}><Mail /> {profile.email}</a>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400">For security work, include scope, application type, target environment, testing window, and reporting requirements.</p>
        </aside>
      </div>
    </Page>
  )
}

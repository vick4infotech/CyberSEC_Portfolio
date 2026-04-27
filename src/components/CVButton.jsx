import { Download } from 'lucide-react'
import { profile } from '../data/profile.js'

export default function CVButton({ className = '' }) {
  return (
    <a
      href={profile.cv}
      download="Victor-Ayenikanju-CV.pdf"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-green px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-1 hover:shadow-glow ${className}`}
    >
      <Download size={17} /> Download CV
    </a>
  )
}

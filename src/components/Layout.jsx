import { NavLink } from 'react-router-dom'
import { Shield, Terminal } from 'lucide-react'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/experience', 'Experience'],
  ['/lab', 'Vulnerability Lab'],
  ['/tools-reports', 'Tools & Reports'],
  ['/contact', 'Contact']
]

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-terminal bg-grid bg-[length:36px_36px] text-slate-100">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(0,255,136,.13),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,.10),transparent_24%)]" />
      <header className="sticky top-0 z-40 border-b border-green/15 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <NavLink to="/" className="flex items-center gap-3 font-bold text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-green/30 bg-green/10 text-green shadow-glow"><Shield size={20} /></span>
            <span className="hidden sm:block">Victor<span className="text-green">.sec</span></span>
          </NavLink>
          <div className="hidden items-center gap-1 lg:flex">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm transition ${isActive ? 'bg-green/15 text-green' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                {label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-full border border-green/20 bg-black/50 px-3 py-2 text-xs text-slate-400">
            <Terminal size={14} className="text-green" /> online
          </div>
        </nav>
        <div className="flex gap-2 overflow-x-auto border-t border-white/5 px-4 py-2 lg:hidden">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `shrink-0 rounded-lg px-3 py-2 text-xs ${isActive ? 'bg-green/15 text-green' : 'text-slate-400'}`}>{label}</NavLink>
          ))}
        </div>
      </header>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:py-14">{children}</div>
    </div>
  )
}

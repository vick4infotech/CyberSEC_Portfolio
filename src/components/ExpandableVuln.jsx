import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ExpandableVuln({ vuln, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-green/15 bg-black/55 p-5">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 text-left">
        <div>
          <p className="text-xs text-green">./lab/{vuln.tag.toLowerCase()}</p>
          <h3 className="mt-1 text-xl font-bold text-white">{vuln.name}</h3>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-green"><ChevronDown /></motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 md:grid-cols-[1fr_.75fr]">
              <div className="space-y-4 text-sm leading-7 text-slate-300">
                <p>{vuln.explanation}</p>
                <p><span className="text-yellow-200">Impact:</span> {vuln.impact}</p>
                <p><span className="text-green">Mitigation:</span> {vuln.mitigation}</p>
              </div>
              <pre className="overflow-auto rounded-xl border border-green/15 bg-[#030705] p-4 text-xs text-green"><code>{vuln.example}</code></pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

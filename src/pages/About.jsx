import { ShieldCheck, Smartphone, Workflow } from 'lucide-react'
import Page from '../components/Page.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import TerminalCard from '../components/TerminalCard.jsx'
import VulnerabilityResources from '../components/VulnerabilityResources.jsx'

const cards = [
  ['Web Pentesting', ShieldCheck, 'Manual validation of injection, access control, XSS, session handling, insecure configuration, and API-driven attack paths.'],
  ['Mobile Security', Smartphone, 'Static and dynamic Android review using MobSF, JADX, proxy interception, storage checks, and release-build hardening review.'],
  ['AI DevSecOps', Workflow, 'Security gates for CI/CD, dependency risk, secrets exposure, container baselines, and secure automation around AI-enabled workflows.']
]

export default function About() {
  return (
    <Page>
      <SectionHeader command="whoami --expertise" title="About / Expertise" description="Security work framed around what can be exploited, what it affects, and how it should be fixed." />
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map(([title, Icon, text]) => (
          <TerminalCard key={title} className="group min-h-64">
            <Icon className="mb-5 text-green" size={30} />
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 transition group-hover:text-slate-200">{text}</p>
            <div className="mt-6 h-1 w-16 rounded bg-green/60 transition-all group-hover:w-full" />
          </TerminalCard>
        ))}
      </div>
      <VulnerabilityResources />
    </Page>
  )
}

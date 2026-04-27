import { useState } from 'react'
import Page from '../components/Page.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ExpandableVuln from '../components/ExpandableVuln.jsx'
import { vulnerabilities } from '../data/vulnerabilities.js'

export default function Lab() {
  const [open, setOpen] = useState('SQL Injection')
  return (
    <Page>
      <SectionHeader command="run ./vulnerability-lab --interactive" title="Vulnerability Lab" description="Click each vulnerability to inspect the testing logic, safe demo payload, impact, and defensive controls." />
      <div className="space-y-4">
        {vulnerabilities.map(vuln => (
          <ExpandableVuln key={vuln.name} vuln={vuln} open={open === vuln.name} onToggle={() => setOpen(open === vuln.name ? '' : vuln.name)} />
        ))}
      </div>
    </Page>
  )
}

import webgoat from '../assets/webgoat.jpg'
import webwolf from '../assets/webwolf-requests.png'

export const projects = [
  {
    title: 'Web App Pentest',
    type: 'Application Security',
    risk: 'High',
    image: webgoat,
    objective: 'Assess authentication, session handling, data access controls, and vulnerable request paths in a deliberately insecure web environment.',
    tools: ['Burp Suite', 'WebGoat', 'WebWolf', 'Firefox DevTools', 'Payload validation'],
    vulnerabilities: ['SQL Injection', 'XSS', 'Broken Access Control', 'Weak Session Controls'],
    impact: 'Validated exploit paths that could expose customer data, alter records, or bypass protected application workflows.',
    remediation: 'Parameterized queries, contextual output encoding, authorization checks at object level, hardened cookies, and regression security tests.'
  },
  {
    title: 'API Security Testing',
    type: 'API Assessment',
    risk: 'Medium',
    image: webwolf,
    objective: 'Evaluate REST endpoints for unsafe object references, weak authentication enforcement, input handling defects, and inconsistent error behavior.',
    tools: ['Burp Repeater', 'Postman', 'JWT inspection', 'Nmap', 'Custom Bash scripts'],
    vulnerabilities: ['BOLA', 'Excessive Data Exposure', 'Injection', 'Rate Limit Gaps'],
    impact: 'Identified API paths where manipulated identifiers and weak validation could expose data outside authorized user context.',
    remediation: 'Object-level authorization, schema validation, throttling, centralized API logging, and response minimization.'
  },
  {
    title: 'Mobile Security Analysis',
    type: 'Android Review',
    risk: 'Medium',
    objective: 'Review mobile application attack surface with focus on static analysis, insecure storage, network trust, and reverse engineering exposure.',
    tools: ['MobSF', 'JADX', 'ADB', 'Burp Proxy', 'Android Emulator'],
    vulnerabilities: ['Hardcoded Secrets', 'Insecure Storage', 'Weak TLS Pinning', 'Debuggable Build Risks'],
    impact: 'Reduced risk of credential leakage, reverse engineering, and interception of sensitive mobile traffic.',
    remediation: 'Secret removal, secure keystore usage, certificate pinning strategy, release build hardening, and mobile CI checks.'
  },
  {
    title: 'DevSecOps Pipeline',
    type: 'Security Automation',
    risk: 'Operational',
    objective: 'Embed security checks into CI/CD to detect vulnerable dependencies, container weaknesses, exposed secrets, and configuration drift earlier.',
    tools: ['Docker', 'GitHub Actions', 'SAST', 'Dependency scanning', 'Secret scanning'],
    vulnerabilities: ['Vulnerable Dependencies', 'Secrets Exposure', 'Container Misconfiguration', 'Missing Security Gates'],
    impact: 'Improved release confidence by blocking known vulnerable packages and surfacing actionable security findings before deployment.',
    remediation: 'Policy-as-code gates, dependency pinning, container image baselines, signed artifacts, and vulnerability triage workflow.'
  }
]

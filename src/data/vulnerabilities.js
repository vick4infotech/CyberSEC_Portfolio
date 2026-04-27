export const vulnerabilities = [
  {
    name: 'SQL Injection',
    tag: 'SQLi',
    example: "' OR '1'='1 --",
    explanation: 'Injection flaws occur when user-controlled values are concatenated into database queries. Testing targets search fields, login forms, filters, route parameters, JSON bodies, and API query strings, then compares error-based, boolean-based, and time-based behavior.',
    impact: 'Authentication bypass, sensitive record extraction, unauthorized data modification, and breach exposure.',
    mitigation: 'Use parameterized queries, prepared statements, safe ORM patterns, server-side allow-list validation, least-privilege database accounts, and non-verbose errors.'
  },
  {
    name: 'Cross-Site Scripting',
    tag: 'XSS',
    example: '<img src=x onerror=alert(1)>',
    explanation: 'XSS appears when untrusted input is rendered into HTML, JavaScript, attributes, or URLs without contextual encoding. Testing checks reflected parameters, stored profile fields, markdown renderers, admin notes, and API-fed front-end views.',
    impact: 'Session theft, user impersonation, malicious redirects, account actions on behalf of users, and trust damage.',
    mitigation: 'Apply contextual output encoding, sanitize rich text, enforce CSP, use safe framework rendering, validate inputs, and protect cookies with HttpOnly and SameSite.'
  },
  {
    name: 'XML External Entity Injection',
    tag: 'XXE',
    example: '<!DOCTYPE x [<!ENTITY test SYSTEM "file:///etc/passwd">]>',
    explanation: 'XXE is introduced when XML parsers resolve external entities from user-supplied XML. Testing targets SOAP services, XML upload features, SAML flows, and legacy integrations with controlled entity payloads and out-of-band callbacks.',
    impact: 'Local file disclosure, SSRF into internal networks, credential exposure, and backend service enumeration.',
    mitigation: 'Disable DTDs and external entity resolution, use hardened XML parser settings, validate schemas, avoid unnecessary XML features, and monitor unexpected outbound server requests.'
  }
]

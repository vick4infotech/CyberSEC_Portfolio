/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        terminal: '#0d0d0d',
        panel: '#111827',
        green: '#00ff88',
        blueglow: '#38bdf8',
        muted: '#94a3b8'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        glow: '0 0 35px rgba(0,255,136,0.13)',
        blue: '0 0 35px rgba(56,189,248,0.11)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(0,255,136,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,.045) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
}

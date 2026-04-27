import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <main className="min-h-screen bg-terminal p-8 font-mono text-slate-100">
          <p className="text-green">$ react-render-error</p>
          <h1 className="mt-4 text-3xl font-bold text-white">Portfolio failed to render</h1>
          <pre className="mt-6 overflow-auto rounded-2xl border border-green/20 bg-black p-5 text-sm text-red-200">
            {String(this.state.error.message || this.state.error)}
          </pre>
        </main>
      )
    }
    return this.props.children
  }
}

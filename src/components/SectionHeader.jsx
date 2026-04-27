export default function SectionHeader({ command, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="cursor text-green text-sm mb-3">$ {command}</p>
      <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h1>
      {description && <p className="mt-4 text-slate-400 leading-7">{description}</p>}
    </div>
  )
}

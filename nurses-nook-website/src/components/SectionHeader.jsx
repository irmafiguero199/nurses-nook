function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className={`mt-4 w-20 h-1 bg-primary-500 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}

export default SectionHeader
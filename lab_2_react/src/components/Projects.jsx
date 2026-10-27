function Projects({ items }) {
  return (
    <section id="projects" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg md:col-span-2">
      <h2 className="mb-3 border-b-2 border-sky-500 pb-1 text-2xl font-semibold text-slate-700">
        Projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((proj) => (
          <article key={proj.title} className="rounded-lg border border-slate-100 bg-slate-50 p-4 transition hover:bg-sky-50">
            <h3 className="text-lg font-semibold text-slate-900">{proj.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{proj.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
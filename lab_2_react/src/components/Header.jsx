function Header({ name, age, contacts, isDark, onToggleTheme }) {
  return (
    <header className="bg-slate-700 px-6 py-10 text-white shadow-md dark:bg-slate-950">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-wide sm:text-5xl">{name}</h1>
            <p className="mt-1 text-lg italic opacity-80">{age} років</p>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="cursor-pointer rounded-lg border border-slate-400 bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-600"
          >
            {isDark ? 'Денний режим' : 'Нічний режим'}
          </button>
        </div>

        <address className="mt-4 not-italic">
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {contacts.map((c) => (
              <li key={c.label}>
                <span className="font-medium opacity-90">{c.label}: </span>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-sky-300 underline-offset-4 hover:underline focus:outline-2 focus:outline-sky-300"
                  >
                    {c.text}
                  </a>
                ) : (
                  <span>{c.text}</span>
                )}
              </li>
            ))}
          </ul>
        </address>
      </div>
    </header>
  );
}

export default Header;
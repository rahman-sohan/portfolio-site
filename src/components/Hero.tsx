import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="flex min-h-[88vh] flex-col justify-center py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint sm:text-xs">
        {profile.name} · {profile.title} · {profile.location}
      </p>

      <h1 className="mt-10 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
        I build
        <br />
        scalable backends.
      </h1>
      <p className="mt-8 max-w-xl leading-relaxed text-muted">{profile.summary}</p>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <a
          href="#work"
          className="rounded-md bg-fg px-5 py-3 font-mono text-sm font-medium text-ink transition hover:opacity-90"
        >
          Explore my work ↓
        </a>
        <a
          href="mailto:mdsohanurrahman63@gmail.com"
          className="font-mono text-sm text-muted underline underline-offset-4 transition-colors hover:text-fg"
        >
          Say hello
        </a>
      </div>
    </section>
  )
}

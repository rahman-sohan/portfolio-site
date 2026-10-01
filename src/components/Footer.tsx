import { profile, socials } from '../data/portfolio'

export default function Footer() {
  return (
    <>
      <section id="contact" className="border-t border-line py-24">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Have a system <span className="text-faint">you want to build?</span>
        </h2>
        <a
          href={socials.email}
          className="mt-8 inline-block rounded-md bg-fg px-5 py-3 font-mono text-sm font-medium text-ink transition hover:opacity-90"
        >
          Let's talk.
        </a>
      </section>

      <footer className="border-t border-line py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-1 font-mono text-xs text-faint">
              {profile.title} · {profile.location}
            </p>
          </div>
          <nav className="flex gap-6 font-mono text-sm">
            <a href={socials.github} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-fg">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-fg">
              LinkedIn
            </a>
            <a href={socials.email} className="text-muted transition-colors hover:text-fg">
              Email
            </a>
          </nav>
        </div>
        <a href="#top" className="mt-10 inline-block font-mono text-xs text-faint transition-colors hover:text-fg">
          Back to top ↑
        </a>
      </footer>
    </>
  )
}

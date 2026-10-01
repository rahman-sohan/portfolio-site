import SectionHeading from './SectionHeading'
import { exploring, highlights, skillGroups } from '../data/portfolio'

export default function Now() {
  return (
    <section id="now" className="border-t border-line py-24">
      <SectionHeading
        index="04"
        label="Now"
        title={
          <>
            What I work
            <br />
            with.
          </>
        }
        sub="The stack I've delivered production systems with."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name} className="bg-ink p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mt-16 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Currently exploring</h3>
      <p className="mt-4 text-lg leading-relaxed text-muted">{exploring}</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {highlights.map((highlight) => (
          <div key={highlight.label} className="rounded-lg border border-line p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{highlight.label}</p>
            <p className="mt-3 leading-relaxed text-muted">{highlight.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

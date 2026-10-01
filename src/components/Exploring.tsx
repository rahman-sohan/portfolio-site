import SectionHeading from './SectionHeading'
import { exploringItems } from '../data/portfolio'

export default function Exploring() {
  return (
    <section id="exploring" className="border-t border-line py-24">
      <SectionHeading
        index="03"
        label="Exploring"
        title={
          <>
            What I’m
            <br />
            exploring.
          </>
        }
      />

      <dl className="mt-12">
        {exploringItems.map((item) => (
          <div key={item.label} className="border-t border-line py-6 last:border-b">
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{item.label}</dt>
            <dd className="mt-2 max-w-md leading-relaxed text-muted">{item.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

import SectionHeading from './SectionHeading'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-24">
      <SectionHeading
        index="01"
        label="Education"
        title={
          <>
            Where I
            <br />
            studied.
          </>
        }
      />

      <article className="mt-12 rounded-lg border border-line border-l-4 border-l-accent p-8 sm:p-10">
        <span className="font-mono text-sm text-faint">01</span>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Undergraduate · {education.location}
        </p>
        <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{education.school}</h3>
        <p className="mt-3 text-muted">{education.degree}</p>
        <p className="mt-3 font-mono text-xs text-faint">{education.period}</p>
      </article>
    </section>
  )
}

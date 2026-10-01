import SectionHeading from './SectionHeading'
import { jobs } from '../data/portfolio'

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24">
      <SectionHeading
        index="01"
        label="Work"
        title={
          <>
            Where I've
            <br />
            worked.
          </>
        }
        sub="Companies I've helped build — as a backend engineer."
      />

      <div className="mt-20 space-y-20">
        {jobs.map((job, i) => (
          <article key={job.company}>
            <div className="flex items-baseline justify-between gap-6">
              <span className="font-mono text-sm text-faint">0{i + 1}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-faint">{job.period}</span>
            </div>

            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {job.role} · {job.type} · {job.location}
            </p>

            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-fg"
              >
                {job.company}
              </a>
            </h3>

            <p className="mt-3 italic text-muted">“{job.blurb}”</p>

            <ul className="mt-6 space-y-3">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-4 leading-relaxed text-muted">
                  <span className="mt-3 h-px w-4 shrink-0 bg-line" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-xs text-faint">{job.tech.join(' · ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

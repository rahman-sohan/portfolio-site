import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { jobs } from '../data/portfolio'

function domainOf(url: string) {
  return new URL(url).hostname.replace(/^www\./, '')
}

function LogoChip({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="flex h-12 shrink-0 items-center justify-center rounded-md bg-white px-2.5">
      {failed ? (
        <span className="font-mono text-lg font-semibold text-ink">{name.charAt(0)}</span>
      ) : (
        <img
          src={src}
          alt={`${name} logo`}
          className="h-6 w-auto max-w-[120px] object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24">
      <SectionHeading
        index="02"
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

            <div className="mt-4 flex items-center gap-4">
              <LogoChip src={job.logo} name={job.company} />
              <h3 className="text-2xl font-semibold sm:text-3xl">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-fg"
                >
                  {job.company}
                </a>
              </h3>
            </div>

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

            {(() => {
              const visitUrl = job.productUrl ?? job.url
              return (
                <a
                  href={visitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex font-mono text-sm underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
                >
                  {job.productUrl ? 'Product I worked on:' : 'Visit'} {domainOf(visitUrl)} →
                </a>
              )
            })()}
          </article>
        ))}
      </div>
    </section>
  )
}

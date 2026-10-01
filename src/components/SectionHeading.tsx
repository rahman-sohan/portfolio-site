import type { ReactNode } from 'react'

type SectionHeadingProps = {
  index: string
  label: string
  title: ReactNode
  sub?: string
}

export default function SectionHeading({ index, label, title, sub }: SectionHeadingProps) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-faint">
        {index} / {label}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {sub ? <p className="mt-4 max-w-xl text-muted">{sub}</p> : null}
    </div>
  )
}

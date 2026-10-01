import { useState } from 'react'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Now from './components/Now'
import Work from './components/Work'
import { socials } from './data/portfolio'
import { autoTime, TIME_KEYS, type TimeKey } from './time'

export default function App() {
  const [time, setTime] = useState<TimeKey>(() => autoTime())

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        {TIME_KEYS.map((key) => (
          <div
            key={key}
            data-time={key}
            className={`hero-glow ${key === time ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <header className="sticky top-0 z-10 border-b border-line/70 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm transition-opacity hover:opacity-80">
            sohan.
          </a>
          <a href={socials.email} className="font-mono text-sm text-muted transition-colors hover:text-fg">
            Say hello
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        <Hero time={time} onTimeChange={setTime} />
        <Work />
        <Now />
        <Education />
        <Footer />
      </main>
    </div>
  )
}

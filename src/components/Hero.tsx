import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-visual" aria-hidden="true">
        <img className="hero-img" src="/imgi_4_night.webp" alt="" loading="eager" decoding="async" draggable={false} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow"><span aria-hidden="true">✦</span> Backend engineer · Node.js &amp; TypeScript</p>
        <h1>I build the invisible engine.</h1>
        <p className="hero-copy">
          Node.js, NestJS, and data pipelines — quietly doing their job at 3 a.m. so your users never notice.
        </p>
        <div className="hero-actions">
          <a href="#work" className="hero-button">Explore my work <span aria-hidden="true">↓</span></a>
          <a href="/Sohanur-Rahman-Nodejs.pdf" className="resume-button" download>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download resume
          </a>
        </div>
      </div>
      <div className="hero-meta">
        <span>{profile.location}</span>
        <span>Available for interesting problems</span>
      </div>
    </section>
  )
}

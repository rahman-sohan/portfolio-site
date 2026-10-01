import Education from './components/Education'
import Exploring from './components/Exploring'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Now from './components/Now'
import Work from './components/Work'
import { socials } from './data/portfolio'

export default function App() {
  return (
    <div className="portfolio-app min-h-screen">
      <header className="site-header">
        <a href="#top" className="wordmark">
          sohanur<span>.dev</span>
        </a>
        <div className="header-actions">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-button"
            aria-label="LinkedIn"
          >
            <svg aria-hidden="true">
              <use href="/icons.svg#linkedin-icon" />
            </svg>
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="social-button"
            aria-label="GitHub"
          >
            <svg aria-hidden="true">
              <use href="/icons.svg#github-icon" />
            </svg>
          </a>
          <a href={socials.email} className="hello-button">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div className="page-content">
          <Education />
          <Work />
          <Exploring />
          <Now />
          <Footer />
        </div>
      </main>
    </div>
  )
}

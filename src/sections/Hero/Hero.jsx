import GlobeCanvas from '../../components/GlobeCanvas/GlobeCanvas'
import './Hero.css'

function Hero({ identity, contact, projectCount, milestoneCount }) {
  const words = identity.heroHeadline.split(' ')
  const socialLink = contact.linkedin.startsWith('http')
    ? contact.linkedin
    : `https://${contact.linkedin}`

  return (
    <section id="home" className="hero-section">
      <div className="hero-slash" aria-hidden="true"></div>
      <div className="container-shell hero-grid">
        <div className="hero-text">
          <div className="hero-text-inner">
            <p className="hero-label">&gt; CYBERSECURITY STUDENT_</p>
            <h1 className="hero-title" aria-label={identity.heroHeadline}>
              {words.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={index === 0 ? `hero-word word-${index + 1} is-accent` : `hero-word word-${index + 1}`}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle">{identity.heroSub}</p>

            <div className="hero-actions">
              <a href="#projects" className="hero-button hero-button-primary">
                VIEW MY WORK ↓
              </a>
              <a
                href={socialLink}
                className="hero-button hero-button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                DOWNLOAD CV
              </a>
            </div>

            <div className="hero-stats">
              <span>{projectCount} PROJECTS</span>
              <span>{milestoneCount} MILESTONES</span>
              <span>{identity.degree}</span>
            </div>
          </div>
        </div>

        <div className="hero-globe">
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="hero-globe-inner">
            <GlobeCanvas size="large" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

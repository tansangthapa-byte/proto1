import { useScrollReveal } from '../../components/ScrollReveal/useScrollReveal'
import './About.css'

function About({ identity, interestTags }) {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="about" className="section-block about-section">
      <div className="container-shell about-grid">
        <div ref={leftRef} className="about-copy reveal-left">
          <div className="about-ghost" aria-hidden="true">
            ABOUT ME
          </div>
          <p className="section-kicker">ABOUT</p>
          <h2>Who Am I?</h2>
          {identity.bio.map((paragraph) => (
            <p key={paragraph} className="about-paragraph">
              {paragraph}
            </p>
          ))}
          <div className="about-tags">
            {interestTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div ref={rightRef} className="about-meta reveal-right stagger-group">
          <article className="about-card">
            <span>DEGREE</span>
            <strong>{identity.degree}</strong>
          </article>
          <article className="about-card">
            <span>LEVEL</span>
            <strong>{identity.level}</strong>
          </article>
          <article className="about-card">
            <span>UNIVERSITY</span>
            <strong>{identity.university}</strong>
          </article>
          <article className="about-card">
            <span>LOCATION</span>
            <strong>{identity.location}</strong>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About

import GlobeCanvas from '../../components/GlobeCanvas/GlobeCanvas'
import { useScrollReveal } from '../../components/ScrollReveal/useScrollReveal'
import './Projects.css'

function FeaturedProjectCard({ project, index, normalizeUrl }) {
  const cardRef = useScrollReveal()

  return (
    <article
      ref={cardRef}
      className={index % 2 === 0 ? 'project-feature reveal-left' : 'project-feature reveal-right'}
    >
      <div className="project-feature-copy">
        <span className="project-label">FEATURED / {String(index + 1).padStart(2, '0')}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={normalizeUrl(project.github)} target="_blank" rel="noreferrer">
            View Code
          </a>
          {project.live ? (
            <a
              href={normalizeUrl(project.live)}
              target="_blank"
              rel="noreferrer"
              className="project-action-primary"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
      <div className="project-feature-visual">
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        <GlobeCanvas size="small" className="project-globe" />
      </div>
    </article>
  )
}

function CompactProjectCard({ project, index, normalizeUrl }) {
  const cardRef = useScrollReveal()

  return (
    <article
      ref={cardRef}
      className={index % 2 === 0 ? 'project-compact reveal-left' : 'project-compact reveal-right'}
    >
      <span className="project-label">PROJECT / {String(project.id).padStart(2, '0')}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-actions">
        <a href={normalizeUrl(project.github)} target="_blank" rel="noreferrer">
          View Code
        </a>
        {project.live ? (
          <a
            href={normalizeUrl(project.live)}
            target="_blank"
            rel="noreferrer"
            className="project-action-primary"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  )
}

function Projects({ projects, normalizeUrl }) {
  const headingRef = useScrollReveal()
  const featuredProjects = projects.filter((project) => project.featured)
  const compactProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-block projects-section">
      <div className="container-shell projects-shell">
        <div ref={headingRef} className="section-heading reveal">
          <p className="section-heading-ghost section-heading-left">PROJECTS</p>
          <p className="section-kicker">PROJECTS</p>
          <h2>Selected Work</h2>
        </div>

        <div className="projects-featured-list">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              normalizeUrl={normalizeUrl}
            />
          ))}
        </div>

        <div className="projects-compact-grid">
          {compactProjects.map((project, index) => (
            <CompactProjectCard
              key={project.id}
              project={project}
              index={index}
              normalizeUrl={normalizeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

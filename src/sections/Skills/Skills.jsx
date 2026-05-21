import { useScrollReveal } from '../../components/ScrollReveal/useScrollReveal'
import './Skills.css'

function Skills({ skills }) {
  const sectionRef = useScrollReveal()

  return (
    <section id="skills" className="skills-section">
      <div ref={sectionRef} className="container-shell reveal skills-shell">
        <div className="section-heading section-heading-center">
          <p className="section-heading-ghost">TECHNICAL ARSENAL</p>
          <p className="section-kicker">SKILLS</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-columns stagger-group revealed-by-parent">
          {skills.map((group) => (
            <article key={group.category} className="skills-panel">
              <p className="skills-category">{group.category}</p>
              {group.items.map((item) => (
                <div key={item.name} className="skills-item">
                  <div className="skills-meta">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-fill" style={{ '--level': `${item.level}%` }}></span>
                  </div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

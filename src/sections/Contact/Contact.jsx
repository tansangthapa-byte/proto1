import { useState } from 'react'
import { useScrollReveal } from '../../components/ScrollReveal/useScrollReveal'
import './Contact.css'

function Contact({ contact, normalizeUrl }) {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const socialItems = [
    { label: 'GitHub', value: contact.github },
    { label: 'LinkedIn', value: contact.linkedin },
    { label: 'Twitter', value: contact.twitter },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-block contact-section">
      <div className="container-shell contact-grid">
        <div ref={leftRef} className="contact-copy reveal-left">
          <p className="section-kicker">CONTACT</p>
          <h2 className="contact-title">
            LET'S WORK
            <br />
            TOGETHER.
          </h2>
          <p className="contact-text">
            I'm open to internships, freelance security consulting, and
            collaborative CTF teams.
          </p>
          <div className="contact-socials stagger-group revealed-by-parent">
            {socialItems.map((item) => (
              <a
                key={item.label}
                className="stagger-fade"
                href={normalizeUrl(item.value)}
                target="_blank"
                rel="noreferrer"
              >
                {item.label} →
              </a>
            ))}
          </div>
        </div>

        <div ref={rightRef} className="contact-form-wrap reveal-right">
          {submitted ? (
            <div className="contact-success">
              <span>✓</span>
              <h3>Message sent. I'll be in touch.</h3>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className={form.name ? 'field is-filled' : 'field'}>
                <span>Name</span>
                <input name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label className={form.email ? 'field is-filled' : 'field'}>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className={form.message ? 'field is-filled is-area' : 'field is-area'}>
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </label>
              <button type="submit">SEND MESSAGE →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact

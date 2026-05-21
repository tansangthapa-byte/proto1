import { useEffect } from 'react'
import portfolio from './data/portfolio.json'
import Navbar from './components/Navbar/Navbar'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Hero from './sections/Hero/Hero'
import Marquee from './sections/Marquee/Marquee'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Timeline from './sections/Timeline/Timeline'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return undefined
    }

    let ticking = false
    const root = document.documentElement

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY
          const textShift = Math.min(y * 0.14, 72)
          const globeShift = Math.max(y * -0.08, -40)

          root.style.setProperty('--hero-text-shift', `${textShift}px`)
          root.style.setProperty('--hero-globe-shift', `${globeShift}px`)

          ticking = false
        })

        ticking = true
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      root.style.removeProperty('--hero-text-shift')
      root.style.removeProperty('--hero-globe-shift')
    }
  }, [])

  const normalizeUrl = (value) => {
    if (!value) {
      return '#'
    }

    if (value.startsWith('#') || value.startsWith('mailto:') || value.startsWith('http')) {
      return value
    }

    if (value.startsWith('@')) {
      return `https://x.com/${value.slice(1)}`
    }

    return `https://${value}`
  }

  return (
    <div className="app-root">
      <CustomCursor />
      <Navbar
        initials={portfolio.identity.initials}
        status={portfolio.identity.status}
        statusActive={portfolio.identity.statusActive}
      />
      <main>
        <Hero
          identity={portfolio.identity}
          contact={portfolio.contact}
          projectCount={portfolio.projects.length}
          milestoneCount={portfolio.timeline.length}
        />
        <Marquee items={portfolio.marquee} />
        <About identity={portfolio.identity} interestTags={portfolio.marquee.slice(0, 6)} />
        <Skills skills={portfolio.skills} />
        <Projects projects={portfolio.projects} normalizeUrl={normalizeUrl} />
        <Timeline items={portfolio.timeline} />
        <Contact contact={portfolio.contact} normalizeUrl={normalizeUrl} />
      </main>
      <Footer identity={portfolio.identity} />
    </div>
  )
}

export default App

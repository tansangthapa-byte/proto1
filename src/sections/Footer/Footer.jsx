import './Footer.css'

function Footer({ identity }) {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-grid">
        <div className="footer-block footer-brand">
          <span className="footer-badge">{identity.initials}</span>
          <div>
            <p>{identity.name}</p>
            <small>{identity.degree}</small>
          </div>
        </div>
        <p className="footer-centre">BUILT WITH REACT + VITE</p>
        <div className="footer-block footer-links">
          <span>© 2025 {identity.name}</span>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

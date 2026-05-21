import './Marquee.css'

function Marquee({ items }) {
  const repeatedItems = [...items, ...items, ...items]

  return (
    <section className="marquee-band" aria-label="Technology marquee">
      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Marquee

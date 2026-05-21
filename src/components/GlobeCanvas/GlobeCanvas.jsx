import './GlobeCanvas.css'

function GlobeCanvas({ size = 'large', className = '' }) {
  const classes = `globe-frame globe-${size} ${className}`.trim()

  return (
    <div className={classes} aria-hidden="true">
      <svg viewBox="0 0 400 400" role="presentation">
        <g className="globe-outer">
          <ellipse cx="200" cy="200" rx="140" ry="140" className="globe-stroke strong" />
          <ellipse cx="200" cy="200" rx="140" ry="140" className="globe-stroke rotate-15" />
          <ellipse cx="200" cy="200" rx="140" ry="140" className="globe-stroke rotate-35" />
          <ellipse cx="200" cy="200" rx="140" ry="140" className="globe-stroke rotate-55" />
          <ellipse cx="200" cy="200" rx="140" ry="140" className="globe-stroke rotate-75" />
          <ellipse cx="200" cy="200" rx="140" ry="140" className="globe-stroke rotate-105" />
          <ellipse cx="200" cy="200" rx="140" ry="140" className="globe-stroke rotate-125" />
          <ellipse cx="200" cy="200" rx="140" ry="140" className="globe-stroke rotate-145" />
        </g>
        <g className="globe-inner">
          <ellipse cx="200" cy="200" rx="140" ry="28" className="globe-stroke strong" />
          <ellipse cx="200" cy="200" rx="140" ry="56" className="globe-stroke" />
          <ellipse cx="200" cy="200" rx="140" ry="92" className="globe-stroke" />
          <ellipse cx="200" cy="200" rx="140" ry="118" className="globe-stroke faint" />
        </g>
      </svg>
    </div>
  )
}

export default GlobeCanvas

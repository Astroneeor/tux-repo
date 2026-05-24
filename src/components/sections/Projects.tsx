import { PROJECTS } from '../../data/content'

export default function Projects() {
  return (
    <>
      <h1 className="sh1">My <em>Projects</em></h1>
      <p className="sub">Things I've built, shipped, or abandoned at 3am</p>
      <div className="proj-grid">
        {PROJECTS.map(project => (
          <div
            key={project.title}
            className="proj-card"
            onClick={() => project.url && window.open(project.url, '_blank')}
            style={project.url ? { cursor: 'pointer' } : undefined}
          >
            <div className="proj-icon">{project.icon}</div>
            <div className="proj-title">{project.title}</div>
            <div className="proj-desc">{project.desc}</div>
            <div className="proj-tags">
              {project.tags.map(tag => (
                <span key={tag} className="ptag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

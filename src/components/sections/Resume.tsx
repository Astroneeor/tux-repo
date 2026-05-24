import { EXPERIENCE, EDUCATION, SKILLS } from '../../data/content'

export default function Resume() {
  return (
    <>
      <h1 className="sh1">My <em>Resume</em></h1>
      <p className="sub">The professional version — the suit stays on</p>
      <div className="resume-grid">
        <div>
          <div className="col-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="7" r="4"/>
              <path d="M3 21v-2a7 7 0 0114 0v2"/>
            </svg>
            Experience
          </div>
          <div className="timeline">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="titem">
                <div className="tdate">{item.date}</div>
                <div className="ttitle">{item.title}</div>
                <div className="torg">{item.org}</div>
                <div className="tdesc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="col-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="7" r="4"/>
              <path d="M3 21v-2a7 7 0 0114 0v2"/>
            </svg>
            Education
          </div>
          <div className="timeline">
            {EDUCATION.map((item, i) => (
              <div key={i} className="titem">
                <div className="tdate">{item.date}</div>
                <div className="ttitle">{item.title}</div>
                <div className="torg">{item.org}</div>
                <div className="tdesc">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="col-title" style={{ marginTop: '24px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            Skills
          </div>
          <div className="skills-list">
            {SKILLS.map(group => (
              <div key={group.label}>
                <div className="sglabel">{group.label}</div>
                <div className="spills">
                  {group.skills.map(skill => (
                    <span key={skill} className="spill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

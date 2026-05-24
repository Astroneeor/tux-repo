import { PROFILE } from '../../data/content'

export default function About() {
  return (
    <>
      <h1 className="sh1">Hi, I'm <em>{PROFILE.name}</em></h1>
      <p className="sub">{PROFILE.tagline}</p>
      <div className="about-grid">
        <div className="bio">
          {PROFILE.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="tags">
            {PROFILE.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="profile-card">
          <div className="card-mascot">
            {/* Mini mascot */}
            <svg width="62" height="76" viewBox="0 0 80 100" fill="none">
              <ellipse cx="36" cy="16" rx="30" ry="5" fill="#12122a" stroke="#1e1e50" strokeWidth="1"/>
              <rect x="22" y="3" width="28" height="15" rx="4" fill="#12122a" stroke="#1e1e50" strokeWidth="1"/>
              <rect x="20" y="13" width="32" height="4" fill="#1a1a5a" rx="1"/>
              <rect x="33" y="13.5" width="6" height="3" rx="1" fill="#ffcc44" opacity="0.9"/>
              <circle cx="36" cy="38" r="21" fill="#c8d4e8" stroke="#9aaac0" strokeWidth="1.5"/>
              <ellipse cx="27" cy="29" rx="7" ry="9" fill="rgba(255,255,255,0.3)" transform="rotate(-20 27 29)"/>
              <path d="M51 32 L72 37 L51 43 Z" fill="#3d2b1f" stroke="#2a1a10" strokeWidth="1"/>
              <ellipse cx="33" cy="40" rx="12" ry="10" fill="#b06000" opacity="0.42"/>
              <ellipse cx="33" cy="40" rx="12" ry="10" fill="none" stroke="#cc8800" strokeWidth="1.4"/>
              <circle cx="28" cy="40" r="2.5" fill="rgba(255,255,255,0.7)"/>
              <circle cx="36" cy="40" r="2.5" fill="rgba(255,255,255,0.7)"/>
              <circle cx="28" cy="40" r="1.4" fill="#1a1a3e"/>
              <circle cx="36" cy="40" r="1.4" fill="#1a1a3e"/>
              <ellipse cx="36" cy="57" rx="17" ry="5.5" fill="#b0bcd0" stroke="#8898b0" strokeWidth="1"/>
              <rect x="18" y="55" width="36" height="32" rx="10" fill="#e0e8f0" stroke="#b0bcc8" strokeWidth="1.4"/>
              <rect x="31" y="62" width="10" height="3" rx="1" fill="#dd3333"/>
              <rect x="34.5" y="60" width="3" height="7" rx="1" fill="#dd3333"/>
              <rect x="27" y="69" width="18" height="11" rx="4" fill="#a0b0c4" stroke="#8898b0" strokeWidth="1"/>
              <circle cx="31" cy="73" r="2" fill="#44ff88" opacity="0.9"/>
              <circle cx="36" cy="73" r="2" fill="#ffcc44" opacity="0.9"/>
              <circle cx="41" cy="73" r="2" fill="#ff5544" opacity="0.9"/>
              <rect x="5" y="57" width="15" height="25" rx="7.5" fill="#d8e0ec" stroke="#b0bcc8" strokeWidth="1.2"/>
              <ellipse cx="12" cy="84" rx="9" ry="7" fill="#2a2a44"/>
              <rect x="60" y="57" width="15" height="25" rx="7.5" fill="#d8e0ec" stroke="#b0bcc8" strokeWidth="1.2"/>
              <ellipse cx="67" cy="84" rx="9" ry="7" fill="#2a2a44"/>
              <rect x="6" y="59" width="11" height="7" rx="2" fill="#2244cc" stroke="#1133aa" strokeWidth="0.8"/>
              <text x="7.5" y="65" fontFamily="sans-serif" fontSize="5" fill="white" fontWeight="bold">DR</text>
              <rect x="22" y="85" width="13" height="11" rx="5" fill="#d8e0ec" stroke="#b0bcc8" strokeWidth="1"/>
              <rect x="41" y="85" width="13" height="11" rx="5" fill="#d8e0ec" stroke="#b0bcc8" strokeWidth="1"/>
              <ellipse cx="28" cy="96" rx="10" ry="5" fill="#2a2a44"/>
              <ellipse cx="47" cy="96" rx="10" ry="5" fill="#2a2a44"/>
            </svg>
          </div>
          <div className="card-name">{PROFILE.name}</div>
          <div className="card-role">Biomedical Engineering Student</div>
          <div className="stats">
            <div className="stat">
              <div className="stat-val">{PROFILE.stats.projects}</div>
              <div className="stat-lbl">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-val">{PROFILE.stats.experience}y</div>
              <div className="stat-lbl">Experience</div>
            </div>
            <div className="stat">
              <div className="stat-val">{PROFILE.stats.coffees}</div>
              <div className="stat-lbl">Coffees</div>
            </div>
            <div className="stat">
              <div className="stat-val">{PROFILE.stats.ideas}</div>
              <div className="stat-lbl">Ideas</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

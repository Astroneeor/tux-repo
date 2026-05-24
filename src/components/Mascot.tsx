type Props = {
  message: string
  onQuip: () => void
}

export default function Mascot({ message, onQuip }: Props) {
  return (
    <div id="mascot-row">
      <svg
        id="mascot"
        viewBox="0 0 80 100"
        fill="none"
        role="img"
        aria-label="Plague Doctor Astronaut mascot"
        onClick={onQuip}
      >
        {/* Hat brim */}
        <ellipse cx="36" cy="17" rx="32" ry="6" fill="#0f0f28" stroke="#1a1a44" strokeWidth="1.2"/>
        {/* Hat crown */}
        <rect x="21" y="3" width="30" height="16" rx="4" fill="#0f0f28" stroke="#1a1a44" strokeWidth="1.2"/>
        {/* Hat band */}
        <rect x="19" y="13" width="34" height="4.5" rx="1.2" fill="#1a1a60"/>
        {/* Hat buckle */}
        <rect x="32" y="13.5" width="8" height="3.5" rx="1" fill="#f0c040" opacity="0.9"/>
        <rect x="34" y="14.5" width="4" height="1.5" rx="0.5" fill="#c09020"/>

        {/* Helmet sphere */}
        <circle cx="36" cy="40" r="23" fill="#ccd8ec" stroke="#9aaabf" strokeWidth="1.8"/>
        {/* Helmet shine */}
        <ellipse cx="26" cy="30" rx="8" ry="11" fill="rgba(255,255,255,0.32)" transform="rotate(-22 26 30)"/>
        <ellipse cx="36" cy="54" rx="16" ry="6" fill="#8090a8" opacity="0.25"/>

        {/* Beak */}
        <path d="M53 34 L76 40 L53 46 Z" fill="#3a2818" stroke="#281608" strokeWidth="1.2"/>
        <line x1="57" y1="36" x2="57" y2="44" stroke="#4a3020" strokeWidth="0.8" opacity="0.6"/>
        <line x1="63" y1="37.5" x2="63" y2="42.5" stroke="#4a3020" strokeWidth="0.8" opacity="0.5"/>
        <circle cx="73" cy="39" r="1.4" fill="#1a0c04" opacity="0.9"/>
        <circle cx="73" cy="42" r="1.4" fill="#1a0c04" opacity="0.9"/>
        <circle cx="58" cy="40" r="1.6" fill="#5a3a22" stroke="#3a2010" strokeWidth="0.5"/>

        {/* Visor */}
        <ellipse cx="33" cy="41" rx="14" ry="12" fill="#b06000" opacity="0.4"/>
        <ellipse cx="33" cy="41" rx="14" ry="12" fill="none" stroke="#cc8800" strokeWidth="1.6"/>
        <ellipse cx="26" cy="35" rx="5" ry="6" fill="rgba(255,200,80,0.22)" transform="rotate(-15 26 35)"/>

        {/* Eyes */}
        <circle cx="28" cy="41" r="3" fill="rgba(255,255,255,0.72)"/>
        <circle cx="37" cy="41" r="3" fill="rgba(255,255,255,0.72)"/>
        <circle cx="28" cy="41" r="1.7" fill="#1a1a40"/>
        <circle cx="37" cy="41" r="1.7" fill="#1a1a40"/>
        <circle cx="28.8" cy="40.2" r="0.7" fill="white" opacity="0.95"/>
        <circle cx="37.8" cy="40.2" r="0.7" fill="white" opacity="0.95"/>

        {/* Neck ring */}
        <ellipse cx="36" cy="61" rx="18" ry="6" fill="#b0bcce" stroke="#8898b0" strokeWidth="1.3"/>

        {/* Suit body */}
        <rect x="17" y="59" width="38" height="32" rx="11" fill="#dde8f4" stroke="#aabace" strokeWidth="1.6"/>
        <line x1="36" y1="63" x2="36" y2="88" stroke="#c0cad8" strokeWidth="0.9" strokeDasharray="2.5,2.5"/>

        {/* Medical cross */}
        <rect x="30" y="65" width="12" height="3.5" rx="1.2" fill="#cc2222"/>
        <rect x="34" y="63" width="3.5" height="7.5" rx="1.2" fill="#cc2222"/>

        {/* Life support panel */}
        <rect x="26" y="73" width="20" height="13" rx="4" fill="#9ab0c8" stroke="#7898b0" strokeWidth="1.2"/>
        <circle cx="30" cy="78" r="2.2" fill="#33dd66" opacity="0.95"/>
        <circle cx="36" cy="78" r="2.2" fill="#ffcc33" opacity="0.95"/>
        <circle cx="42" cy="78" r="2.2" fill="#ff4433" opacity="0.95"/>
        <rect x="28" y="82" width="16" height="2" rx="1" fill="#6a80a0"/>

        {/* Left arm */}
        <rect x="4" y="61" width="15" height="27" rx="7.5" fill="#d4dff0" stroke="#aabace" strokeWidth="1.4"/>
        <ellipse cx="11" cy="90" rx="9" ry="7" fill="#22223c" stroke="#12122c" strokeWidth="1.2"/>
        <line x1="5"  y1="92" x2="7"  y2="96" stroke="#32324c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="9"  y1="94" x2="9"  y2="97" stroke="#32324c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="13" y1="94" x2="14" y2="97" stroke="#32324c" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="16" y1="92" x2="17" y2="96" stroke="#32324c" strokeWidth="1.2" strokeLinecap="round"/>

        {/* Right arm */}
        <rect x="61" y="61" width="15" height="27" rx="7.5" fill="#d4dff0" stroke="#aabace" strokeWidth="1.4"/>
        <ellipse cx="69" cy="90" rx="9" ry="7" fill="#22223c" stroke="#12122c" strokeWidth="1.2"/>

        {/* Shoulder patches */}
        <rect x="5" y="63" width="12" height="8" rx="2" fill="#1a3acc" stroke="#0a2aaa" strokeWidth="0.8"/>
        <text x="6.5" y="69.5" fontFamily="'Arial Narrow', sans-serif" fontSize="5.5" fill="white" fontWeight="bold">DR</text>
        <rect x="63" y="63" width="12" height="8" rx="2" fill="#1a3acc" stroke="#0a2aaa" strokeWidth="0.8"/>
        <circle cx="69" cy="67" r="3.5" fill="#cc1a33" stroke="white" strokeWidth="0.6"/>
        <text x="66.5" y="69" fontFamily="sans-serif" fontSize="4" fill="white" fontWeight="bold">MD</text>

        {/* Legs */}
        <rect x="21" y="89" width="14" height="13" rx="6" fill="#d4dff0" stroke="#aabace" strokeWidth="1.3"/>
        <rect x="41" y="89" width="14" height="13" rx="6" fill="#d4dff0" stroke="#aabace" strokeWidth="1.3"/>

        {/* Boots */}
        <ellipse cx="28" cy="102" rx="12" ry="5.5" fill="#22223c" stroke="#12122c" strokeWidth="1"/>
        <ellipse cx="48" cy="102" rx="12" ry="5.5" fill="#22223c" stroke="#12122c" strokeWidth="1"/>

        {/* Sparkles */}
        <circle cx="3"  cy="35" r="1.6" fill="#ffff88">
          <animate attributeName="opacity" values="0.9;0.15;0.9" dur="2.1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="75" cy="24" r="1.2" fill="#88ffff">
          <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.7s" repeatCount="indefinite"/>
        </circle>
        <circle cx="2"  cy="68" r="1"   fill="#ff88ff">
          <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="78" cy="52" r="1.6" fill="#ffff88">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.9s" repeatCount="indefinite"/>
        </circle>
        <path d="M77 14 L78 11 L79 14 L76 13 Z" fill="#ffffaa">
          <animate attributeName="opacity" values="0.85;0.25;0.85" dur="2.3s" repeatCount="indefinite"/>
        </path>
        <path d="M1 50 L2 47 L3 50 L0 49 Z" fill="#aaffff">
          <animate attributeName="opacity" values="0.75;0.2;0.75" dur="1.6s" repeatCount="indefinite"/>
        </path>
      </svg>

      <div id="bubble">{message}</div>
    </div>
  )
}

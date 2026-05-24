// ============================================================
// All personal content lives here — edit this file to update
// the website. No need to touch any component files.
// ============================================================

export type Project = {
  icon: string
  title: string
  desc: string
  tags: string[]
  url?: string
}

export type TimelineItem = {
  date: string
  title: string
  org: string
  desc: string
}

export type SkillGroup = {
  label: string
  skills: string[]
}

// ── Profile ──────────────────────────────────────────────────

export const PROFILE = {
  name: 'Neeor Alam',
  tagline: 'Biomedical Engineering · Builder · Cosmic Wanderer',
  bio: [
    'I build things — circuits, software, organizations, and occasionally fictional space-medicine protocols. Whether it\'s a slick interface, a clinical device prototype, or a personal site styled after a children\'s art program, I\'m fully committed.',
    'Currently studying Biomedical Engineering at the University of Calgary, where I lead teams tackling clinical challenges, run wet-lab biosensor experiments, and mentor students navigating healthcare and research. Outside that, I\'m probably tinkering with my home server, arguing about optimal Quran-app UX, or staring into the void wondering if Tux Paint actually had better UX than most enterprise software.',
    'Use the tools on the left to explore. Watch out for the eraser — the mascot has strong feelings about it.',
  ],
  tags: [
    'Biomedical Engineering',
    'Circuit Design',
    'Research & Mentorship',
    'Web Development',
    'Video Production',
    'Space Medicine Enjoyer',
  ],
  stats: {
    projects: '4+',
    experience: '2+',
    coffees: '∞',
    ideas: '∞',
  },
}

// ── Contact ───────────────────────────────────────────────────

export const CONTACT = {
  email: 'neeor.alam06@gmail.com',
  github: 'Astroneeor',
  linkedin: 'astroneeor',
}

// ── Projects ─────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    icon: '🖥️',
    title: 'Home Server',
    desc: 'Self-hosted infrastructure — local services, automation, and a whole lot of config files. Because the cloud is just someone else\'s computer.',
    tags: ['Linux', 'Networking', 'Automation'],
  },
  {
    icon: '📖',
    title: 'Desktop Quran App',
    desc: 'A clean, offline-first desktop app for reading the Quran. Personal project born from wanting something that just works without an internet connection.',
    tags: ['Electron', 'TypeScript', 'Desktop'],
  },
  {
    icon: '🌐',
    title: 'Personal Website Game',
    desc: 'This very site — a Tux Paint-themed personal portfolio with a real drawing canvas. Because why settle for a boring static page?',
    tags: ['React', 'TypeScript', 'Canvas API'],
  },
  {
    icon: '🎙️',
    title: 'Local Dictation App',
    desc: 'Speech-to-text that runs entirely on your own hardware. No cloud, no subscriptions — just whisper something and watch it appear.',
    tags: ['Python', 'Whisper', 'Speech-to-text'],
  },
]

// ── Resume ────────────────────────────────────────────────────

export const EXPERIENCE: TimelineItem[] = [
  {
    date: 'Sep 2025 – Present',
    title: 'Project Lead',
    org: 'Project 90 — University of Calgary',
    desc: 'Managing an undergraduate engineering team solving a real clinical challenge. Fast iterations on circuit design and professional engineering process.',
  },
  {
    date: 'Dec 2025 – Present',
    title: 'Wet Lab & Member',
    org: 'BioMod UCalgary',
    desc: 'Creating and validating protocols for an Aptamer Electrochemical Biosensor. Running binding, detection, and efficiency tests; sourcing sponsorships.',
  },
  {
    date: 'Sep 2023 – Present',
    title: 'Research Team Lead',
    org: 'University of Calgary',
    desc: 'Mentored 100+ first- and second-generation immigrants navigating Canadian healthcare and research. Led lesson planning and connected students to industry.',
  },
  {
    date: 'Jan 2025 – Present',
    title: 'Logistics Lead',
    org: 'Ascend Calgary',
    desc: 'Coordinating logistics and operations for a Calgary-based youth leadership organization.',
  },
  {
    date: 'Dec 2023 – Jan 2025',
    title: 'Contract Video Producer',
    org: 'Read The Peak',
    desc: 'Scripted, filmed and edited weekly stories based on The Peak newsletter. Developed public-speaking and media skills using CapCut, DaVinci Resolve, and AI tools.',
  },
  {
    date: 'Jan 2023 – Aug 2023',
    title: 'Co-founder',
    org: 'MarketNK',
    desc: 'Built a freelance digital-marketing agency from cold outreach to paying clients. Learned WordPress/Wix, SEO, and the art of the follow-up email.',
  },
]

export const EDUCATION: TimelineItem[] = [
  {
    date: 'Sep 2024 – Apr 2029',
    title: 'Bachelor\'s of Engineering — Biomedical Engineering',
    org: 'University of Calgary',
    desc: 'GPA 3.3 — focus on circuit design, biosensors, and clinical device development.',
  },
  {
    date: 'Sep 2021 – May 2024',
    title: 'High School Diploma',
    org: 'Henry Wise Wood',
    desc: 'GPA 4.0',
  },
  {
    date: 'Cohort Graduate',
    title: 'Cansbridge Scholar',
    org: 'Meraki Cohort',
    desc: 'Competitive fellowship for ambitious Canadian students.',
  },
  {
    date: 'Alumni',
    title: 'Activate & Innovate',
    org: 'The Knowledge Society',
    desc: 'Global program for emerging innovators working on future-tech problems.',
  },
]

export const SKILLS: SkillGroup[] = [
  {
    label: 'Engineering',
    skills: ['Circuit Design', 'Biosensors', 'Protocol Development', 'CAD'],
  },
  {
    label: 'Software',
    skills: ['Python', 'TypeScript', 'React', 'Linux', 'Electron'],
  },
  {
    label: 'Leadership & Comms',
    skills: ['Team Lead', 'Mentorship', 'Video Production', 'Event Logistics'],
  },
  {
    label: 'Other',
    skills: ['Cold Outreach', 'Digital Marketing', 'Space Medicine (self-taught)'],
  },
]

// ── Mascot speech ─────────────────────────────────────────────

export const TIPS: Record<string, string> = {
  about:    'Paint your story! This is the About Me section.',
  projects: 'Stamp of approval — these are my projects!',
  contact:  'My coordinates — pick your preferred channel.',
  resume:   'Fill in the details — here\'s the resume!',
  magic:    'Magic mode! Drag or swipe left/right to glide between sections. ✨',
  eraser:   'Nothing to erase... but you found the easter egg! 🎉',
  draw:     'Draw mode! Scribble on the canvas. Pick a color below. 🎨',
}

export const QUIPS: string[] = [
  'Plague doctor AND astronaut. I contain multitudes.',
  'The beak is for filtering bad vibes. Obviously.',
  'Zero gravity is excellent for the humors.',
  'Ad astra per aspera — and miasma protection.',
  'I\'ve inoculated against both plague AND cosmic radiation.',
  'The wide-brimmed hat works in any atmosphere.',
  'Don\'t touch the eraser. Trust the process.',
  'GPA 3.3 in biomedical engineering. The 0.7 went to the biosensor.',
]

// ── Palette swatches ─────────────────────────────────────────

export const SWATCHES: string[] = [
  'oklch(25% 0.025 265)',
  'oklch(20% 0.05 280)',
  'oklch(62% 0.19 255)',
  'oklch(58% 0.18 275)',
  'oklch(60% 0.20 305)',
  'oklch(72% 0.20 305)',
  'oklch(65% 0.15 155)',
  'oklch(62% 0.18 145)',
  'oklch(72% 0.15 60)',
  'oklch(75% 0.18 45)',
  'oklch(65% 0.20 25)',
  'oklch(55% 0.22 15)',
  'oklch(80% 0.08 60)',
  'oklch(92% 0.04 265)',
  'oklch(50% 0.015 265)',
  'oklch(35% 0.02 265)',
  'oklch(20% 0.03 265)',
  'oklch(11% 0.025 265)',
]

export const assets = {
  logoPng: '/sample/branding/logo.png',
  logoFallback: '/logo.svg',
  video: '/sample/video/construction.mp4',
  locationVideo: '/sample/video/location.mp4',
  hero: '/sample/projects/project-01.jpg',
  about: '/sample/projects/project-02.jpg',
  locationImage: '/sample/projects/project-02.jpg',
  leaderMain: '/sample/leadership/leader-main.jpg',
  vision2030: '/sample/vision/vision-2030.jpg',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export const company = {
  name: 'Al Dur Al Nafees',
  legalName: 'Al Dur Al Nafees General Contracting Est.',
  tagline: 'General Contracting Est.',
  established: '2016',
  location: 'Al Majmaah Industrial Area, Riyadh Province, Kingdom of Saudi Arabia',
  phone: '059 082 1464',
  phoneHref: 'tel:0590821464',
  whatsapp: 'https://wa.me/966590821464',
  email: 'info@aldurnafees.com',
  emailHref: 'mailto:info@aldurnafees.com',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Al+Majmaah+Industrial+Area+Riyadh+Province+Saudi+Arabia',
}

export const hero = {
  eyebrow: 'Established 2016 · Riyadh Province · Kingdom of Saudi Arabia',
  titleLines: ['Contracting with', 'precision for', 'Saudi progress.'],
  body:
    'A Saudi general contractor delivering construction, manpower, equipment rental, and material supply services for industrial and commercial programs across the Kingdom.',
  primaryCta: { label: 'Explore Services', href: '#services' },
  secondaryCta: { label: 'View Projects', href: '#projects' },
}

export const stats = [
  { value: 8, suffix: '+', label: 'Years in Operation', sub: 'Established 2016' },
  { value: 150, suffix: '+', label: 'Projects Supported', sub: 'Across Saudi Arabia' },
  { value: 4, suffix: '', label: 'Core Service Lines', sub: 'Integrated delivery' },
  { value: 100, suffix: '%', label: 'Saudi Market Focus', sub: 'Vision 2030 aligned' },
]

export const about = {
  kicker: 'Who We Are',
  mediaCaption: 'On-site execution · Riyadh Province',
  title: 'A Saudi contracting partner built for disciplined project delivery.',
  paragraphs: [
    'Headquartered in Al Majmaah Industrial Area, Riyadh Province, Al Dur Al Nafees supports industrial, commercial, and infrastructure-focused programs with practical field capability and dependable execution.',
    'Our work brings together construction, manpower, equipment rental, and material supply under one coordinated contracting platform, helping clients reduce delivery friction and keep projects moving with confidence.',
  ],
  facts: [
    { k: 'Founded', v: '2016' },
    { k: 'Head Office', v: 'Al Majmaah, Riyadh' },
    { k: 'Reach', v: 'Kingdom-wide' },
    { k: 'Focus', v: 'Industrial contracting' },
  ],
}

export const services = [
  {
    num: '01',
    title: 'Construction',
    desc:
      'Civil, architectural, structural, and MEP works coordinated with practical site control from preparation to handover.',
    items: ['Civil Works', 'Architectural', 'Structural', 'MEP Systems'],
    img: '/sample/projects/project-03.jpg',
  },
  {
    num: '02',
    title: 'Manpower Services',
    desc:
      'Skilled and semi-skilled workforce support for active sites, planned shutdowns, and long-running industrial programs.',
    items: ['Skilled Trades', 'Semi-skilled Labor', 'Operators', 'Workforce Planning'],
    img: '/sample/projects/project-04.jpg',
  },
  {
    num: '03',
    title: 'Equipment Rental',
    desc:
      'Heavy equipment and site machinery support with mobilization planning, maintenance coordination, and operator readiness.',
    items: ['Earthmoving', 'Lifting Support', 'Site Machinery', 'Rapid Mobilization'],
    img: '/sample/projects/project-05.jpg',
  },
  {
    num: '04',
    title: 'Material Supply',
    desc:
      'Reliable sourcing and delivery of construction materials and industrial supplies aligned with project schedules.',
    items: ['Construction Materials', 'Industrial Supplies', 'Quality Checks', 'Logistics'],
    img: '/sample/projects/project-06.jpg',
  },
]

export const projects = [
  {
    title: 'Industrial Facility Works',
    cat: 'Civil · Structural',
    loc: 'Riyadh Province',
    img: '/sample/projects/project-07.jpg',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Site Infrastructure Package',
    cat: 'Construction',
    loc: 'Kingdom of Saudi Arabia',
    img: '/sample/projects/project-08.jpg',
    span: '',
  },
  {
    title: 'MEP Coordination Scope',
    cat: 'MEP',
    loc: 'Riyadh',
    img: '/sample/projects/project-09.jpg',
    span: '',
  },
  {
    title: 'Equipment Mobilization',
    cat: 'Equipment Rental',
    loc: 'Active Site',
    img: '/sample/projects/project-10.jpg',
    span: '',
  },
  {
    title: 'Material Logistics Support',
    cat: 'Material Supply',
    loc: 'KSA',
    img: '/sample/projects/project-05.jpg',
    span: '',
  },
  {
    title: 'Manpower Deployment',
    cat: 'Workforce',
    loc: 'KSA',
    img: '/sample/projects/project-06.jpg',
    span: '',
  },
]

export const leadership = {
  kicker: 'Leadership',
  title: 'Leadership aligned with delivery and Vision 2030.',
  leaderName: 'Abdullah Bin Obaid Al Hamili',
  role: 'Leadership / Management',
  message:
    'Al Dur Al Nafees is guided by a practical leadership approach focused on dependable delivery, disciplined site support, and long-term client relationships across the Kingdom.',
  visionTitle: 'Vision 2030 Alignment',
  vision:
    'Supporting Saudi Arabia’s Vision 2030 through construction capability, industrial support, workforce mobilisation, and reliable project delivery.',
}

export const location = {
  title: 'Based in Riyadh Province. Supporting projects across the Kingdom.',
  body:
    'From Al Majmaah Industrial Area, Al Dur Al Nafees supports clients across Saudi Arabia with construction, manpower, equipment rental, and material supply services.',
  points: [
    'Headquarters: Al Majmaah Industrial Area',
    'Riyadh',
    'Jeddah',
    'Yanbu',
    'Khobar',
    'Jubail',
    'Kingdom-wide support',
  ],
  coordinates: '25.90°N · 45.36°E',
  marker: 'Headquarters: Al Majmaah Industrial Area',
  videoCaption: 'Kingdom-wide project support',
}

export const contactMethods = [
  { id: 'phone', label: 'Phone', value: company.phone, href: company.phoneHref },
  { id: 'email', label: 'Email', value: company.email, href: company.emailHref },
  { id: 'whatsapp', label: 'WhatsApp', value: 'Message us directly', href: company.whatsapp },
  { id: 'location', label: 'Head Office', value: company.location, href: company.mapsHref },
]

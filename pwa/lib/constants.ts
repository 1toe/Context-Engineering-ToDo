export const SITE_CONFIG = {
  name: 'Context Engineering',
  title: 'Context Engineering - Del Prompting a Sistemas Multi-Agente',
  description: 'Framework completo de ingeniería de contexto para LLMs. Desde fundamentos hasta teoría unificada de campos, RAG, memoria y sistemas multi-agente.',
  url: 'https://context-engineering.vercel.app',
  author: 'David Kimai',
  repository: 'https://github.com/davidkimai/Context-Engineering',
  social: {
    github: 'https://github.com/davidkimai',
    twitter: 'https://twitter.com/davidkimai',
  },
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: 'Fundamentos',
    href: '/foundations',
    description: 'Desde átomos de prompting hasta teoría unificada',
  },
  {
    label: 'Curso',
    href: '/course',
    description: '15 módulos del cero al experto',
  },
  {
    label: 'Ejemplos',
    href: '/examples',
    description: 'Implementaciones prácticas',
  },
  {
    label: 'Plantillas',
    href: '/templates',
    description: 'Templates listos para usar',
  },
  {
    label: 'Herramientas Cognitivas',
    href: '/cognitive-tools',
    description: 'Arquitecturas y esquemas avanzados',
  },
  {
    label: 'Protocolos',
    href: '/protocols',
    description: 'Shells y esquemas de campo',
  },
] as const;

export const CONTENT_CATEGORIES = {
  foundations: {
    id: 'foundations',
    title: 'Fundamentos',
    description: 'Desde átomos de prompting hasta teoría unificada de campos',
    path: '../00_foundations',
    icon: 'BookOpen',
  },
  course: {
    id: 'course',
    title: 'Curso Completo',
    description: '15 módulos estructurados',
    path: '../00_COURSE',
    icon: 'Layers',
  },
  examples: {
    id: 'examples',
    title: 'Ejemplos',
    description: 'Chatbots, RAG, agentes y más',
    path: '../30_examples',
    icon: 'Code2',
  },
  templates: {
    id: 'templates',
    title: 'Plantillas',
    description: 'Templates y shells',
    path: '../20_templates',
    icon: 'Zap',
  },
  'cognitive-tools': {
    id: 'cognitive-tools',
    title: 'Herramientas Cognitivas',
    description: 'Arquitecturas y programas',
    path: '../cognitive-tools',
    icon: 'Brain',
  },
  protocols: {
    id: 'protocols',
    title: 'Protocolos',
    description: 'Shells y esquemas',
    path: '../60_protocols',
    icon: 'Network',
  },
  reference: {
    id: 'reference',
    title: 'Referencia',
    description: 'Guías y documentación',
    path: '../40_reference',
    icon: 'FileText',
  },
} as const;

import type { ProjectItem } from "@/types/project";

// TODO: substituir por projetos reais MC-SITES antes da publicação final.

export const MCSITES_PROJECTS: ProjectItem[] = [
  {
    slug: "site-institucional-servicos-b2b",
    title: "Site Institucional — Serviços B2B",
    category: "Site Institucional",
    shortDescription:
      "Estrutura institucional para apresentar serviços, credibilidade e pontos de contato com clareza.",
    overview: [
      "Projeto demonstrativo de um site institucional orientado a empresas de serviços B2B, com foco em arquitetura de conteúdo, hierarquia de informação e navegação objetiva.",
      "A proposta organiza proposta de valor, áreas de atuação e CTAs comerciais sem depender de elementos visuais genéricos ou narrativa de case fictício.",
    ],
    challenge:
      "Comunicar serviços complexos de forma clara, reduzir fricção na navegação e preparar uma base que possa receber novos conteúdos e integrações.",
    solution:
      "Definimos mapa de páginas, padrões de componentes reutilizáveis e estrutura semântica pensada para SEO técnico, performance e evolução futura do conteúdo.",
    services: ["Estratégia", "UX/UI", "Desenvolvimento", "SEO Técnico"],
    serviceSlugs: ["sites-profissionais", "ux-ui", "aplicacoes-web", "seo-tecnico"],
    technologies: ["React", "TypeScript", "Vite", "GSAP"],
    image: "assets/img/thumbnail/work1.png",
    listThumbPrimary: "assets/img/project/word-thumb1.png",
    listThumbSecondary: "assets/img/project/word-thumb2.png",
    galleryImages: [
      "assets/img/service/service-slide1.png",
      "assets/img/service/service-slide2.png",
    ],
    status: "placeholder",
  },
  {
    slug: "landing-page-geracao-leads",
    title: "Landing Page — Geração de Leads",
    category: "Landing Page",
    shortDescription:
      "Página de conversão com mensagem direta, hierarquia enxuta e CTA posicionado para captura de contato.",
    overview: [
      "Projeto demonstrativo de landing page voltada à geração de leads, com estrutura pensada para campanhas e propostas comerciais específicas.",
      "O layout prioriza leitura rápida, prova contextual e formulário acessível, sem prometer resultados ou métricas inventadas.",
    ],
    challenge:
      "Concentrar a mensagem em um único objetivo, eliminar distrações e conduzir o visitante até o ponto de contato com clareza.",
    solution:
      "Organizamos seções por intenção de conversão, definimos copy enxuta e implementamos base responsiva preparada para integração futura com analytics.",
    services: ["Estratégia", "UX/UI", "Desenvolvimento", "Performance"],
    serviceSlugs: ["landing-pages", "ux-ui", "aplicacoes-web", "performance-cro"],
    technologies: ["React", "TypeScript", "Vite"],
    image: "assets/img/thumbnail/work2.png",
    listThumbPrimary: "assets/img/project/word-thumb3.png",
    listThumbSecondary: "assets/img/project/word-thumb4.png",
    galleryImages: [
      "assets/img/service/service-slide2.png",
      "assets/img/thumbnail/design-thumb.png",
    ],
    status: "placeholder",
  },
  {
    slug: "plataforma-web-area-cliente",
    title: "Plataforma Web — Área do Cliente",
    category: "Aplicação Web",
    shortDescription:
      "Interface web com fluxos orientados a tarefas, componentes reutilizáveis e base preparada para integrações.",
    overview: [
      "Projeto demonstrativo de aplicação web com área logada e fluxos funcionais, representando cenários em que o site deixa de ser vitrine e passa a ser ferramenta.",
      "A abordagem combina clareza de jornada, consistência visual e arquitetura modular para facilitar manutenção e evolução.",
    ],
    challenge:
      "Traduzir processos e tarefas recorrentes em uma interface compreensível, responsiva e tecnicamente sustentável.",
    solution:
      "Estruturamos telas por objetivo do usuário, componentizamos padrões de interface e preparamos integração com APIs conforme necessidade do produto.",
    services: ["UX/UI", "Desenvolvimento", "Performance"],
    serviceSlugs: ["aplicacoes-web", "ux-ui", "performance-cro"],
    technologies: ["React", "TypeScript", "APIs REST"],
    image: "assets/img/thumbnail/work23.png",
    listThumbPrimary: "assets/img/project/word-thumb5.png",
    listThumbSecondary: "assets/img/project/word-thumb6.png",
    galleryImages: [
      "assets/img/thumbnail/app-thumb.png",
      "assets/img/service/service-details1.png",
    ],
    status: "placeholder",
  },
  {
    slug: "ux-ui-jornada-servicos",
    title: "UX/UI — Jornada de Serviços",
    category: "UX/UI",
    shortDescription:
      "Mapeamento de jornada, hierarquia visual e padrões de interface para tornar serviços digitais mais claros.",
    overview: [
      "Projeto demonstrativo focado em experiência do usuário e interface, aplicado a um ecossistema de páginas e componentes de serviço.",
      "O trabalho enfatiza leitura, contraste de informação e consistência entre seções — sem apresentar entrega a cliente real.",
    ],
    challenge:
      "Organizar conteúdo técnico e comercial em uma experiência coerente, reduzindo atrito entre descoberta, compreensão e ação.",
    solution:
      "Definimos wireframes, sistema visual aplicado e componentes reutilizáveis alinhados à estratégia de conteúdo e aos objetivos de navegação.",
    services: ["Estratégia", "UX/UI", "Desenvolvimento"],
    serviceSlugs: ["ux-ui", "sites-profissionais", "aplicacoes-web"],
    technologies: ["Design System", "React", "TypeScript"],
    image: "assets/img/thumbnail/design-thumb.png",
    listThumbPrimary: "assets/img/project/word-thumb2.png",
    listThumbSecondary: "assets/img/project/word-thumb1.png",
    galleryImages: [
      "assets/img/thumbnail/crafting-thumb1.png",
      "assets/img/thumbnail/crafting-thumb2.png",
    ],
    status: "placeholder",
  },
  {
    slug: "seo-performance-refino-tecnico",
    title: "SEO & Performance — Refino Técnico",
    category: "SEO & Performance",
    shortDescription:
      "Estrutura semântica, otimização de assets e ajustes técnicos para melhorar descoberta e experiência de carregamento.",
    overview: [
      "Projeto demonstrativo de refinamento técnico em presença digital existente, com foco em SEO, performance e qualidade de entrega front-end.",
      "A abordagem documenta decisões técnicas e melhorias incrementais, sem simular resultados de tráfego ou conversão.",
    ],
    challenge:
      "Identificar gargalos estruturais que impactam indexação, velocidade percebida e clareza semântica do conteúdo.",
    solution:
      "Revisamos headings, metadados, assets, responsividade e pontos de conversão com critérios mensuráveis de engenharia, não de marketing inventado.",
    services: ["SEO Técnico", "Performance", "Desenvolvimento"],
    serviceSlugs: ["seo-tecnico", "performance-cro", "aplicacoes-web"],
    technologies: ["Core Web Vitals", "HTML Semântico", "React", "TypeScript"],
    image: "assets/img/thumbnail/crafting-thumb4.png",
    listThumbPrimary: "assets/img/project/word-thumb4.png",
    listThumbSecondary: "assets/img/project/word-thumb3.png",
    galleryImages: [
      "assets/img/service/service-box5.png",
      "assets/img/service/service-box6.png",
    ],
    status: "placeholder",
  },
];

export function getProjectBySlug(slug: string | undefined): ProjectItem | undefined {
  if (!slug) {
    return undefined;
  }

  return MCSITES_PROJECTS.find((project) => project.slug === slug);
}

export function getProjectDetailPath(slug: string): string {
  return `/project-details/${slug}`;
}

export function getFeaturedProjects(limit = 3): ProjectItem[] {
  return MCSITES_PROJECTS.slice(0, limit);
}

export function getAdjacentProjects(slug: string): {
  previous?: ProjectItem;
  next?: ProjectItem;
} {
  const index = MCSITES_PROJECTS.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previous: index > 0 ? MCSITES_PROJECTS[index - 1] : undefined,
    next: index < MCSITES_PROJECTS.length - 1 ? MCSITES_PROJECTS[index + 1] : undefined,
  };
}

export function getProjectServicePath(project: ProjectItem, serviceIndex: number): string | undefined {
  const serviceSlug = project.serviceSlugs?.[serviceIndex];

  if (!serviceSlug) {
    return undefined;
  }

  return `/service-details/${serviceSlug}`;
}

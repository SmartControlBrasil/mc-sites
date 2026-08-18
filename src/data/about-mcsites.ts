import type {
  AboutDifferentiator,
  AboutPrinciple,
  AboutProcessStep,
  AboutTechnicalFocus,
} from "@/types/about";

export const MCSITES_ABOUT_POSITIONING =
  "Sites, experiências digitais e desenvolvimento web.";

export const MCSITES_ABOUT_SUPPORT =
  "O MC-SITES desenvolve experiências digitais com foco em clareza, performance, usabilidade e resultado.";

export const MCSITES_ABOUT_WHO_WE_ARE = {
  title: "Construímos experiências digitais com propósito.",
  paragraphs: [
    "O MC-SITES nasce da combinação entre desenvolvimento web, design de experiência, performance e estratégia digital. Cada projeto é pensado para resolver um problema real, comunicar com clareza e criar uma base tecnológica preparada para evoluir.",
    "Não tratamos um site apenas como uma peça visual. Estrutura, navegação, conteúdo, desempenho e conversão fazem parte da mesma solução.",
  ],
} as const;

export const MCSITES_ABOUT_PRINCIPLES: AboutPrinciple[] = [
  {
    title: "Estratégia antes do código",
    description:
      "Antes de desenvolver, buscamos entender contexto, objetivo, público e prioridade.",
  },
  {
    title: "Experiência com clareza",
    description:
      "Interfaces devem orientar o usuário, reduzir atrito e tornar a navegação intuitiva.",
  },
  {
    title: "Performance como requisito",
    description:
      "Velocidade, responsividade e eficiência técnica fazem parte do projeto desde o início.",
  },
  {
    title: "Evolução contínua",
    description:
      "Uma boa presença digital deve poder crescer, integrar novas ferramentas e acompanhar o negócio.",
  },
];

export const MCSITES_ABOUT_TECHNICAL = {
  title: "Engenharia web aplicada ao negócio.",
  intro:
    "As tecnologias são escolhidas para resolver problemas reais de produto — não para compor uma lista de ferramentas. Priorizamos código legível, estrutura modular e bases que suportam evolução.",
  focuses: [
    {
      label: "React e TypeScript",
      context:
        "para construir interfaces consistentes, tipadas e mais fáceis de manter ao longo do tempo.",
    },
    {
      label: "Arquitetura baseada em componentes",
      context:
        "para organizar interfaces complexas em blocos reutilizáveis e previsíveis.",
    },
    {
      label: "Integração com APIs",
      context:
        "quando o projeto exige conteúdo dinâmico, formulários, dashboards ou conexão com sistemas externos.",
    },
    {
      label: "SEO técnico e acessibilidade",
      context:
        "com estrutura semântica, headings coerentes, metadados e atenção a padrões de inclusão digital.",
    },
    {
      label: "Performance e responsividade",
      context:
        "com foco em carregamento, adaptação a diferentes dispositivos e experiência fluida.",
    },
    {
      label: "Analytics",
      context:
        "como evolução futura, para medir comportamento e orientar melhorias com base em dados reais.",
    },
  ] satisfies AboutTechnicalFocus[],
} as const;

export const MCSITES_ABOUT_PROCESS = {
  title: "Do alinhamento à entrega",
  summary:
    "Cada projeto segue etapas claras para conectar objetivo de negócio, experiência do usuário, implementação e refinamento final.",
  steps: [
    { label: "Estratégia" },
    { label: "UX/UI" },
    { label: "Desenvolvimento" },
    { label: "Otimização" },
  ] satisfies AboutProcessStep[],
  ctaLabel: "Conheça nossos serviços",
  ctaPath: "/service",
} as const;

export const MCSITES_ABOUT_DIFFERENTIATORS: AboutDifferentiator[] = [
  {
    title: "Projeto orientado por objetivo",
    description: "Escopo, conteúdo e funcionalidades alinhados ao que o negócio precisa resolver.",
  },
  {
    title: "Desenvolvimento responsivo",
    description: "Interfaces pensadas para desktop, tablet e mobile desde o início.",
  },
  {
    title: "SEO técnico integrado",
    description: "Estrutura, metadados e arquitetura preparados para indexação e clareza.",
  },
  {
    title: "Atenção à performance",
    description: "Carregamento, eficiência de código e experiência fluida como parte do escopo.",
  },
  {
    title: "Arquitetura preparada para evolução",
    description: "Base modular que facilita novas páginas, integrações e melhorias futuras.",
  },
  {
    title: "Comunicação clara durante o projeto",
    description: "Etapas, entregas e decisões acompanhadas com transparência e objetividade.",
  },
];

export const MCSITES_ABOUT_CTA = {
  title: "Tem um projeto em mente?",
  text: "Conte o que você precisa e vamos avaliar o melhor caminho para transformar a ideia em uma experiência digital profissional.",
  buttonLabel: "Falar sobre meu projeto",
  buttonPath: "/contact",
} as const;

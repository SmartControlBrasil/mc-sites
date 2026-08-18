
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Estratégia",
    description:
      "Entendemos objetivos, público, posicionamento, funcionalidades e prioridades antes de começar a construir.",
    styleClass: "style1",
  },
  {
    number: "02",
    title: "UX/UI",
    description:
      "Estruturamos a jornada, a hierarquia de informação e a experiência visual para tornar a navegação clara e eficiente.",
    styleClass: "style2",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Transformamos a solução em uma aplicação web responsiva, performática e preparada para evoluir.",
    styleClass: "style3",
  },
  {
    number: "04",
    title: "Otimização",
    description:
      "Refinamos performance, SEO técnico, acessibilidade e pontos de conversão antes da entrega.",
    styleClass: "style4",
  },
] as const;

export default function McSitesProcessArea() {
  const [firstRow, secondRow] = [
    PROCESS_STEPS.slice(0, 2),
    PROCESS_STEPS.slice(2, 4),
  ];

  return (
    <section id="processo" className="my-process-section section-padding fix" aria-labelledby="processo-title">
      <div className="container pb-sm-5">
        <div className="process-wrap">
          <div className="row g-0">
            {firstRow.map((step) => (
              <div key={step.number} className="col-sm-6">
                <h3 className={`process-title ${step.styleClass}`}>
                  <span className="process-step-heading">
                    {step.number} — {step.title}
                  </span>
                  <span className="process-step-desc">{step.description}</span>
                </h3>
              </div>
            ))}
            <div className="col-12">
              <h2
                id="processo-title"
                className="process-wrap-title mb-lg-3 mb-3 mt-lg-3 mt-3 heading-font fw-bold"
              >
                Como construímos
              </h2>
              <p className="text-center fs-six pra-clr mx-auto mb-0 px-3 process-intro">
                Cada projeto passa por etapas claras para alinhar estratégia, experiência,
                desenvolvimento e resultado.
              </p>
            </div>
            {secondRow.map((step) => (
              <div key={step.number} className="col-sm-6">
                <h3 className={`process-title ${step.styleClass}`}>
                  <span className="process-step-heading">
                    {step.number} — {step.title}
                  </span>
                  <span className="process-step-desc">{step.description}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const pillars = [
  {
    label: "Design responsivo",
    value: "Mobile-first",
    align: "start",
    border: "border-bottom border-end",
  },
  {
    label: "Performance web",
    value: "Core Web Vitals",
    align: "end",
    border: "border-bottom",
  },
  {
    label: "SEO técnico",
    value: "Estrutura semântica",
    align: "end",
    border: "border-end",
  },
  {
    label: "Acessibilidade",
    value: "Padrões WCAG",
    align: "start",
    border: "",
  },
] as const;

export default function CountDownAreaOne() {
  return (
    <>
      {/* <!-- crafting Section Start --> */}
      <section id="sobre" className="crafting-section-unique black-version fix section-padding">
        <div className="container">
          <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
            <div className="text-white opacity-75 fw-medium fs--18px">{"02"}</div>
            <div className="line w-100"></div>
            <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
              <i className="fa-solid fa-circle"></i>
              SOBRE
            </div>
          </div>
          <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title02 mb-48 mx-auto">
            <h2 className="white-clr text-center fs-64px visible-slowly-bottom fw-bold d-block">
              Desenvolvimento digital com estratégia e engenharia.
            </h2>
            <p className="text-white opacity-75 text-center fs-six mx-auto mt-3" style={{ maxWidth: "720px" }}>
              O MC-SITES é um projeto especializado em construir experiências digitais profissionais —
              sites, landing pages e aplicações web com foco em performance, usabilidade e resultado comercial.
            </p>
          </div>
          <div className="thumb-inner-one d-flex justify-content-between">
            <div className="thumb rounded-4 wow fadeInUp" data-wow-delay="0.6s">
              <img src="assets/img/thumbnail/crafting-thumb1.png" alt="Desenvolvimento web" className="rounded-4" />
            </div>
            <div className="thumb rounded-4 wow fadeInUp" data-wow-delay="0.7s">
              <img src="assets/img/thumbnail/crafting-thumb2.png" alt="Experiência digital" className="rounded-4" />
            </div>
          </div>
          <div className="crafting-counter-wrap">
            <div className="row g-0">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="col-sm-6 col-6">
                  <div
                    className={`crafting-items pt-lg-5 pt-4 px-sm-0 px-2 pb-4 border-clr-this ${pillar.border} ${pillar.align === "end" ? "d-flex justify-content-end" : ""}`}
                  >
                    <div className="box pt-md-5 pt-4">
                      <p className="fs-six fw-normal text-white opacity-75 mb-1">{pillar.label}</p>
                      <p className="fs-24px fw-bold text-white heading-font mb-0">{pillar.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="thumb-inner-two d-flex justify-content-between">
            <div className="thumb rounded-4 wow fadeInUp" data-wow-delay="0.8s">
              <img src="assets/img/thumbnail/crafting-thumb3.png" alt="Performance web" className="rounded-4" />
            </div>
            <div className="thumb rounded-4 wow fadeInUp" data-wow-delay="0.9s">
              <img src="assets/img/thumbnail/crafting-thumb4.png" alt="SEO técnico" className="rounded-4" />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

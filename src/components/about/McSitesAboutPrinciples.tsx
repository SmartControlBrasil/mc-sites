import { MCSITES_ABOUT_PRINCIPLES } from "@/data/about-mcsites";

export default function McSitesAboutPrinciples() {
  return (
    <section
      className="crafting-section-unique black-version fix section-padding pt-0"
      aria-labelledby="about-principles-title"
    >
      <div className="container">
        <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
          <div className="text-white opacity-75 fw-medium fs--18px">01</div>
          <div className="line w-100"></div>
          <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
            <i className="fa-solid fa-circle"></i>
            Princípios
          </div>
        </div>
        <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title02 mb-48 mx-auto">
          <h2
            id="about-principles-title"
            className="white-clr text-center fs-64px visible-slowly-bottom fw-bold d-block"
          >
            O que orienta cada projeto
          </h2>
        </div>
        <div className="row g-4">
          {MCSITES_ABOUT_PRINCIPLES.map((principle, index) => (
            <div key={principle.title} className="col-md-6">
              <article
                className="about-principle-card h-100 wow fadeInUp"
                data-wow-delay={`${0.5 + index * 0.1}s`}
              >
                <h3 className="fs-20px text-white heading-font fw-bold mb-3">{principle.title}</h3>
                <p className="text-white opacity-75 mb-0">{principle.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

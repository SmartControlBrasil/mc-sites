import { MCSITES_ABOUT_TECHNICAL } from "@/data/about-mcsites";

export default function McSitesAboutTechnical() {
  return (
    <section className="section-padding fix" aria-labelledby="about-technical-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <p className="fs--18px text-uppercase fw-semibold mb-3 pra-clr text-center wow fadeInUp" data-wow-delay="0.4s">
              Abordagem técnica
            </p>
            <h2
              id="about-technical-title"
              className="text-center fw-bold visible-slowly-bottom mb-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              {MCSITES_ABOUT_TECHNICAL.title}
            </h2>
            <p
              className="fs-six pra-clr text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.6s"
              style={{ maxWidth: "760px" }}
            >
              {MCSITES_ABOUT_TECHNICAL.intro}
            </p>
            <div className="row g-4">
              {MCSITES_ABOUT_TECHNICAL.focuses.map((focus, index) => (
                <div key={focus.label} className="col-md-6">
                  <article
                    className="about-technical-item h-100 wow fadeInUp"
                    data-wow-delay={`${0.5 + index * 0.08}s`}
                  >
                    <h3 className="fs-20px heading-font fw-bold mb-2">{focus.label}</h3>
                    <p className="fs-six pra-clr mb-0">{focus.context}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

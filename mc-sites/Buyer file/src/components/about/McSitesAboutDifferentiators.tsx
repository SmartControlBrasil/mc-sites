import { MCSITES_ABOUT_DIFFERENTIATORS } from "@/data/about-mcsites";

export default function McSitesAboutDifferentiators() {
  return (
    <section
      className="testimonial-section section-padding black-version fix pt-0"
      aria-labelledby="about-differentials-title"
    >
      <div className="container">
        <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
          <div className="text-white opacity-75 fw-medium fs--18px">02</div>
          <div className="line w-100"></div>
          <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
            <i className="fa-solid fa-circle"></i>
            Diferenciais
          </div>
        </div>
        <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title01 mb-48 mx-auto">
          <h2
            id="about-differentials-title"
            className="white-clr fs-64px visible-slowly-bottom fw-bold d-block"
          >
            Como trabalhamos na prática
          </h2>
        </div>
        <div className="row g-4">
          {MCSITES_ABOUT_DIFFERENTIATORS.map((item, index) => (
            <div key={item.title} className="col-lg-4 col-md-6">
              <article
                className="testimonial-items testimonial-items001 h-100 wow fadeInUp"
                data-wow-delay={`${0.5 + index * 0.08}s`}
              >
                <div className="cont-box border black-bg p-xxl-4 p-3 h-100">
                  <h3 className="fs-20px text-white heading-font fw-bold mb-3">{item.title}</h3>
                  <p className="text-white mb-0 opacity-75">{item.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

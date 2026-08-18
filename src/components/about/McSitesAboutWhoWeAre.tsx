import { MCSITES_ABOUT_WHO_WE_ARE } from "@/data/about-mcsites";

export default function McSitesAboutWhoWeAre() {
  return (
    <section className="who-about-section fix section-padding" aria-labelledby="about-who-title">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="thumb-wrap">
              <div className="thumb mb-lg-4 mb-3 wow fadeInUp" data-wow-delay="0.5s">
                <img
                  src="assets/img/thumbnail/crafting-thumb1.png"
                  alt="Interface de experiência digital"
                  className="mimg rounded-4"
                />
              </div>
              <div className="thumb wow fadeInUp" data-wow-delay="0.6s">
                <img
                  src="assets/img/thumbnail/crafting-thumb2.png"
                  alt="Layout responsivo em desenvolvimento"
                  className="mimg rounded-4"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right-content">
              <div className="mb-4 pb-xxl-2">
                <p className="fs--18px text-uppercase fw-semibold mb-3 pra-clr wow fadeInUp" data-wow-delay="0.4s">
                  Quem somos
                </p>
                <h2
                  id="about-who-title"
                  className="visible-slowly-bottom fw-bold mb-4 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  {MCSITES_ABOUT_WHO_WE_ARE.title}
                </h2>
                {MCSITES_ABOUT_WHO_WE_ARE.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`fs-six pra-clr wow fadeInUp ${index === 0 ? "mb-3" : "mb-0"}`}
                    data-wow-delay={`${0.6 + index * 0.1}s`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

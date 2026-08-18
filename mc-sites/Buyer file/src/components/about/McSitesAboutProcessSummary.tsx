import { MCSITES_ABOUT_PROCESS } from "@/data/about-mcsites";
import { Link } from "react-router-dom";

export default function McSitesAboutProcessSummary() {
  return (
    <section
      className="our-approach-section section-padding fix pt-0"
      aria-labelledby="about-process-title"
    >
      <div className="container container1200">
        <div className="about-process-panel text-center wow fadeInUp" data-wow-delay="0.5s">
          <p className="fs--18px text-uppercase fw-semibold mb-3 pra-clr">Processo</p>
          <h2 id="about-process-title" className="fw-bold mb-3">
            {MCSITES_ABOUT_PROCESS.title}
          </h2>
          <p className="fs-six pra-clr mx-auto mb-4" style={{ maxWidth: "720px" }}>
            {MCSITES_ABOUT_PROCESS.summary}
          </p>
          <ol className="about-process-flow list-unstyled d-flex flex-wrap justify-content-center align-items-center gap-2 gap-md-3 mb-4">
            {MCSITES_ABOUT_PROCESS.steps.map((step, index) => (
              <li key={step.label} className="d-flex align-items-center gap-2 gap-md-3">
                <span className="about-process-step">{step.label}</span>
                {index < MCSITES_ABOUT_PROCESS.steps.length - 1 && (
                  <span className="about-process-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <Link to={MCSITES_ABOUT_PROCESS.ctaPath} className="common_btn common_btn-blacktheme text-nowrap">
            {MCSITES_ABOUT_PROCESS.ctaLabel}
            <span className="icon_wrapper">
              <i className="fas fa-long-arrow-alt-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

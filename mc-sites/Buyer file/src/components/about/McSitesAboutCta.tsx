import { MCSITES_ABOUT_CTA } from "@/data/about-mcsites";
import { Link } from "react-router-dom";

export default function McSitesAboutCta() {
  return (
    <section className="section-padding fix pt-0" aria-labelledby="about-cta-title">
      <div className="container">
        <div className="contact-submit-area rounded-4 text-center wow fadeInUp" data-wow-delay="0.5s">
          <h2 id="about-cta-title" className="title pb-3 mb-3 fw-bold">
            {MCSITES_ABOUT_CTA.title}
          </h2>
          <p className="fs-six pra-clr mb-4 mx-auto" style={{ maxWidth: "640px" }}>
            {MCSITES_ABOUT_CTA.text}
          </p>
          <Link to={MCSITES_ABOUT_CTA.buttonPath} className="common_btn text-nowrap">
            {MCSITES_ABOUT_CTA.buttonLabel}
            <span className="icon_wrapper">
              <i className="fas fa-long-arrow-alt-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

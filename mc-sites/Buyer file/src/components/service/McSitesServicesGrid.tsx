import { MCSITES_SERVICES, getServiceDetailPath } from "@/data/services-mcsites";
import { Link } from "react-router-dom";

export default function McSitesServicesGrid() {
  return (
    <section className="drive-growth-section recent-word-section section-padding fix">
      <img src="assets/img/blog/blog-circle.png" alt="" className="circle-ele cir36" />
      <div className="container container1370 pt-2">
        <div className="drive-growth-wrap">
          {MCSITES_SERVICES.map((service, index) => (
            <div
              key={service.slug}
              className="drive-growth-items wow fadeInUp"
              data-wow-delay={`${0.5 + index * 0.1}s`}
            >
              <div className="cont position-relative z-1">
                <h2 className="text-center mb-3">
                  <Link to={getServiceDetailPath(service.slug)}>
                    {service.title}
                  </Link>
                </h2>
                <p className="text-center fs-six pra-clr mx-auto mb-3" style={{ maxWidth: "720px" }}>
                  {service.shortDescription}
                </p>
                <div className="drive-tags d-flex flex-wrap align-items-center gap-xxl-4 gap-xl-3 gap-2 justify-content-center">
                  {service.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              </div>
              <div className="drive-thumb-wrap gap-2 d-flex align-items-center justify-content-between w-100">
                <Link to={getServiceDetailPath(service.slug)} className="thumb1 d-block">
                  <img src={service.thumbPrimary} alt={service.title} />
                </Link>
                <Link to={getServiceDetailPath(service.slug)} className="thumb2 d-block">
                  <img src={service.thumbSecondary} alt={`${service.title} — detalhe`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

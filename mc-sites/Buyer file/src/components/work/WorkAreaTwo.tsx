import { Link } from "react-router-dom";


export default function WorkAreaTwo() {
  return (
    <>
      {/* <!-- work Section Start --> */}
      <section className="work-section-unique2 fix pb-sm-5 section-padding">
        <div className="container">
          <div className="d-flex flex-md-nowrap gap-2 flex-wrap align-items-end justify-content-between gap-4 mb-48">
            <div className="section-header-unique d-flex justify-content-start gap-2">
              <div className="text-rot text-theme fw-bold fs-20px text-uppercase table-rotated-header wow fadeInUp"
                data-wow-delay="0.4s">
                news & blog
              </div>
              <div>
                <div className="head-one wow fadeInUp" data-wow-delay="0.5s">
                  <span className="what fw-semibold">Selected</span>
                  <span></span>
                </div>
                <div className="head-two d-flex gap-xxl-3 gap-lg-2 gap-1 flex-lg-nowrap flex-wrap wow fadeInUp"
                  data-wow-delay="0.6s">
                  <span className="ab"><img src="assets/img/element/drive-theme.png" alt="img"
                    className="d-md-block d-none" /> Work</span>
                  <p>
                    We deliver strategic, creative, and performance-driven marketing services focused on
                    scaling brands, increasing
                    visibility,
                  </p>
                </div>
              </div>
            </div>
            <div className="text-md-end">
              <div className="fs-32px mb-4 text-md-end fw-bold text-uppercase">
                12 years of impact
              </div>
              <Link to="/blog" className="common_btn common_btn-blacktheme text-nowrap">
                view all articles
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="row g-xxl-5 g-4">
            <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="wroking-service-item02">
                <Link to="/blog-details" className="thumb">
                  <img src="assets/img/project/service-wrok1.png" alt="img" />
                  <span className="fs-32px fw-semibold date-badge z-2">
                    01<small className="fs--18px opacity-50 pra-clr fw-medium">/05</small>
                  </span>
                </Link>
                <div className="content d-flex align-items-center justify-content-between gap-2">
                  <div className="">
                    <Link to="/blog-details"
                      className="title d-block fs-32px heading-font fw-bold text-dark text-uppercase mb-3">
                      SaaS Dashboard Platform
                    </Link>
                    <p className="fs--18px fw-medium text-dark opacity-75">
                      Full-Stack Development
                    </p>
                  </div>
                  <div className="fs-32px text-dark opacity-50 heading-font">2025</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="wroking-service-item02">
                <Link to="/blog-details" className="thumb">
                  <img src="assets/img/project/service-wrok2.png" alt="img" />
                  <span className="fs-32px fw-semibold date-badge z-2">
                    02<small className="fs--18px opacity-50 pra-clr fw-medium">/05</small>
                  </span>
                </Link>
                <div className="content d-flex align-items-center justify-content-between gap-2">
                  <div className="">
                    <Link to="/blog-details"
                      className="title d-block fs-32px heading-font fw-bold text-dark text-uppercase mb-3">
                      API-Driven App Application
                    </Link>
                    <p className="fs--18px fw-medium text-dark opacity-75">
                      Backend Development
                    </p>
                  </div>
                  <div className="fs-32px text-dark opacity-50 heading-font">2026</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
              <div className="wroking-service-item02">
                <Link to="/blog-details" className="thumb">
                  <img src="assets/img/project/service-wrok3.png" alt="img" />
                  <span className="fs-32px fw-semibold date-badge z-2">
                    03<small className="fs--18px opacity-50 pra-clr fw-medium">/05</small>
                  </span>
                </Link>
                <div className="content d-flex align-items-center justify-content-between gap-2">
                  <div className="">
                    <Link to="/blog-details"
                      className="title d-block fs-32px heading-font fw-bold text-dark text-uppercase mb-3">
                      API-Driven App Application
                    </Link>
                    <p className="fs--18px fw-medium text-dark opacity-75">
                      Backend Development
                    </p>
                  </div>
                  <div className="fs-32px text-dark opacity-50 heading-font">2026</div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="wroking-service-item02">
                <Link to="/blog-details" className="thumb">
                  <img src="assets/img/project/service-wrok4.png" alt="img" />
                  <span className="fs-32px fw-semibold date-badge z-2">
                    04<small className="fs--18px opacity-50 pra-clr fw-medium">/05</small>
                  </span>
                </Link>
                <div className="content d-flex align-items-center justify-content-between gap-2">
                  <div className="">
                    <Link to="/blog-details"
                      className="title d-block fs-32px heading-font fw-bold text-dark text-uppercase mb-3">
                      SaaS Dashboard Platform
                    </Link>
                    <p className="fs--18px fw-medium text-dark opacity-75">
                      Frontend & Backend
                    </p>
                  </div>
                  <div className="fs-32px text-dark opacity-50 heading-font">2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

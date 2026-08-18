import { Link } from "react-router-dom";


export default function AwardsAreaThree() {
  return (
    <>
      {/* <!-- recent word Section Start --> */}
      <section className="recent-word-section fix">
        <img src="assets/img/blog/blog-circle.png" alt="img" className="circle-ele cir36" />
        <div className="container border-end border-start p-md-0">
          <div className="section-padding">
            <div
              className="d-flex flex-md-nowrap gap-2 border-bottom pb-4 flex-wrap align-items-end justify-content-center gap-4 mb-48">
              <div className="section-header-unique d-flex justify-content-start gap-2">
                <div>
                  <div className="head-one d-flex mb-2 mb-md-0 align-items-center gap-2 flex-sm-nowrap flex-wrap mb-0 wow fadeInUp"
                    data-wow-delay="0.5s">
                    <span>OUR</span>
                    <span className="text-theme">RECENT</span>
                  </div>
                  <div className="head-two d-flex align-items-center gap-xxl-3 gap-lg-2 gap-1 flex-sm-nowrap flex-wrap wow fadeInUp"
                    data-wow-delay="0.6s">
                    <span className="ab text-nowrap">WORD</span>
                    <p className="text-start">
                      We deliver strategic, creative, and performance-driven marketing services focused on
                      scaling brands, increasing
                      visibility,
                    </p>
                    <Link to="/project"
                      className="common_btn common_btn-blacktheme mt-sm-0 mt-2 text-nowrap">
                      VIEW ALL project
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-word-wrapper">
              <div className="recent-single-items">
                <div className="recent-head wow fadeInUp" data-wow-delay="0.5s">
                  <Link to="/project-details" className="thumb rounded-4">
                    <img src="assets/img/project/word-thumb1.png" alt="img" className="w-100 img rounded-4" />
                  </Link>
                  <div className="serial text-nowrap">
                    01 <small>/05</small>
                  </div>
                </div>
                <div className="recent-word-content ms-lg-auto pt-3">
                  <div className="cont wow fadeInUp" data-wow-delay="0.6s">
                    <Link to="/project-details"
                      className="cart-title mb-2 d-block pb-1 text-dark fw-bold text-uppercase">
                      Brand Identity & Positioning
                    </Link>
                    <div className="d-flex mb-4 pb-lg-2 flex-wrap gap-xxl-3 gap-2 align-items-center">
                      <span
                        className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
                        UI/UX Design
                      </span>
                      <span
                        className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
                        2026
                      </span>
                    </div>
                    <div>
                      <Link to="/project-details"
                        className="read-more text-dark fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2">
                        VIEW PROJECT
                        <div className="bg-theme w-32 min-w-32 h-32 p1-bg rounded-circle d-center">
                          <img src="assets/img/icon/right-arrow.svg" alt="img" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link to="/service-details" className="thumb-small rounded-4 wow fadeInUp"
                    data-wow-delay="0.7s">
                    <img src="assets/img/project/word-thumb2.png" alt="img" className="w-100 img rounded-4" />
                  </Link>
                </div>
              </div>
              <div className="recent-single-items">
                <div className="recent-head wow fadeInUp" data-wow-delay="0.5s">
                  <div className="serial text-nowrap">
                    01 <small>/05</small>
                  </div>
                  <Link to="/project-details" className="thumb rounded-4">
                    <img src="assets/img/project/word-thumb3.png" alt="img" className="w-100 img rounded-4" />
                  </Link>
                </div>
                <div className="recent-word-content me-lg-auto pt-3">
                  <Link to="/service-details" className="thumb-small rounded-4 wow fadeInUp"
                    data-wow-delay="0.7s">
                    <img src="assets/img/project/word-thumb4.png" alt="img" className="w-100 img rounded-4" />
                  </Link>
                  <div className="cont wow fadeInUp" data-wow-delay="0.6s">
                    <Link to="/project-details"
                      className="cart-title mb-2 d-block pb-1 text-dark fw-bold text-uppercase">
                      Social Media Growth Campaign
                    </Link>
                    <div className="d-flex mb-4 pb-lg-2 flex-wrap gap-xxl-3 gap-2 align-items-center">
                      <span
                        className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
                        UI/UX Design
                      </span>
                      <span
                        className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
                        2026
                      </span>
                    </div>
                    <div>
                      <Link to="/project-details"
                        className="read-more text-dark fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2">
                        VIEW PROJECT
                        <div className="bg-theme w-32 min-w-32 h-32 p1-bg rounded-circle d-center">
                          <img src="assets/img/icon/right-arrow.svg" alt="img" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-single-items">
                <div className="recent-head wow fadeInUp" data-wow-delay="0.5s">
                  <Link to="/project-details" className="thumb rounded-4">
                    <img src="assets/img/project/word-thumb5.png" alt="img" className="w-100 img rounded-4" />
                  </Link>
                  <div className="serial text-nowrap">
                    02 <small>/05</small>
                  </div>
                </div>
                <div className="recent-word-content ms-lg-auto pt-3">
                  <div className="cont wow fadeInUp" data-wow-delay="0.6s">
                    <Link to="/project-details"
                      className="cart-title mb-2 d-block pb-1 text-dark fw-bold text-uppercase">
                      Brand Refresh & Rebranding
                    </Link>
                    <div className="d-flex mb-4 pb-lg-2 flex-wrap gap-xxl-3 gap-2 align-items-center">
                      <span
                        className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
                        UI/UX Design
                      </span>
                      <span
                        className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
                        2026
                      </span>
                    </div>
                    <div>
                      <Link to="/project-details"
                        className="read-more text-dark fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2">
                        VIEW PROJECT
                        <div className="bg-theme w-32 min-w-32 h-32 p1-bg rounded-circle d-center">
                          <img src="assets/img/icon/right-arrow.svg" alt="img" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link to="/service-details" className="thumb-small rounded-4 wow fadeInUp"
                    data-wow-delay="0.7s">
                    <img src="assets/img/project/word-thumb6.png" alt="img" className="w-100 img rounded-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

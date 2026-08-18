import { Link } from "react-router-dom";

export default function ProjectArea() {
  return (
    <>

      {/* <!-- recent word Section Start --> */}
      <section className="recent-word-section fix">
        <div className="container">
          <div className="section-padding">
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
                  <Link to="/project-details" className="thumb-small rounded-4 wow fadeInUp"
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
                  <Link to="/project-details" className="thumb-small rounded-4 wow fadeInUp"
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
                  <Link to="/project-details" className="thumb-small rounded-4 wow fadeInUp"
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

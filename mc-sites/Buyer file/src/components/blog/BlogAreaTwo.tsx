import { Link } from "react-router-dom";

export default function BlogAreaTwo() {
  return (
    <>
      {/* <!-- News Section Start --> */}
      <section className="news-section section-padding fix">
        <div className="container">
          <div className="d-flex flex-md-nowrap gap-2 flex-wrap align-items-end justify-content-between gap-4 mb-48">
            <div className="section-header-unique d-flex justify-content-start gap-2">
              <div className="text-rot text-theme fw-bold fs-20px text-uppercase table-rotated-header wow fadeInUp"
                data-wow-delay="0.4s">
                news & blog
              </div>
              <div>
                <div className="head-one wow fadeInUp" data-wow-delay="0.5s">
                  <span className="what text-dark fw-semibold">latest news & {" "}</span>
                  <span>articles</span>
                </div>
                <div className="head-two d-flex gap-xxl-3 gap-lg-2 gap-1 flex-lg-nowrap flex-wrap wow fadeInUp"
                  data-wow-delay="0.6s">
                  <span className="ab">About Me</span>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. excepteur sint
                    occaecat
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Link to="/blog" className="common_btn common_btn-blacktheme text-nowrap">
                view all articles
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="news-wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-xxl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="news-single-items news-single-items2 rounded-4 overflow-hidden">
                  <div className="news-thumb-area overflow-hidden rounded-3">
                    <Link to="/blog-details"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <img src="assets/img/blog/blog2-v1.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog2-v1.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog2-v1.png" alt="img" className="w-100" />
                    </Link>
                  </div>
                  <div
                    className="news-content d-flex flex-column justify-content-between py-xl-3 py-2 news-content1 bg-transparent p-0 border-0">
                    <div>
                      <div className="new-cont-title mb-xl-3 mb-3">
                        <Link to="/blog-details"
                          className="text-dark fw-bold fs-32px text-uppercase fw-semibold visible-slowly-bottom">
                          Building Scalable Web Applications
                        </Link>
                      </div>
                      <div className="user-cont d-flex align-items-center gap-xxl-4 gap-sm-3 gap-2">
                        <span className="text-dark fw-medium opacity-75 fs-seven">October 5, 2026</span>
                        <span
                          className="tags-blog text-dark bg-white rounded-pill py-2 px-3 fw-semibold">Clean
                          Code</span>
                      </div>
                    </div>
                    <div>
                      <p className="fs-seven text-dark opacity-75 mb-lg-3 mb-3">
                        Key principles and practices for creating web apps that grow with your business.
                      </p>
                      <Link to="/blog-details"
                        className="read-more text-dark fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2">
                        VIEW Blog details
                        <div className="bg-theme w-32 min-w-32 h-32 p1-bg rounded-circle d-center">
                          <img src="assets/img/icon/right-arrow.svg" alt="img" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="news-single-items news-single-items2 rounded-4 overflow-hidden">
                  <div className="news-thumb-area overflow-hidden rounded-3">
                    <Link to="/blog-details"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <img src="assets/img/blog/blog2-v2.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog2-v2.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog2-v2.png" alt="img" className="w-100" />
                    </Link>
                  </div>
                  <div
                    className="news-content d-flex flex-column justify-content-between py-xl-3 py-2 news-content1 bg-transparent p-0 border-0">
                    <div>
                      <div className="new-cont-title mb-xl-3 mb-3">
                        <Link to="/blog-details"
                          className="text-dark fw-bold fs-32px text-uppercase fw-semibold visible-slowly-bottom">
                          Common Mistakes in Web Development
                        </Link>
                      </div>
                      <div className="user-cont d-flex align-items-center gap-xxl-4 gap-sm-3 gap-2">
                        <span className="text-dark fw-medium opacity-75 fs-seven">October 5, 2026</span>
                        <span
                          className="tags-blog text-dark bg-white rounded-pill py-2 px-3 fw-semibold">Clean
                          Code</span>
                      </div>
                    </div>
                    <div>
                      <p className="fs-seven text-dark opacity-75 mb-lg-3 mb-3">
                        Lessons learned from real-world projects and how to avoid them.
                      </p>
                      <Link to="/blog-details"
                        className="read-more text-dark fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2">
                        VIEW Blog details
                        <div className="bg-theme w-32 min-w-32 h-32 p1-bg rounded-circle d-center">
                          <img src="assets/img/icon/right-arrow.svg" alt="img" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

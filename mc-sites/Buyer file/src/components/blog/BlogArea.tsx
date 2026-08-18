import { Link } from "react-router-dom";


export default function BlogArea() {
  return (
    <>
      {/* <!-- blog Section Start --> */}
      <section className="blog-event-section section-padding fix">
        <div className="container container1370">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <h2 className="fw-bold mb-xl-4 mb-3">
                  How to Build a Scalable Marketing <br /> Strategy from Scratch
                </h2>
                <div className="mb-xxl-4 mb-3 d-flex justify-content-between gap-3 flex-wrap">
                  <div className="d-flex align-items-center gap-xxl-3 gap-2">
                    <img src="assets/img/blog/blog-head.png" alt="img" className="rounded-circle" />
                    <div className="cont">
                      <div className="fs--18px lh-1 fw-bold mb-1">
                        Yurii Shepta
                      </div>
                      <p className="fs-seven pra-clr">
                        Head of Marketing
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-32px">
                    <ul className="share-tag list-inline">
                      <li>
                        <a href="#" className="text-decoration-none d-inline-block">
                          Branding
                        </a>
                      </li>
                    </ul>
                    <p>October 3, 2023 . 7 min read</p>
                  </div>
                  <h3 className="new-storke">
                    New/2
                  </h3>
                </div>
                <div className="img-single-hover">
                  <Link to="/blog-details" className="thumb d-block w-100 rounded-4">
                    <img src="assets/img/blog/blog-g1.png" alt="img" className="w-100" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-g-items img-single-hover pb-1 wow fadeInUp" data-wow-delay="0.6s">
                <Link to="/blog-details" className="thumb d-block w-100 rounded-4 mb-xxl-4 mb-3">
                  <img src="assets/img/blog/blog-g2.png" alt="img" className="w-100" />
                </Link>
                <div className="border-bottom pb-4">
                  <div className="pb-xxl-1">
                    <ul
                      className="share-tag d-flex gap-lg-3 gap-md-2 gap-1 mb-xxl-3 mb-2 flex-wrap list-inline">
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Marketing Trends
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Brand Strategy
                        </a>
                      </li>
                    </ul>
                    <h4 className="mb-xxl-4 mb-3 fs-three lh-sm fw-bold">
                      <Link to="/blog-details">
                        Marketing Strategies That Drive Real Business Growth
                      </Link>
                    </h4>
                    <div className="d-flex align-items-center gap-xxl-3 gap-2">
                      <img src="assets/img/blog/blog-marketing.png" alt="img" className="rounded-circle" />
                      <div className="cont">
                        <div className="fs--18px lh-1 fw-bold mb-1">
                          James Anderson
                        </div>
                        <p className="fs-seven pra-clr">
                          Feb 04, 2026 . 9 min Read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-g-items img-single-hover pb-1 wow fadeInUp" data-wow-delay="0.7s">
                <Link to="/blog-details" className="thumb d-block w-100 rounded-4 mb-xxl-4 mb-3">
                  <img src="assets/img/blog/blog-g3.png" alt="img" className="w-100" />
                </Link>
                <div className="border-bottom pb-4">
                  <div className="pb-xxl-1">
                    <ul
                      className="share-tag d-flex gap-lg-3 gap-md-2 gap-1 mb-xxl-3 mb-2 flex-wrap list-inline">
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          UX & Conversion
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Visual Branding
                        </a>
                      </li>
                    </ul>
                    <h4 className="mb-xxl-4 mb-3 fs-three lh-sm fw-bold">
                      <Link to="/blog-details">
                        Creating a Consistent Brand Identity Across All Channels
                      </Link>
                    </h4>
                    <div className="d-flex align-items-center gap-xxl-3 gap-2">
                      <img src="assets/img/blog/blog-marketing.png" alt="img" className="rounded-circle" />
                      <div className="cont">
                        <div className="fs--18px lh-1 fw-bold mb-1">
                          James Anderson
                        </div>
                        <p className="fs-seven pra-clr">
                          Feb 04, 2026 . 9 min Read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-g-items img-single-hover pb-1 wow fadeInUp" data-wow-delay="0.8s">
                <Link to="/blog-details" className="thumb d-block w-100 rounded-4 mb-xxl-4 mb-3">
                  <img src="assets/img/blog/blog-g4.png" alt="img" className="w-100" />
                </Link>
                <div className="border-bottom pb-4">
                  <div className="pb-xxl-1">
                    <ul
                      className="share-tag d-flex gap-lg-3 gap-md-2 gap-1 mb-xxl-3 mb-2 flex-wrap list-inline">
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Branding
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Design
                        </a>
                      </li>
                    </ul>
                    <h4 className="mb-xxl-4 mb-3 fs-three lh-sm fw-bold">
                      <Link to="/blog-details">
                        Digital Marketing Trends Shaping the Future of Brands
                      </Link>
                    </h4>
                    <div className="d-flex align-items-center gap-xxl-3 gap-2">
                      <img src="assets/img/blog/blog-marketing.png" alt="img" className="rounded-circle" />
                      <div className="cont">
                        <div className="fs--18px lh-1 fw-bold mb-1">
                          James Anderson
                        </div>
                        <p className="fs-seven pra-clr">
                          Feb 04, 2026 . 9 min Read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-g-items img-single-hover pb-1 wow fadeInUp" data-wow-delay="0.9s">
                <Link to="/blog-details" className="thumb d-block w-100 rounded-4 mb-xxl-4 mb-3">
                  <img src="assets/img/blog/blog-g5.png" alt="img" className="w-100" />
                </Link>
                <div className="border-bottom pb-4">
                  <div className="pb-xxl-1">
                    <ul
                      className="share-tag d-flex gap-lg-3 gap-md-2 gap-1 mb-xxl-3 mb-2 flex-wrap list-inline">
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Marketing Strategy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Design
                        </a>
                      </li>
                    </ul>
                    <h4 className="mb-xxl-4 mb-3 fs-three lh-sm fw-bold">
                      <Link to="/blog-details">
                        Data-Driven Marketing Turning Insights into Action
                      </Link>
                    </h4>
                    <div className="d-flex align-items-center gap-xxl-3 gap-2">
                      <img src="assets/img/blog/blog-marketing.png" alt="img" className="rounded-circle" />
                      <div className="cont">
                        <div className="fs--18px lh-1 fw-bold mb-1">
                          James Anderson
                        </div>
                        <p className="fs-seven pra-clr">
                          Feb 04, 2026 . 9 min Read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-g-items img-single-hover pb-1 wow fadeInUp" data-wow-delay="1s">
                <Link to="/blog-details" className="thumb d-block w-100 rounded-4 mb-xxl-4 mb-3">
                  <img src="assets/img/blog/blog-g6.png" alt="img" className="w-100" />
                </Link>
                <div className="border-bottom pb-4">
                  <div className="pb-xxl-1">
                    <ul
                      className="share-tag d-flex gap-lg-3 gap-md-2 gap-1 mb-xxl-3 mb-2 flex-wrap list-inline">
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Brand & Marketing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Growth
                        </a>
                      </li>
                    </ul>
                    <h4 className="mb-xxl-4 mb-3 fs-three lh-sm fw-bold">
                      <Link to="/blog-details">
                        Common Marketing Mistakes Businesses Should Avoid
                      </Link>
                    </h4>
                    <div className="d-flex align-items-center gap-xxl-3 gap-2">
                      <img src="assets/img/blog/blog-marketing.png" alt="img" className="rounded-circle" />
                      <div className="cont">
                        <div className="fs--18px lh-1 fw-bold mb-1">
                          James Anderson
                        </div>
                        <p className="fs-seven pra-clr">
                          Feb 04, 2026 . 9 min Read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-g-items img-single-hover pb-1 wow fadeInUp" data-wow-delay="1s">
                <Link to="/blog-details" className="thumb d-block w-100 rounded-4 mb-xxl-4 mb-3">
                  <img src="assets/img/blog/blog-g7.png" alt="img" className="w-100" />
                </Link>
                <div className="border-bottom pb-4">
                  <div className="pb-xxl-1">
                    <ul
                      className="share-tag d-flex gap-lg-3 gap-md-2 gap-1 mb-xxl-3 mb-2 flex-wrap list-inline">
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Brand Identity
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none py-1 d-inline-block">
                          Design
                        </a>
                      </li>
                    </ul>
                    <h4 className="mb-xxl-4 mb-3 fs-three lh-sm fw-bold">
                      <Link to="/blog-details">
                        How to Choose the Right Marketing Agency for Your Brand
                      </Link>
                    </h4>
                    <div className="d-flex align-items-center gap-xxl-3 gap-2">
                      <img src="assets/img/blog/blog-marketing.png" alt="img" className="rounded-circle" />
                      <div className="cont">
                        <div className="fs--18px lh-1 fw-bold mb-1">
                          James Anderson
                        </div>
                        <p className="fs-seven pra-clr">
                          Feb 04, 2026 . 9 min Read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-previous_next justify-content-xl-center justify-content-start mt-xl-5 mt-4 pt-xl-3">
            <button type="button" className="cmn_prev">
              <i className="fa-solid fa-arrow-left"></i> Prev blog
            </button>
            <button type="button" className="cmn_prev active">
              Next blog <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

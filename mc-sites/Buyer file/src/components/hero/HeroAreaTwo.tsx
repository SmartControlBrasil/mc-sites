import { Link } from "react-router-dom";

export default function HeroAreaTwo() {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section02 fix position-relative">
        <div className="container">
          <div className="container z-1 position-relative">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-12">
                <div className="banner-content z-1 position-relative">
                  <div className="content-left pt-lg-0 pt-2 white fw_700 visible-slowly-bottom"
                    data-wow-delay="0.7s">
                    <span
                      className="strokes heading-font d-flex justify-content-lg-start justify-content-center align-items-center gap-2">
                      MARTIN
                      <img src="assets/img/banner/herohand.png" alt="img" />
                    </span>
                    <span
                      className="titles d-flex justify-content-lg-start justify-content-center gap-xxl-3 gap-2 align-items-center">
                      <img src="assets/img/banner/hi.png" alt="img" className="" />
                      ROBART
                    </span>
                  </div>
                  <div className="content-right">
                    <div className="client-inner mb-4 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="client-all">
                        <span className="icon">
                          <img src="assets/img/banner/client-p1.png" alt="img" className="rounded-circle" />
                        </span>
                        <span className="icon">
                          <img src="assets/img/banner/client-p2.png" alt="img"
                            className="rounded-circle border" />
                        </span>
                        <span className="icon">
                          <img src="assets/img/banner/client-p3.png" alt="img"
                            className="rounded-circle border" />
                        </span>
                        <span className="icon icon_in">
                          <i className="fas fa-plus"></i>
                        </span>
                      </div>
                      <p className="fs--18px heading-font">
                        More then <br />
                        25K clients reviews
                      </p>
                    </div>
                    <p className="mb-lg-5 mb-4 text-lg-start text-center wow fadeInUp" data-wow-delay="0.6s">
                      We design and develop high-performance websites, apps, and systems that are secure,
                      scalable, and built for real-world
                      impact.
                    </p>
                    <div className="d-flex justify-content-lg-start justify-content-center align-items-center gap-xxl-4 gap-xl-3 gap-2 wow fadeInUp"
                      data-wow-delay="0.8s">
                      <Link to="/contact" className="common_btn common_btn-blacktheme text-nowrap">
                        Get Started
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                      <Link to="/project" className="common_btn common_btn-whitetheme border text-nowrap">
                        View Projects
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <h1 className="hero-title">
                  Developer
                </h1>
                <div className="hero-thumb">
                  <img src="assets/img/banner/hero-thumb2.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}

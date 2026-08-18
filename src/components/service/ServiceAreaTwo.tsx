import { Link } from "react-router-dom";


export default function ServiceAreaTwo() {
  return (
    <>
    
      {/* <!-- development Section Start --> */}
      <section className="development-section-unique bg-black fix section-padding">
        <img src="assets/img/development/development-ele.png" alt="img" className="dev-ele d-md-block d-none updowns" />
        <div className="container">
          <div className="section-header-unique mb-48 d-flex justify-content-center gap-2">
            <div className="text-rot text-theme fw-bold fs-20px text-uppercase table-rotated-header wow fadeInUp"
              data-wow-delay="0.4s">
              Services
            </div>
            <div>
              <div className="head-one wow fadeInUp" data-wow-delay="0.5s">
                <span className="what text-white-stroke">Development,</span>
                <span></span>
              </div>
              <div className="head-two d-flex gap-xxl-3 gap-lg-2 gap-1 flex-lg-nowrap flex-wrap wow fadeInUp"
                data-wow-delay="0.6s">
                <span className="ab text-white">Built to Scale</span>
                <p className="fs-six fw-medium text-white opacity-75">
                  We deliver strategic, creative, and performance-driven marketing services focused on scaling
                  brands,
                  increasing
                  visibility,
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-end">
            <div className="col-lg-5">
              <div
                className="development-left__wrapper overflow-hidden position-relative d-flex justify-content-between">
                <div className="statick-title">
                  ARIGO
                </div>
                <div className="mater-custom-tablet pb-4">
                  <div className="overflow-hidden">
                     <div className="tags-container2 relative">
        
                     </div>
                  </div>
                </div>
                <div className="border-right-cus d-none">
                  <div className="bar"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="development-content">
                <div className="development-items wow fadeInUp" data-wow-delay="0.5s">
                  <div className="content">
                    <div className="box">
                      <div>
                        <h2
                          className="text-uppercase mb-xxl-3 mb-2 d-flex align-items-center gap-xxl-3 gap-2 text-white">
                          <span className="serial text-capitalize fw-semibold">
                            <span className="sri text-white opacity-75 fw-medium">01</span>
                            <img src="assets/img/development/arrow-left.png" alt="img"
                              className="arrow" />
                          </span>
                          <Link to="/service-details">
                            Web Development
                          </Link>
                        </h2>
                        <p className="thi-pra ps-4 opacity-75 mb-lg-3 mb-2 text-white">
                          Dynamic web applications tailored to business workflows user needs.
                        </p>
                      </div>
                      <div className="dev-tags d-flex flex-wrap gap-2">
                        <a href="#" className="tags">
                          CREATIVE DIRECTION
                        </a>
                        <a href="#" className="tags">
                          BRAND IDENTITY
                        </a>
                        <a href="#" className="tags">
                          GRAPHIC DESIGN
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link to="/service-details" className="thumb">
                    <img src="assets/img/development/development1.png" alt="" />
                  </Link>
                </div>
                <div className="border-bottom border-in"></div>
                <div className="development-items wow fadeInUp" data-wow-delay="0.7s">
                  <Link to="/service-details" className="thumb">
                    <img src="assets/img/development/development2.png" alt="" />
                  </Link>
                  <div className="content">
                    <div className="box">
                      <div>
                        <h2
                          className="text-uppercase mb-xxl-3 mb-2 d-flex align-items-center gap-xxl-3 gap-2 text-white">
                          <span className="serial text-capitalize fw-semibold">
                            <span className="sri text-white opacity-75 fw-medium">02</span>
                            <img src="assets/img/development/arrow-left.png" alt="img"
                              className="arrow" />
                          </span>
                          <Link to="/service-details">
                            UI/UK Designer
                          </Link>
                        </h2>
                        <p className="thi-pra ps-4 text-white opacity-75 mb-lg-3 mb-2">
                          Dynamic web applications tailored to business workflows user needs.
                        </p>
                      </div>
                      <div className="dev-tags d-flex flex-wrap gap-2">
                        <a href="#" className="tags">
                          CREATIVE DIRECTION
                        </a>
                        <a href="#" className="tags">
                          BRAND IDENTITY
                        </a>
                        <a href="#" className="tags">
                          GRAPHIC DESIGN
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom border-in"></div>
                <div className="development-items wow fadeInUp" data-wow-delay="0.9s">
                  <div className="content">
                    <div className="box">
                      <div>
                        <h2
                          className="text-uppercase mb-xxl-3 mb-2 d-flex align-items-center gap-xxl-3 gap-2 text-white">
                          <span className="serial text-capitalize fw-semibold">
                            <span className="sri text-white opacity-75 fw-medium">03</span>
                            <img src="assets/img/development/arrow-left.png" alt="img"
                              className="arrow" />
                          </span>
                          <Link to="/service-details">
                            Frontend Development
                          </Link>
                        </h2>
                        <p className="thi-pra ps-4 opacity-75 mb-lg-3 mb-2 text-white">
                          Dynamic web applications tailored to business workflows user needs.
                        </p>
                      </div>
                      <div className="dev-tags d-flex flex-wrap gap-2">
                        <a href="#" className="tags">
                          CREATIVE DIRECTION
                        </a>
                        <a href="#" className="tags">
                          BRAND IDENTITY
                        </a>
                        <a href="#" className="tags">
                          GRAPHIC DESIGN
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link to="/service-details" className="thumb">
                    <img src="assets/img/development/development3.png" alt="" />
                  </Link>
                </div>
                <div className="border-bottom border-in"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}

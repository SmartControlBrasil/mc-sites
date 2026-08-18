import { Link } from "react-router-dom";

interface ServiceAreaThreeProps {
  style_2?: boolean;
}

export default function ServiceAreaThree({ style_2 }: ServiceAreaThreeProps) {
  return (
    <>
      {/* <!-- drive growth Section Start --> */}
      <section className="drive-growth-section recent-word-section section-padding fix">
        <img src="assets/img/blog/blog-circle.png" alt="img" className="circle-ele cir36" />
        <div className="container">
          <div
            className="d-flex flex-md-nowrap gap-2 border-bottom pb-xl-5 pb-4 flex-wrap align-items-end justify-content-center gap-4 mb-48">
            <div className="section-header-unique d-flex justify-content-start gap-2">
              <div>
                <div className="head-one d-flex mb-2 mb-md-0 align-items-center gap-2 flex-sm-nowrap flex-wrap mb-0 wow fadeInUp"
                  data-wow-delay="0.5s">
                  <span>Services Designed to</span>
                </div>
                <div className="head-two d-flex align-items-center gap-xxl-3 gap-lg-2 gap-1 flex-md-nowrap flex-wrap wow fadeInUp"
                  data-wow-delay="0.6s">
                  <span className="ab text-nowrap">Drive Growth</span>
                  <img src="assets/img/element/text-snak.png" alt="img" className="pt-4 d-lg-block d-none mt-4" />
                  <p className="text-start">
                    We deliver strategic, creative, and performance-driven marketing services focused on
                    scaling brands, increasing
                    visibility,
                  </p>
                  <div>
                    <Link to="/service"
                      className="common_btn common_btn-blacktheme mt-md-0 mt-2 text-nowrap">
                      VIEW ALL SERVICES
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container1370 pt-5">
          <div className="drive-growth-wrap">
            <div className="drive-growth-items wow fadeInUp" data-wow-delay="0.6s">
              <div className="cont position-relative z-1">
                <h2 className="text-center mb-3">
                  <Link to="/service-details">
                    Digital Marketing Strategy
                  </Link>
                </h2>
                <div
                  className="drive-tags d-flex flex-wrap align-items-center gap-xxl-4 gap-xl-3 gap-2 justify-content-center">
                  <a href="#">
                    ART DIRECTION
                  </a>
                  <a href="#">
                    LOGO DESIGN
                  </a>
                  <a href="#">
                    BRANDING IDENTITY
                  </a>
                </div>
              </div>
              <div className="drive-thumb-wrap gap-2 d-flex align-items-center justify-content-between w-100">
                <Link to="/service-details" className="thumb1 d-block">
                  <img src="assets/img/thumbnail/drive-thumb1.png" alt="img" />
                </Link>
                <Link to="/service-details" className="thumb2 d-block">
                  <img src="assets/img/thumbnail/drive-thumb2.png" alt="img" />
                </Link>
              </div>
            </div>
            <div className="drive-growth-items wow fadeInUp" data-wow-delay="0.7s">
              <div className="cont position-relative z-1">
                <h2 className="text-center mb-3">
                  <Link to="/service-details">
                    Brand Strategy & Positioning
                  </Link>
                </h2>
                <div
                  className="drive-tags d-flex flex-wrap align-items-center gap-xxl-4 gap-xl-3 gap-2 justify-content-center">
                  <a href="#">
                    ART DIRECTION
                  </a>
                  <a href="#">
                    LOGO DESIGN
                  </a>
                  <a href="#">
                    BRANDING IDENTITY
                  </a>
                </div>
              </div>
              <div className="drive-thumb-wrap gap-2 d-flex align-items-center justify-content-between w-100">
                <div className="thumb1">
                  <img src="assets/img/thumbnail/drive-thumb1.png" alt="img" />
                </div>
                <div className="thumb2">
                  <img src="assets/img/thumbnail/drive-thumb2.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="drive-growth-items wow fadeInUp" data-wow-delay="0.8s">
              <div className="cont position-relative z-1">
                <h2 className="text-center mb-3">
                  <Link to="/service-details">
                    SEO & Performance Marketing
                  </Link>
                </h2>
                <div
                  className="drive-tags d-flex flex-wrap align-items-center gap-xxl-4 gap-xl-3 gap-2 justify-content-center">
                  <a href="#">
                    ART DIRECTION
                  </a>
                  <a href="#">
                    LOGO DESIGN
                  </a>
                  <a href="#">
                    BRANDING IDENTITY
                  </a>
                </div>
              </div>
              <div className="drive-thumb-wrap gap-2 d-flex align-items-center justify-content-between w-100">
                <div className="thumb1">
                  <img src="assets/img/thumbnail/drive-thumb1.png" alt="img" />
                </div>
                <div className="thumb2">
                  <img src="assets/img/thumbnail/drive-thumb2.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="drive-growth-items wow fadeInUp" data-wow-delay="0.9s">
              <div className="cont position-relative z-1">
                <h2 className="text-center mb-3">
                  <Link to="/service-details">
                    Social Media Marketing
                  </Link>
                </h2>
                <div
                  className="drive-tags d-flex flex-wrap align-items-center gap-xxl-4 gap-xl-3 gap-2 justify-content-center">
                  <a href="#">
                    ART DIRECTION
                  </a>
                  <a href="#">
                    LOGO DESIGN
                  </a>
                  <a href="#">
                    BRANDING IDENTITY
                  </a>
                </div>
              </div>
              <div className="drive-thumb-wrap gap-2 d-flex align-items-center justify-content-between w-100">
                <div className="thumb1">
                  <img src="assets/img/thumbnail/drive-thumb1.png" alt="img" />
                </div>
                <div className="thumb2">
                  <img src="assets/img/thumbnail/drive-thumb2.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!style_2 && (
        <div className="showreel-section fix">
          <div className="container">
            <div className="showreel-content">
              ©{new Date().getFullYear()}
              <div className="starburst-mask cir36">
                <img src="assets/img/thumbnail/mask-thumb.png" alt="img" />
              </div>
              SHOWREEL
            </div>
          </div>
        </div>
      )}

    </>
  )
}

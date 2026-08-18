import { Link } from "react-router-dom";


export default function HeroAreaThree() {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section03 position-relative">
        <div className="container pb-5 z-1 position-relative">
          <div className="row pb-5 g-4 justify-content-between">
            <div className="col-lg-12">
              <div className="banner-content z-1 position-relative">
                <div className="content-head" data-wow-delay="0.7s">
                  <h1>
                    Marketing
                  </h1>
                  <img src="assets/img/banner/video-shape.png" alt="img" className="cir36 video_tree" />
                  <div className="d-flex flex-column gap-xxl-3 gap-3">
                    <Link to="/service" className="arrow_in fs--18px text-white d-flex gap-2">
                      UX/UI Design
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link to="/about" className="arrow_in fs--18px text-white d-flex gap-2">
                      Brand Identity
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link to="/project" className="arrow_in fs--18px text-white d-flex gap-2">
                      Web Development
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="studio-text">
                  <img src="assets/img/banner/text-tree.png" alt="img" className="tree-icon d-sm-block d-none" />
                  <div className="cont">
                    <h2 className="mb-lg-4 mb-3 pb-xxl-1">studio</h2>
                    <p className="text-white opacity-75 mb-48">
                      Data-driven strategies, creative campaigns, and measurable results that help your
                      business
                      scale faster. Data-driven
                      strategies, creative campaigns,Data-driven strategies,
                    </p>
                    <Link to="/contact" className="touch d-center">
                      <span className="text-center">
                        Get In Touch <br />
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="fs-20px text-white opacity-75 lh-base">
                We Deliver Performance-Focused Digital <br /> Marketing Solutions.
              </div>
              <div className="hero-social-area3">
                <img src="assets/img/banner/social-line.png" alt="img" className="s-line" />
                <div className="social-white gap-xl-3 gap-2 d-flex flex-md-column align-items-center">
                  <a href="#" className="icon">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="thumb-small-pos d-md-block d-none">
          <img src="assets/img/banner/hero-thumb-big.png" alt="img" />
        </div>
        <img src="assets/img/banner/sqare-shape.png" alt="img" className="square updowns" />
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}

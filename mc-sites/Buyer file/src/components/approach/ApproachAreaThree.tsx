import { Link } from "react-router-dom";


export default function ApproachAreaThree() {
  return (
    <>
      {/* <!-- our approach Section Start --> */}
      <section className="our-approach-section section-padding fix">
        <div className="container container1200">
          <div className="approach-wrapper">
            <div className="approach-content d-center">
              <div>
                <h2 className="wow fadeInUp" data-wow-delay="0.5s">
                  Our <br /> Approach
                </h2>
                <Link to="/project-details" className="common_btn common_btn-blurtheme text-nowrap wow fadeInUp"
                  data-wow-delay="0.7s">
                  Start Your Project
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="approach-btn-grp approach-btn-grp1">
              <div className="">
                <Link to="/project-details" className="btn_approach text-nowrap wow fadeInUp"
                  data-wow-delay="0.5s">
                  Discover & Understand
                  <img src="assets/img/icon/right-arrow.svg" alt="img" />
                </Link>
              </div>
              <div className="mt-lg-5 updowns">
                <Link to="/project-details" className="btn_approach text-nowrap wow fadeInUp"
                  data-wow-delay="0.5s">
                  Optimize & Scale
                  <img src="assets/img/icon/right-arrow.svg" alt="img" />
                </Link>
              </div>
            </div>
            <div className="approach-btn-grp approach-btn-grp2">
              <div className="updowns">
                <Link to="/project-details" className="btn_approach text-nowrap wow fadeInUp"
                  data-wow-delay="0.5s">
                  Strategize & Plan
                  <img src="assets/img/icon/right-arrow.svg" alt="img" />
                </Link>
              </div>
              <div className="mt-lg-5 pt-xl-5 zoom-in">
                <Link to="/project-details" className="btn_approach text-nowrap wow fadeInUp"
                  data-wow-delay="0.5s">
                  Create & Execute
                  <img src="assets/img/icon/right-arrow.svg" alt="img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/element/pattren-circle.png" alt="img" className="pattren-circle cir36" />
        <img src="assets/img/element/pattren.png" alt="img" className="pattren zoom-in" />
      </section>
    </>
  )
}

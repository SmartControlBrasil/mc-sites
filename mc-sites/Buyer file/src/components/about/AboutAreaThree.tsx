import { Link } from "react-router-dom";
import Count from "../common/Count";


export default function AboutAreaThree() {
  return (
    <>
      {/* <!-- about03 Section Start --> */}
      <section className="who-aboutus_section03 fix">
        <div className="container p-md-0 border-end border-start">
          <div className="section-padding pb-0 px-sm-2">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="who-aboutus_left position-relative z-1">
                  <img src="assets/img/element/fun-shape-ele.png" alt="img"
                    className="w-100 z-n1 h-100 position-absolute bottom-0 start-0" />
                  <div className="who-badge-grop w-100">
                    <div className="who-badge updowns">
                      <i className="fa-solid fa-circle"></i>
                      Awward Winning Marketing
                    </div>
                    <div className="text-end mt-4">
                      <div className="who-badge">
                        <i className="fa-solid fa-circle"></i>
                        Successful Campaigns
                      </div>
                    </div>
                  </div>
                  <div className="count-grp d-flex align-items-center gap-1 justify-content-center">
                    <span className="count">
                      <Count number={25} text="+" />
                    </span>
                  </div>
                  <div className="who-badge-grop">
                    <div className="who-badge zoom-in">
                      <i className="fa-solid fa-circle"></i>
                      Average ROI Growth
                    </div>
                    <div className="text-end mt-4">
                      <div className="who-badge updowns">
                        <i className="fa-solid fa-circle"></i>
                        Years of Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about-content_03 ps-lg-5">
                  <h2 className="mb-4 pb-xl-1 wow fadeInUp" data-wow-delay="0.5s">
                    <span className="this-badge me-2">
                      Who we are_ who
                    </span>
                    By Immersing Ourselves in Your Brand, We Challenge the Ordinary and Turn Bold Ideas into
                    Strategic Digital Experiences
                    That Drive Real, Measurable Growth
                  </h2>
                  <div className="about-thumb__grp3">
                    <div className="thumb1 wow fadeInUp" data-wow-delay="0.6s">
                      <img src="assets/img/about/about3-v1.png" alt="img" />
                    </div>
                    <div className="cont wow fadeInUp" data-wow-delay="0.7s">
                      <p className="mb-xxl-3 mb-lg-3 mb-md-2 mb-1">
                        We begin by fully immersing ourselves in your brand, understanding its purpose,
                        audience, and ambition. Through deep
                        research, strategic thinking, and creative execution, we challenge the ordinary
                        and transform
                      </p>
                      <p className="mb-48">
                        Bold ideas into meaningful digital experiences that deliver measurable growth,
                        lasting impact, and real business
                        results.
                      </p>
                      <Link to="/about"
                        className="common_btn common_btn-blacktheme mt-md-0 mt-2 text-nowrap">
                        more about us
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </div>
                    <div className="thumb2 wow fadeInUp" data-wow-delay="0.8s">
                      <img src="assets/img/about/about3-v2.png" alt="img" />
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

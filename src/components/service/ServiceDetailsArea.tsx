
import VideoPopup from "../modals/VideoPopup"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Navigation } from "swiper/modules"
import { Link } from "react-router-dom"


export default function ServiceDetailsArea() {
  return (
    <>
      {/* <!-- web service Section Start --> */}
      <section className="web-servies-section section-padding fix">
        <div className="container">
          <div className="blog-list-item">
            <div className="position-relative rounded-5 overflow-hidden">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect="fade"
                navigation={{
                  nextEl: ".array-next",
                  prevEl: ".array-prev",
                }}
                modules={[Navigation, EffectFade]}
                className="blog-thumb-wrapper swiper">

                <SwiperSlide className="swiper-slide rounded-5 overflow-hidden">
                  <Link to="/service-details" className="thumb rounded-5 overflow-hidden w-100 d-block">
                    <img src="assets/img/service/service-slide1.png" alt="img" className="w-100" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide rounded-5 overflow-hidden">
                  <Link to="/service-details" className="thumb rounded-5 overflow-hidden w-100 d-block">
                    <img src="assets/img/service/service-slide2.png" alt="img" className="w-100" />
                  </Link>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide rounded-5 overflow-hidden">
                  <Link to="/service-details" className="thumb rounded-5 overflow-hidden w-100 d-block">
                    <img src="assets/img/service/service-slide1.png" alt="img" className="w-100" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide rounded-5 overflow-hidden">
                  <Link to="/service-details" className="thumb rounded-5 overflow-hidden w-100 d-block">
                    <img src="assets/img/service/service-slide2.png" alt="img" className="w-100" />
                  </Link>
                </SwiperSlide>

              </Swiper>
              <button className="array-prev" type="button">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="array-next" type="button">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="max-w-1370px mx-auto mb-4 pb-xl-2 mt-3 pt-xl-2 wow fadeInUp" data-wow-delay="0.5s">
            <div className="fs-64px fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              From Development to Continuous Digital Improvemen
            </div>
            <p className="mb-xl-3 mb-2">
              On the other hand we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the
              charms pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble
              that are bound to
              ensue;
            </p>
            <p>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the
              charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and
              trouble that are bound to
              ensue; and equal blame belongs to those who fail in their duty through upon weakness of which is the
              same as saying
              through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a
              free hour, when our
              power of choice and nothing prevents our being able to do what we like best, every pleasure is to be
              welcomed and every
              pain avoided.
            </p>
          </div>
          <div className="max-w-1370px mx-auto mb-4 pb-xl-4 wow fadeInUp" data-wow-delay="0.6s">
            <h2 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              Services Overview
            </h2>
            <p className="mb-xl-3 mb-2">
              We deliver complete web development solutions designed to meet modern business needs. Our services
              include custom
              website development, front-end and back-end engineering, responsive design, and performance
              optimization. We focus on
              building secure, scalable, and fast-loading websites that provide seamless user experiences across
              all devices.
            </p>
            <p>
              From concept to deployment, our development process emphasizes clean code, usability, and long-term
              maintainability.
              Whether it’s a corporate website, portfolio, or e-commerce platform, we create reliable digital
              solutions that help
              brands grow, engage users, and achieve measurable results.
            </p>
          </div>

          <div className="mb-4">
            <div className="row g-3">
              <div className="col-lg-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className="thumb w-100 rounded-4 wow fadeInUp" data-wow-delay="0.4s">
                    <img src="assets/img/service/service-box1.png" alt="img" className="w-100 rounded-4" />
                  </div>
                  <div className="w-100">
                    <div className="d-flex flex-column gap-3">
                      <div className="thumb w-100 rounded-4 wow fadeInUp" data-wow-delay="0.5s">
                        <img src="assets/img/service/service-box2.png" alt="img"
                          className="w-100 rounded-4" />
                      </div>
                      <div className="thumb w-100 rounded-4 wow fadeInUp" data-wow-delay="0.6s">
                        <img src="assets/img/service/service-box3.png" alt="img"
                          className="w-100 rounded-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <VideoPopup>
                  <div className="thumb d-center w-100 rounded-4 position-relative wow fadeInUp"
                    data-wow-delay="0.7s">
                    <img src="assets/img/service/service-box4.png" alt="img" className="w-100 rounded-4" />
                    <a style={{ cursor: "pointer" }}
                      className="video_148 zoom-in text-uppercase position-absolute video-popup rounded-circle d-center fs-24px text-white bg-theme">
                      Play
                    </a>
                  </div>

                </VideoPopup>
              </div>
              <div className="col-lg-4">
                <div className="d-flex gap-3 align-items-start">
                  <div className="thumb mt-lg-5 pt-xxl-3 w-100 rounded-4 wow fadeInUp" data-wow-delay="0.5s">
                    <img src="assets/img/service/service-box5.png" alt="img" className="w-100 rounded-4" />
                  </div>
                  <div className="thumb w-100 rounded-4 wow fadeInUp" data-wow-delay="0.7s">
                    <img src="assets/img/service/service-box6.png" alt="img" className="w-100 rounded-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-1370px mx-auto mb-4 pb-xl-2 wow fadeInUp" data-wow-delay="0.8s">
            <h2 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              Benefits You’ll Get
            </h2>
            <p className="mb-xl-3 mb-2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupti
              quos dolores et quas molestias in excepturi sint occaecati cupiditate non provident, similique sunt
              in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis distinctio.
              Nam libero tempore,
              cum soluta nobis est eligendi optio cumque nihil imped
            </p>
          </div>
          <div className="max-w-1370px mx-auto wow fadeInUp" data-wow-delay="0.9s">
            <div className="max-w-1129">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex gap-2">
                    <i className="fa-solid fa-circle text-theme"></i>
                    <div>
                      <h3 className="fs--18px mb-1">Faster Performance</h3>
                      <p>
                        Optimized code and modern technologies ensure fast-loading websites and smooth
                        user experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex gap-2">
                    <i className="fa-solid fa-circle text-theme"></i>
                    <div>
                      <h3 className="fs--18px mb-1">Secure & Reliable</h3>
                      <p>
                        Built with strong security practices to protect data, users, and long-term
                        website stability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex gap-2">
                    <i className="fa-solid fa-circle text-theme"></i>
                    <div>
                      <h3 className="fs--18px mb-1">Fully Responsive</h3>
                      <p>
                        Websites adapt perfectly across desktops, tablets, and mobile
                        devices for consistent usability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex gap-2">
                    <i className="fa-solid fa-circle text-theme"></i>
                    <div>
                      <h3 className="fs--18px mb-1">Better User Experience</h3>
                      <p>
                        User-focused development improves engagement, navigation,
                        and overall satisfaction.
                      </p>
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

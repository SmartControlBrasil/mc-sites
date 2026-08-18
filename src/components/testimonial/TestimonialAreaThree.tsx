 
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Count from "../common/Count";

export default function TestimonialAreaThree() {
  return (
    <>
      {/* <!-- testimonial Section Start --> */}
      <section className="testimonial-section03 fix section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-5">
              <div className="about-right-content testimonial-left-content03">
                <div className="mb-48">
                  <div className="mb-3">
                    <div className="d-flex align-items-center gap-3 flex-wrap wow fadeInUp"
                      data-wow-delay="0.4s">
                      <div className="testimonial-badge">
                        Testimonial_T
                      </div>
                      <h2 className="mb-0">
                        Clients <span className="text-theme">Share</span>
                      </h2>
                    </div>
                    <h3 className="wow fadeInUp" data-wow-delay="0.5s">
                      Their Success With Us
                    </h3>
                  </div>
                  <p className="mb-48 fw-medium wow fadeInUp" data-wow-delay="0.6s">
                    Our clients’ stories reflect the impact of our work. Through strategy, creativity, and
                    collaboration, we help brands
                    achieve measurable growth, stronger engagement
                  </p>
                  <Link to="/testimonial" className="common_btn common_btn-blacktheme text-nowrap wow fadeInUp"
                    data-wow-delay="0.7s">
                    Testimonial Here
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="about-count_inner justify-content-start">
                  <div className="about_count_item">
                    <div className="box">
                      <div className="d-flex justify-content-center mb-1 cont-area">
                        <span className="count">
                          <Count number={95} text="%" />
                        </span>
                      </div>
                      <p className="fs-seven fw-normal text-dark opacity-75">
                        Of our Clients return For a Second Project
                      </p>
                    </div>
                  </div>
                  <div className="about_count_item">
                    <div className="box">
                      <div className="d-flex justify-content-center mb-1 cont-area">
                        <span className="count">
                          <Count number={95} text="%" />
                        </span>
                      </div>
                      <p className="fs-seven fw-normal text-dark opacity-75">
                        Saw Increased
                        Engagement On Digital
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-wrapper03 position-relative">
   
                <Swiper
                spaceBetween={10}
                  speed={1500}
                  loop={true}
                  effect={"fade"}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                  }}
                  modules={[Navigation, Autoplay, EffectFade]}

                  breakpoints={{
                    1199: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                  className="testimonial-slide-wrap3 swiper">

                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-slide-items03">
                      <div className="thumb w-100">
                        <img src="assets/img/testimonial/testimonial-thumbv31.png" alt="img" />
                      </div>
                      <div className="name-box p-xxl-4 p-3">
                        <div className="fs-24px text-uppercase text-dark mb-1">
                          Emma Johnson
                        </div>
                        <p className="pra-clr">
                          CEO, BrightWave
                        </p>
                      </div>
                      <div className="pra-box fs-24px text-dark text-uppercase lh-base">
                        "Working with this agency transformed our digital presence. Their strategy
                        creativity drove real results and measurable
                        growth "
                      </div>
                      <div className="ratting-box p-xxl-4 p-3">
                        <div className="fs-24px text-uppercase text-dark mb-1">
                          <i className="fas fa-star ratting pe-1"></i> 4.9 Rating
                        </div>
                        <p className="pra-clr">
                          CEO, BrightWave
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-slide-items03">
                      <div className="thumb w-100">
                        <img src="assets/img/testimonial/testimonial-thumbv31.png" alt="img" />
                      </div>
                      <div className="name-box p-xxl-4 p-3">
                        <div className="fs-24px text-uppercase text-dark mb-1">
                          Devid Jhon
                        </div>
                        <p className="pra-clr">
                          CEO, LighttWave
                        </p>
                      </div>
                      <div className="pra-box fs-24px text-dark text-uppercase lh-base">
                        "Working with this agency transformed our digital presence. Their strategy
                        creativity drove real results and measurable
                        growth "
                      </div>
                      <div className="ratting-box p-xxl-4 p-3">
                        <div className="fs-24px text-uppercase text-dark mb-1">
                          <i className="fas fa-star ratting pe-1"></i> 4.9 Rating
                        </div>
                        <p className="pra-clr">
                          CEO, Stolingset
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                </Swiper>
                <div className="testimonial-arrow-grp d-flex align-items-center gap-3">
                  <button className="array-prev" type="button">
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button className="array-next active" type="button">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


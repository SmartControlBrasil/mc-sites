 
import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";


export default function TeamAreaOne() {
  const [firstSwiper, setFirstSwiper] = useState<SwiperInstance | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperInstance | null>(null);

  return (
    <>
      <section className="team-section-unique bg-black fix section-padding">
        <div className="container">
          <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
            <div className="text-white opacity-75 fw-medium fs--18px">{"06"}</div>
            <div className="line w-100"></div>
            <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
              <i className="fa-solid fa-circle"></i>
              Creative Team
            </div>
          </div>
          <div className="section-title flex-sm-nowrap justify-content-end flex-wrap gap-2 section-title01 mb-lg-5 ms-auto">
            <h2 className="white-clr fs-64px text-end visible-slowly-bottom fw-bold d-block">
              The Minds Behind <br /> Our Designs
            </h2>
          </div>
          <div className="d-flex z-2 position-relative align-items-center justify-content-end space-top mt-xl-5 gap-lg-4 gap-md-3 gap-2 flex-wrap">
            <Link
              to="/team"
              className="common_btn common_btn-whitetheme text-nowrap wow fadeInUp"
              data-wow-delay="0.9s"
            >
              Meet our team
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
            <Link
              to="/team"
              className="common_btn common_btn-blurtheme text-nowrap wow fadeInUp"
              data-wow-delay="0.9s"
            >
              Join our community
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
          </div>

          <div className="team-slide__wrap">
            <div className="row g-4 align-items-end">

              {/* Big Swiper - mySwiper2 */}
              <div className="col-md-6">
                <Swiper
                  className="mySwiper2"
                  modules={[Controller, Navigation, Autoplay ]}
                  onSwiper={(swiper: SwiperInstance) => setSecondSwiper(swiper)}
                  controller={{ control: firstSwiper ?? undefined }}
                  loop={true}
                  spaceBetween={24}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  breakpoints={{
                    1399: { slidesPerView: 2 },
                    767: { slidesPerView: 1 },
                    575: { slidesPerView: 1 },
                    0: { slidesPerView: 1 },
                  }}
                >
                  <SwiperSlide>
                    <div className="my-team_big">
                      <img src="assets/img/team/team-u1.png" className="mimg" alt="img" />
                      <div className="social-white position-absolute bottom-0 start-0 gap-xl-3 gap-2 d-flex align-items-center m-xxl-4 m-xl-3 m-2">
                        <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-dribbble"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-twitter"></i></a>
                      </div>
                      <div className="team-cont">
                        <span className="badges mb-1 d-inline-block">Brand Designer</span>
                        <h3><Link to="/team-details">Daniel Kim</Link></h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="my-team_big">
                      <img src="assets/img/team/team-u2.png" className="mimg" alt="img" />
                      <div className="social-white position-absolute bottom-0 start-0 gap-xl-3 gap-2 d-flex align-items-center m-xxl-4 m-xl-3 m-2">
                        <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-dribbble"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-twitter"></i></a>
                      </div>
                      <div className="team-cont">
                        <span className="badges mb-1 d-inline-block">Logo Designer</span>
                        <h3><Link to="/team-details">Devid Jamed</Link></h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="my-team_big">
                      <img src="assets/img/team/team-u3.png" className="mimg" alt="img" />
                      <div className="social-white position-absolute bottom-0 start-0 gap-xl-3 gap-2 d-flex align-items-center m-xxl-4 m-xl-3 m-2">
                        <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-dribbble"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-twitter"></i></a>
                      </div>
                      <div className="team-cont">
                        <span className="badges mb-1 d-inline-block">UI Designer</span>
                        <h3><Link to="/team-details">Jhon Doe</Link></h3>
                      </div>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>

              {/* Thumbnail Swiper - mySwiper */}
              <div className="col-md-6">
                <Swiper
                  className="mySwiper"
                  modules={[Controller, Autoplay]}
                  onSwiper={(swiper: SwiperInstance) => setFirstSwiper(swiper)}
                  controller={{ control: secondSwiper ?? undefined }}
                  loop={true}
                  spaceBetween={24}
                  speed={4000}
                  watchSlidesProgress={true}
                  breakpoints={{
                    1399: { slidesPerView: 3 },
                    767: { slidesPerView: 2 },
                    575: { slidesPerView: 2 },
                    0: { slidesPerView: 2 },
                  }}
                >
                  <SwiperSlide>
                    <div className="my_team-item">
                      <img src="assets/img/team/team-u1.png" className="mimg" alt="img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="my_team-item">
                      <img src="assets/img/team/team-u2.png" className="mimg" alt="img" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="my_team-item">
                      <img src="assets/img/team/team-u3.png" className="mimg" alt="img" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
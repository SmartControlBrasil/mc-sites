 
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandAreaThree() {
  return (
    <>
      {/* <!-- Sponsor03 Section Start --> */}
      <div className="sponsor-section03 border-bottom fix">
        <div className="container border-end border-start p-md-0">
          <div className="d-flex align-items-center gap-3">
            <div className="border-end py-4">
              <div className="fs-24px fw-bold text-dark text-uppercase px-md-5 px-sm-3 px-2">
                Global <br /> Partners:
              </div>
            </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={6}
              speed={1500}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".partner-prev",
                prevEl: ".partner-next",
              }}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                1399: {
                  slidesPerView: 6,
                },
                1199: {
                  slidesPerView: 5,
                },
                991: {
                  slidesPerView: 4,
                },
                767: {
                  slidesPerView: 3,
                },
                650: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 2,
                },
              }}
              className="sponsor-wrapp03 swiper">

              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide01.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide02.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide03.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide04.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide05.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide06.png" alt="img" />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide01.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide02.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide03.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide04.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide05.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="sponsor-item03">
                  <img src="assets/img/sponsor/s-slide06.png" alt="img" />
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

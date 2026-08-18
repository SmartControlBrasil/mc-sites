 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function HeroAreaOne() {
  return (
    <>
      <section id="inicio" className="banner-section fix position-relative overflow-hidden">
        <div className="container">
          <div className="container z-1 position-relative">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-12 position-relative">
                <div className="banner-content">
                  <div className="content-head mb-5 pb-xxl-1 d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-4">
                    <div>
                      <span
                        className="hero-sub mb-3 fs-32px heading-font text-white wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        Criamos sites que transformam
                        <span className="d-flex fs-32px heading-font text-white align-items-center gap-2">
                          presença digital em resultado
                          <img src="assets/img/banner/drive.png" alt="" className="drive" />
                        </span>
                      </span>
                      <h1
                        className="h-title pt-lg-0 pt-2 white fw_700 visible-slowly-bottom"
                        data-wow-delay="0.7s"
                      >
                        <span>DESENVOLVIMENTO</span>
                        <span className="d-flex align-items-center">
                          <img
                            src="assets/img/banner/hero-circle.png"
                            alt=""
                            className="text-circle cir36"
                          />
                          WEB PROFISSIONAL
                        </span>
                      </h1>
                    </div>
                    <div className="h-ratting">
                      <div className="text-center">
                        <p className="fs-32px fw-bold text-white heading-font mb-2">Mobile-first</p>
                        <p className="fs-20px lh-base text-white opacity-75 fw-medium heading-font">
                          Design responsivo <br /> por padrão
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="serial-section-wrap d-flex align-items-center gap-3 mb-4 pb-xl-2">
                    <div className="text-white opacity-75 fw-medium fs--18px">001</div>
                    <div className="line w-100"></div>
                    <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
                      <i className="fa-solid fa-circle"></i>
                      MC-SITES
                    </div>
                  </div>
                  <div className="hero-social-area">
                    <div>
                      <div className="fs--18px mb-3 fw-medium text-white">Stack:</div>
                      <div className="social-white gap-xl-3 gap-2 d-flex align-items-center">
                        <span className="icon fs-six text-white">React</span>
                        <span className="icon fs-six text-white">TypeScript</span>
                        <span className="icon fs-six text-white">Vite</span>
                        <span className="icon fs-six text-white">GSAP</span>
                      </div>
                    </div>
                    <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-xxl-5 gap-lg-4 gap-3">
                      <Link to="/contact" className="common_btn text-nowrap">
                        Começar um projeto
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                      <Link to="/project" className="common_btn common_btn-blurtheme text-nowrap">
                        Ver projetos
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                      <p
                        className="pra-box opacity-75 fw-normal white fs-six wow fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        Sites profissionais, landing pages e aplicações web desenvolvidos com
                        estratégia, performance e experiência de usuário.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="showcase-slider">
                  <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={-120}
                    speed={1200}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    modules={[Autoplay]}
                    breakpoints={{
                      0: {
                        spaceBetween: -40,
                      },
                      768: {
                        spaceBetween: -80,
                      },
                      1200: {
                        spaceBetween: -120,
                      },
                    }}
                    className="swiper showcaseSwiper"
                  >
                    <SwiperSlide className="swiper-slide">
                      <div className="slide-inner">
                        <img src="assets/img/banner/hero-sl1.png" alt="Projeto web demonstrativo" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="slide-inner">
                        <img src="assets/img/banner/hero-sl2.png" alt="Landing page demonstrativa" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="slide-inner">
                        <img src="assets/img/banner/hero-sl3.png" alt="Aplicação web demonstrativa" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="slide-inner">
                        <img src="assets/img/banner/hero-sl1.png" alt="Projeto web demonstrativo" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="slide-inner">
                        <img src="assets/img/banner/hero-sl2.png" alt="Landing page demonstrativa" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="slide-inner">
                        <img src="assets/img/banner/hero-sl3.png" alt="Aplicação web demonstrativa" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

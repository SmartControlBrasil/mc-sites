 

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const principles = [
  {
    title: "Estratégia antes do código",
    text: "Cada projeto começa com objetivo de negócio, público-alvo e jornada definidos — não com layout aleatório.",
  },
  {
    title: "Performance como requisito",
    text: "Core Web Vitals, carregamento rápido e código enxuto fazem parte do escopo, não são extras.",
  },
  {
    title: "SEO técnico integrado",
    text: "Estrutura semântica, metadados, indexação e arquitetura de URLs pensados desde o início.",
  },
  {
    title: "UX orientada a conversão",
    text: "Interfaces claras, hierarquia visual e CTAs posicionados para guiar o usuário ao resultado.",
  },
];

export default function TestimonialAreaOne() {
  return (
    <>
      {/* <!-- Principles Section Start --> */}
      <section className="testimonial-section section-padding black-version fix">
        <div className="container">
          <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
            <div className="text-white opacity-75 fw-medium fs--18px">{"09"}</div>
            <div className="line w-100"></div>
            <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
              <i className="fa-solid fa-circle"></i>
              Diferenciais
            </div>
          </div>
          <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title01 mb-48 mx-auto">
            <h2 className="white-clr fs-64px visible-slowly-bottom fw-bold d-block">
              Como o MC-SITES constrói projetos digitais
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-xxl-2 col-lg-3">
              <div className="review-text-box d-center py-5 rounded-4 px-4 fs-32px text-white text-center">
                <div>
                  <span className="text-nowrap fs-32px">Stack</span> <br />
                  <span className="fs--18px mt-2 d-block opacity-75">React · TypeScript · Vite · GSAP</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-10 col-lg-9">
              <Swiper className="swiper testimonial-slider"

                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={22}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".dot",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".array-prev",
                  prevEl: ".array-next",
                }}
                breakpoints={{
                  1199: { slidesPerView: 2 },
                  767: { slidesPerView: 2 },
                  575: { slidesPerView: 1 },
                  0: { slidesPerView: 1 },
                }}

              >

                {principles.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="testimonial-items testimonial-items001">
                      <div className="cont-box border black-bg p-xxl-4 p-3">
                        <h3 className="fs-20px text-white heading-font fw-bold mb-3">{item.title}</h3>
                        <p className="text-white mb-0 opacity-75">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

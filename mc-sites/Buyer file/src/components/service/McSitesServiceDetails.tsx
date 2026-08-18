import { getAdjacentServices, getServiceDetailPath } from "@/data/services-mcsites";
import type { ServiceItem } from "@/types/service";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import ServiceCta from "@/components/service/ServiceCta";

interface McSitesServiceDetailsProps {
  service: ServiceItem;
}

export default function McSitesServiceDetails({ service }: McSitesServiceDetailsProps) {
  const { previous, next } = getAdjacentServices(service.slug);

  return (
    <>
      <section className="web-servies-section section-padding fix">
        <div className="container">
          <div className="blog-list-item">
            <div className="position-relative rounded-5 overflow-hidden">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={service.galleryImages.length > 1}
                effect="fade"
                navigation={{
                  nextEl: ".array-next",
                  prevEl: ".array-prev",
                }}
                modules={[Navigation, EffectFade]}
                className="blog-thumb-wrapper swiper"
              >
                {service.galleryImages.map((image, index) => (
                  <SwiperSlide key={`${service.slug}-${index}`} className="swiper-slide rounded-5 overflow-hidden">
                    <div className="thumb rounded-5 overflow-hidden w-100 d-block">
                      <img src={image} alt={`${service.title} — visual ${index + 1}`} className="w-100" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {service.galleryImages.length > 1 && (
                <>
                  <button className="array-prev" type="button" aria-label="Imagem anterior">
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button className="array-next" type="button" aria-label="Próxima imagem">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="max-w-1370px mx-auto mb-4 pb-xl-2 mt-3 pt-xl-2 wow fadeInUp" data-wow-delay="0.5s">
            <h2 className="fs-64px fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              {service.title}
            </h2>
            {service.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-xl-3 mb-2">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="max-w-1370px mx-auto mb-4 pb-xl-4 wow fadeInUp" data-wow-delay="0.6s">
            <h3 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              O que entregamos
            </h3>
            <ul className="contact-sidebar-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="max-w-1370px mx-auto mb-4 pb-xl-4 wow fadeInUp" data-wow-delay="0.7s">
            <h3 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              Para quem é
            </h3>
            <ul className="contact-sidebar-list">
              {service.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="max-w-1370px mx-auto mb-4 pb-xl-2 wow fadeInUp" data-wow-delay="0.8s">
            <h3 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              Como trabalhamos
            </h3>
            <p className="mb-0 fs-six pra-clr">
              Estratégia → UX/UI → Desenvolvimento → Otimização
            </p>
          </div>

          <div className="blog-previous_next justify-content-xl-center justify-content-start mt-xl-5 mt-4 pt-xl-3">
            {previous ? (
              <Link to={getServiceDetailPath(previous.slug)} className="cmn_prev">
                <i className="fa-solid fa-arrow-left"></i> {previous.title}
              </Link>
            ) : (
              <Link to="/service" className="cmn_prev">
                <i className="fa-solid fa-arrow-left"></i> Todos os serviços
              </Link>
            )}
            {next ? (
              <Link to={getServiceDetailPath(next.slug)} className="cmn_prev active">
                {next.title} <i className="fa-solid fa-arrow-right"></i>
              </Link>
            ) : (
              <Link to="/contact" className="cmn_prev active">
                Solicitar projeto <i className="fa-solid fa-arrow-right"></i>
              </Link>
            )}
          </div>
        </div>
      </section>

      <ServiceCta className="pt-0" />
    </>
  );
}

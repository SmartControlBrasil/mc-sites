import {
  getAdjacentProjects,
  getProjectDetailPath,
  getProjectServicePath,
} from "@/data/projects-mcsites";
import type { ProjectItem } from "@/types/project";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

interface McSitesProjectDetailsProps {
  project: ProjectItem;
}

export default function McSitesProjectDetails({ project }: McSitesProjectDetailsProps) {
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <section className="web-servies-section section-padding fix">
      <div className="container">
        {project.status === "placeholder" && (
          <div className="project-placeholder-notice mb-4 wow fadeInUp" data-wow-delay="0.4s">
            <p className="mb-0">
              <strong>Projeto demonstrativo</strong> — estrutura ilustrativa do portfólio MC-SITES, sem
              cliente, case ou resultados reais associados.
            </p>
          </div>
        )}

        <div className="blog-list-item">
          <div className="position-relative rounded-5 overflow-hidden">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={project.galleryImages.length > 1}
              effect="fade"
              navigation={{
                nextEl: ".array-next",
                prevEl: ".array-prev",
              }}
              modules={[Navigation, EffectFade]}
              className="blog-thumb-wrapper swiper"
            >
              {project.galleryImages.map((image, index) => (
                <SwiperSlide key={`${project.slug}-${index}`} className="swiper-slide rounded-5 overflow-hidden">
                  <div className="thumb rounded-5 overflow-hidden w-100 d-block">
                    <img
                      src={image}
                      alt={`${project.title} — galeria ${index + 1}`}
                      className="w-100"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {project.galleryImages.length > 1 && (
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

        <div className="contact-info-wrap contact-info-wrap02 mb-4 rounded-pill mt-4">
          <div className="contact-info_item">
            <p className="mb-2 lh-1">Categoria:</p>
            <h2 className="m-0 fs--18px">{project.category}</h2>
          </div>
          <div className="border border-h-96 p-0 w-auto rounded-0"></div>
          <div className="contact-info_item">
            <p className="mb-2 lh-1">Tipo:</p>
            <h2 className="m-0 fs--18px">
              {project.status === "placeholder" ? "Demonstração estrutural" : "Projeto real"}
            </h2>
          </div>
          <div className="border border-h-96 p-0 w-auto rounded-0"></div>
          <div className="contact-info_item">
            <p className="mb-2 lh-1">Serviços:</p>
            <h2 className="m-0 fs--18px">{project.services.join(", ")}</h2>
          </div>
        </div>

        <div className="max-w-1370px mx-auto mb-4 pb-xl-2 pt-lg-2 wow fadeInUp" data-wow-delay="0.6s">
          <h2 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">Visão geral</h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mb-xl-3 mb-2">
              {paragraph}
            </p>
          ))}
        </div>

        {project.challenge && (
          <div className="max-w-1370px mx-auto mb-4 pb-xl-2 wow fadeInUp" data-wow-delay="0.65s">
            <div className="row g-3">
              <div className="col-md-4">
                <h2 className="fs-32px text-uppercase text-dark mb-0">Desafio</h2>
              </div>
              <div className="col-md-8">
                <p className="mb-0">{project.challenge}</p>
              </div>
            </div>
          </div>
        )}

        {project.solution && (
          <div className="max-w-1370px mx-auto mb-4 pb-xl-2 wow fadeInUp" data-wow-delay="0.7s">
            <div className="row g-3">
              <div className="col-md-4">
                <h2 className="fs-32px text-uppercase text-dark mb-0">Solução</h2>
              </div>
              <div className="col-md-8">
                <p className="mb-0">{project.solution}</p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-1370px mx-auto mb-4 pb-xl-4 wow fadeInUp" data-wow-delay="0.75s">
          <h3 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
            Serviços envolvidos
          </h3>
          <ul className="contact-sidebar-list">
            {project.services.map((service, index) => {
              const servicePath = getProjectServicePath(project, index);

              return (
                <li key={service}>
                  {servicePath ? (
                    <Link to={servicePath}>{service}</Link>
                  ) : (
                    service
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="max-w-1370px mx-auto mb-4 pb-xl-4 wow fadeInUp" data-wow-delay="0.8s">
          <h3 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">Tecnologias</h3>
          <ul className="contact-sidebar-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="max-w-1370px mx-auto mb-4 pb-lg-1 d-flex gap-xl-4 gap-3 align-items-center flex-wrap">
          {project.galleryImages.map((image, index) => (
            <div key={`${project.slug}-gallery-${index}`} className="thumb flex-fill rounded-4 wow fadeInUp" data-wow-delay="0.4s">
              <img
                src={image}
                alt={`${project.title} — visual complementar ${index + 1}`}
                className="w-100 rounded-4"
              />
            </div>
          ))}
        </div>

        <div className="blog-previous_next justify-content-xl-center justify-content-start mt-xl-5 mt-4 pt-xl-3">
          {previous ? (
            <Link to={getProjectDetailPath(previous.slug)} className="cmn_prev">
              <i className="fa-solid fa-arrow-left"></i> {previous.title}
            </Link>
          ) : (
            <Link to="/project" className="cmn_prev">
              <i className="fa-solid fa-arrow-left"></i> Todos os projetos
            </Link>
          )}
          {next ? (
            <Link to={getProjectDetailPath(next.slug)} className="cmn_prev active">
              {next.title} <i className="fa-solid fa-arrow-right"></i>
            </Link>
          ) : (
            <Link to="/contact" className="cmn_prev active">
              Solicitar projeto <i className="fa-solid fa-arrow-right"></i>
            </Link>
          )}
        </div>

        <div className="contact-submit-area rounded-4 text-center mt-5 wow fadeInUp" data-wow-delay="0.5s">
          <h2 className="title pb-3 mb-3 fw-bold">Quer construir algo assim para sua empresa?</h2>
          <p className="fs-six pra-clr mb-4 mx-auto" style={{ maxWidth: "560px" }}>
            Conte o contexto do seu projeto e vamos avaliar escopo, abordagem técnica e melhor caminho
            para a experiência digital.
          </p>
          <Link to="/contact" className="common_btn text-nowrap">
            Solicitar projeto
            <span className="icon_wrapper">
              <i className="fas fa-long-arrow-alt-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

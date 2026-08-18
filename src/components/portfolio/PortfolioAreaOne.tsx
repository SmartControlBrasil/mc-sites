import {
  getFeaturedProjects,
  getProjectDetailPath,
} from "@/data/projects-mcsites";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioAreaOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredProjects = getFeaturedProjects(3);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 767px)", () => {
      const sections = gsap.utils.toArray<HTMLElement>(".quiable-slide-in");

      gsap.set(sections, {
        scale: 1,
      });

      sections.forEach((section) => {
        gsap.to(section, {
          scale: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top 10%",
            end: "bottom 60%",
            endTrigger: ".project-floting-wrap",
            pinSpacing: false,
            markers: false,
          },
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="projetos" className="work-section-unique bg-black fix section-padding" aria-labelledby="projetos-title">
      <div className="container">
        <div className="serial-section-wrap d-flex align-items-center gap-3 mb-4">
          <div className="text-white opacity-75 fw-medium fs--18px">03</div>
          <div className="line w-100"></div>
          <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
            <i className="fa-solid fa-circle"></i>
            Projetos
          </div>
        </div>
        <div className="section-title section-title02 mb-48 mx-auto">
          <h2
            id="projetos-title"
            className="white-clr text-center fs-64px visible-slowly-bottom fw-bold d-block"
          >
            Projetos digitais construídos com estratégia.
          </h2>
          <p className="text-white opacity-75 text-center fs-six mx-auto mt-3 mb-0" style={{ maxWidth: "720px" }}>
            Uma seleção de experiências web desenvolvidas para combinar clareza, tecnologia e performance.
          </p>
        </div>
        <div ref={containerRef} className="working-wrapper project-floting-wrap">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="working_inner quiable-slide-in mb-3 bg-black d-flex align-items-center justify-content-between gap-4"
            >
              <div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
                Projetos
              </div>
              <div className="wroking-service-card">
                <Link to={getProjectDetailPath(project.slug)} className="thumb">
                  <img src={project.image} alt={project.title} />
                </Link>
                <div className="content">
                  <div className="mb-xxl-5 mb-4">
                    {project.status === "placeholder" && (
                      <p className="fs-seven text-white opacity-50 mb-2 text-uppercase">
                        Projeto demonstrativo
                      </p>
                    )}
                    <div className="title fs-32px heading-font fw-bold text-white text-uppercase mb-xxl-3 mb-2">
                      {project.title}
                    </div>
                    <p className="fs-seven text-white opacity-50">{project.shortDescription}</p>
                  </div>
                  <div className="d-flex flex-column gap-2 mb-xxl-4 mb-3">
                    <div className="d-flex text-white fs-six align-items-center gap-2">
                      <span className="year opacity-50 fw-normal">Categoria:</span>
                      <div className="text-uppercase text-white fw-bold">{project.category}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <Link
                      to={getProjectDetailPath(project.slug)}
                      className="common_btn common_btn-blurtheme text-nowrap ps-3 py-1 px-1"
                    >
                      Ver projeto
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                    <div className="fs-32px fw-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
                MC-SITES
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 pt-2 wow fadeInUp" data-wow-delay="0.6s">
          <Link to="/project" className="common_btn common_btn-blurtheme text-nowrap">
            Ver todos os projetos
            <span className="icon_wrapper">
              <i className="fas fa-long-arrow-alt-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

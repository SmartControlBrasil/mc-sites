import {
  getProjectDetailPath,
  MCSITES_PROJECTS,
} from "@/data/projects-mcsites";
import { Link } from "react-router-dom";

export default function McSitesProjectsGrid() {
  const totalProjects = MCSITES_PROJECTS.length;

  return (
    <section className="recent-word-section fix" aria-labelledby="projects-grid-title">
      <div className="container">
        <div className="section-padding">
          <h2 id="projects-grid-title" className="visually-hidden">
            Lista de projetos
          </h2>
          <div className="recent-word-wrapper">
            {MCSITES_PROJECTS.map((project, index) => {
              const serial = String(index + 1).padStart(2, "0");
              const isEven = index % 2 === 0;

              return (
                <article key={project.slug} className="recent-single-items">
                  <div className="recent-head wow fadeInUp" data-wow-delay="0.5s">
                    {isEven ? (
                      <>
                        <Link to={getProjectDetailPath(project.slug)} className="thumb rounded-4">
                          <img
                            src={project.listThumbPrimary}
                            alt={project.title}
                            className="w-100 img rounded-4"
                          />
                        </Link>
                        <div className="serial text-nowrap">
                          {serial} <small>/{String(totalProjects).padStart(2, "0")}</small>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="serial text-nowrap">
                          {serial} <small>/{String(totalProjects).padStart(2, "0")}</small>
                        </div>
                        <Link to={getProjectDetailPath(project.slug)} className="thumb rounded-4">
                          <img
                            src={project.listThumbPrimary}
                            alt={project.title}
                            className="w-100 img rounded-4"
                          />
                        </Link>
                      </>
                    )}
                  </div>
                  <div
                    className={`recent-word-content pt-3 ${isEven ? "ms-lg-auto" : "me-lg-auto"}`}
                  >
                    {isEven ? (
                      <>
                        <div className="cont wow fadeInUp" data-wow-delay="0.6s">
                          <ProjectCardContent project={project} />
                        </div>
                        <Link
                          to={getProjectDetailPath(project.slug)}
                          className="thumb-small rounded-4 wow fadeInUp"
                          data-wow-delay="0.7s"
                        >
                          <img
                            src={project.listThumbSecondary}
                            alt={`${project.title} — detalhe visual`}
                            className="w-100 img rounded-4"
                          />
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to={getProjectDetailPath(project.slug)}
                          className="thumb-small rounded-4 wow fadeInUp"
                          data-wow-delay="0.7s"
                        >
                          <img
                            src={project.listThumbSecondary}
                            alt={`${project.title} — detalhe visual`}
                            className="w-100 img rounded-4"
                          />
                        </Link>
                        <div className="cont wow fadeInUp" data-wow-delay="0.6s">
                          <ProjectCardContent project={project} />
                        </div>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCardContent({
  project,
}: {
  project: (typeof MCSITES_PROJECTS)[number];
}) {
  return (
    <>
      {project.status === "placeholder" && (
        <p className="fs-seven pra-clr mb-2 text-uppercase">Projeto demonstrativo</p>
      )}
      <Link
        to={getProjectDetailPath(project.slug)}
        className="cart-title mb-2 d-block pb-1 text-dark fw-bold text-uppercase"
      >
        {project.title}
      </Link>
      <div className="d-flex mb-3 flex-wrap gap-xxl-3 gap-2 align-items-center">
        <span className="tags-blog text-dark fs--18px bg-F5F5F5 d-inline-block rounded-pill py-2 px-3 fw-medium">
          {project.category}
        </span>
      </div>
      <p className="fs-six pra-clr mb-4">{project.shortDescription}</p>
      <div>
        <Link
          to={getProjectDetailPath(project.slug)}
          className="read-more text-dark fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2"
        >
          Ver projeto
          <div className="bg-theme w-32 min-w-32 h-32 p1-bg rounded-circle d-center">
            <img src="assets/img/icon/right-arrow.svg" alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}

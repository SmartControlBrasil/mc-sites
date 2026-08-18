import { Link } from "react-router-dom";

interface ProjectDetailsBreadcrumbProps {
  title: string;
  category: string;
  technologies: string[];
}

export default function ProjectDetailsBreadcrumb({
  title,
  category,
  technologies,
}: ProjectDetailsBreadcrumbProps) {
  return (
    <section className="banner-breadcrumb-section fix position-relative">
      <div className="container">
        <div className="breadcrumb-content">
          <h1 className="text-center mb-4 heading-font visible-slowly-bottom">{title}</h1>
          <div className="text-center">
            <ul className="bread-link justify-content-center">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>//</li>
              <li>
                <Link to="/project">Projetos</Link>
              </li>
              <li>//</li>
              <li>{title}</li>
            </ul>
            <ul className="development-link justify-content-center mt-3">
              <li>{category}</li>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <img src="assets/img/element/circle-opacity.png" alt="" className="breadcrumb-cirlce cir36" />
    </section>
  );
}

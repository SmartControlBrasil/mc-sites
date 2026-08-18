
import { Link } from "react-router-dom";

interface ServiceDetailsBreadcrumbProps {
  title: string;
  highlights: string[];
}

export default function ServiceDetailsBreadcrumb({
  title,
  highlights,
}: ServiceDetailsBreadcrumbProps) {
  return (
    <>
      <section className="banner-breadcrumb-section fix position-relative">
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="text-center mb-4 heading-font visible-slowly-bottom">
              {title}
            </h1>
            <div className="text-center">
              <ul className="bread-link justify-content-center">
                <li>
                  <Link to="/">Início</Link>
                </li>
                <li>//</li>
                <li>
                  <Link to="/service">Serviços</Link>
                </li>
                <li>//</li>
                <li>{title}</li>
              </ul>
              {highlights.length > 0 && (
                <ul className="development-link justify-content-center mt-3">
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <img src="assets/img/element/circle-opacity.png" alt="" className="breadcrumb-cirlce cir36" />
      </section>
    </>
  );
}

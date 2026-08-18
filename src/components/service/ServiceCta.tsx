import { Link } from "react-router-dom";

interface ServiceCtaProps {
  className?: string;
}

export default function ServiceCta({ className = "" }: ServiceCtaProps) {
  return (
    <section className={`section-padding fix ${className}`.trim()}>
      <div className="container">
        <div className="contact-submit-area rounded-4 text-center wow fadeInUp" data-wow-delay=".5s">
          <h2 className="title pb-3 mb-3 fw-bold">Vamos conversar sobre seu projeto?</h2>
          <p className="fs-six pra-clr mb-4 mx-auto" style={{ maxWidth: "560px" }}>
            Conte o que você precisa construir. Vamos entender escopo, objetivos e a melhor abordagem
            para o seu projeto digital.
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

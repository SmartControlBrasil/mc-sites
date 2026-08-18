import { Link } from "react-router-dom";
import { getServiceDetailPath } from "@/data/services-mcsites";

export default function ServiceAreaOne() {
  return (
    <>
      {/* <!-- service Section Start --> */}
      <section id="servicos" className="service-section-unique black-version fix section-padding">
        <div className="container">
          <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
            <div className="text-white opacity-75 fw-medium fs--18px">{"05"}</div>
            <div className="line w-100"></div>
            <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
              <i className="fa-solid fa-circle"></i>
              Serviços
            </div>
          </div>
          <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title02 mb-48 mx-auto">
            <h2 className="white-clr fs-64px visible-slowly-bottom fw-bold d-block">
              Soluções digitais para <br /> presença e conversão
            </h2>
            <div>
              <Link to="/service" className="common_btn text-nowrap">
                Ver todos
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="brand-wrapper d-flex flex-column gap-4">
            <div className="bran_items d-flex align-items-center justify-content-center gap-4">
              <div className="content d-flex align-items-center gap-3">
                <h3>Sites</h3>
                <h4 className="fs--18px">
                  Institucionais <br /> profissionais
                </h4>
              </div>
              <Link to={getServiceDetailPath("sites-profissionais")} className="thumb rounded-4 d-block">
                <img src="assets/img/thumbnail/app-thumb.png" alt="Sites profissionais" className="rounded-4" />
              </Link>
            </div>
            <div className="bran_items items2 d-flex align-items-center justify-content-between gap-4">
              <Link to={getServiceDetailPath("landing-pages")} className="thumb rounded-4 d-block">
                <img src="assets/img/thumbnail/design-thumb.png" alt="Landing pages" className="rounded-4" />
              </Link>
              <div className="content d-flex flex-row-reverse align-items-center gap-3">
                <h3>Landing</h3>
                <h4 className="fs--18px">
                  Páginas de <br /> conversão
                </h4>
              </div>
              <div></div>
            </div>
            <div className="bran_items items3 d-flex align-items-center justify-content-between gap-4">
              <div></div>
              <div className="content d-flex align-items-center gap-3">
                <h3>Apps &</h3>
                <h4 className="fs--18px">
                  Aplicações <br /> Web · UX/UI
                </h4>
              </div>
              <Link to={getServiceDetailPath("aplicacoes-web")} className="thumb rounded-4 d-block">
                <img src="assets/img/thumbnail/guide-thumb.png" alt="Aplicações web e UX/UI" className="rounded-4" />
              </Link>
            </div>
            <div className="bran_items items4 d-flex align-items-center justify-content-between gap-4">
              <Link to={getServiceDetailPath("seo-tecnico")} className="thumb rounded-4 d-block">
                <img src="assets/img/thumbnail/visual-thumb.png" alt="SEO e Performance" className="rounded-4" />
              </Link>
              <div className="content d-flex flex-row-reverse align-items-center gap-3">
                <h3>SEO &</h3>
                <h4 className="fs--18px">
                  Performance <br /> · CRO
                </h4>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

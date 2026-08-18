import { Link } from "react-router-dom";


export default function FooterOne() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section footer-section-main fix">
        <div className="container">
          <div className="row g-lg-0 g-4 justify-content-between">
            <div className="col-lg-7">
              <div className="left-side-footer">
                <div className="left-area">
                  <div className="serial text-nowrap wow fadeInLeft" data-wow-delay="0.3s">Footer {"011"} -</div>
                  <h2 className="visible-from-bottom">MC-SITES</h2>
                  <p className="text-white opacity-75 mt-3 wow fadeInUp" data-wow-delay="0.4s">
                    Sites, experiências digitais e desenvolvimento web.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="right-side-footer">
                <h3 className="wow fadeInUp" data-wow-delay="0.3s">Links</h3>
                <ul className="r-link wow fadeInUp" data-wow-delay="0.4s">
                  <li>
                    <Link to="/service">
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link to="/project">
                      Projetos
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      Contato
                    </Link>
                  </li>
                </ul>
                <Link to="/" className="footer-logo-big wow fadeInUp d-block" data-wow-delay="0.5s">
                  <span className="text-white fw-bold display-4 heading-font text-uppercase">MC-SITES</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-4">
          <div className="container">
            <div className="justify-content-md-between justify-content-center d-flex flex-md-nowrap flex-wrap gap-3">
              <p className="text-white opacity-75 wow fadeInLeft body-font" data-wow-delay=".3s">
                &copy; {new Date().getFullYear()} <Link to="/" className="text-p1">MC-SITES</Link>. Todos os direitos reservados.
              </p>
              <div className="footer-bottom-link">
                <Link to="/contact">
                  Termos de Uso
                </Link>
                <Link to="/contact">
                //
                </Link>
                <Link to="/contact">
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

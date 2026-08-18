import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import McSitesServicesGrid from "@/components/service/McSitesServicesGrid";
import ServiceCta from "@/components/service/ServiceCta";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

export default function Service() {
  return (
    <>
      <HeaderOne />
      <main>
        <Breacrumb
          title="Desenvolvimento digital do projeto à performance."
          subtitle="Serviços"
          homeLabel="Início"
        />
        <section className="contact-intro-section section-padding pt-0 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11 text-center wow fadeInUp" data-wow-delay=".4s">
                <p className="fs--18px text-uppercase fw-semibold mb-3 pra-clr">
                  MC-SITES · Sites, experiências digitais e desenvolvimento web
                </p>
                <p className="fs-six pra-clr mx-auto mb-0" style={{ maxWidth: "760px" }}>
                  Estratégia, design e tecnologia trabalhando juntos para construir experiências
                  digitais profissionais.
                </p>
              </div>
            </div>
          </div>
        </section>
        <McSitesServicesGrid />
        <ServiceCta />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  );
}

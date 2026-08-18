import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import McSitesProjectsGrid from "@/components/project/McSitesProjectsGrid";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

export default function Project() {
  return (
    <>
      <HeaderOne />
      <main>
        <Breacrumb
          title="Projetos digitais pensados para resolver problemas reais."
          subtitle="Projetos"
          homeLabel="Início"
        />
        <section className="contact-intro-section section-padding pt-0 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11 text-center wow fadeInUp" data-wow-delay=".4s">
                <p className="fs--18px text-uppercase fw-semibold mb-3 pra-clr">
                  MC-SITES · Portfólio
                </p>
                <p className="fs-six pra-clr mx-auto mb-0" style={{ maxWidth: "760px" }}>
                  Sites, landing pages e aplicações web desenvolvidos com foco em experiência,
                  performance e objetivo de negócio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <McSitesProjectsGrid />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  );
}

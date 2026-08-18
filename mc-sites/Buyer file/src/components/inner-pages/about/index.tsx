import McSitesAboutCta from "@/components/about/McSitesAboutCta";
import McSitesAboutDifferentiators from "@/components/about/McSitesAboutDifferentiators";
import McSitesAboutPrinciples from "@/components/about/McSitesAboutPrinciples";
import McSitesAboutProcessSummary from "@/components/about/McSitesAboutProcessSummary";
import McSitesAboutTechnical from "@/components/about/McSitesAboutTechnical";
import McSitesAboutWhoWeAre from "@/components/about/McSitesAboutWhoWeAre";
import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import {
  MCSITES_ABOUT_POSITIONING,
  MCSITES_ABOUT_SUPPORT,
} from "@/data/about-mcsites";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

export default function About() {
  return (
    <>
      <HeaderOne />
      <main>
        <Breacrumb
          title="Tecnologia, estratégia e experiência em cada projeto."
          subtitle="Sobre"
          homeLabel="Início"
        />
        <section className="contact-intro-section section-padding pt-0 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11 text-center wow fadeInUp" data-wow-delay=".4s">
                <p className="fs--18px text-uppercase fw-semibold mb-3 pra-clr">
                  MC-SITES · {MCSITES_ABOUT_POSITIONING}
                </p>
                <p className="fs-six pra-clr mx-auto mb-0" style={{ maxWidth: "760px" }}>
                  {MCSITES_ABOUT_SUPPORT}
                </p>
              </div>
            </div>
          </div>
        </section>
        <McSitesAboutWhoWeAre />
        <McSitesAboutPrinciples />
        <McSitesAboutTechnical />
        <McSitesAboutProcessSummary />
        <McSitesAboutDifferentiators />
        <McSitesAboutCta />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  );
}

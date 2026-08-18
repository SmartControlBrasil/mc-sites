
import ContactForm from "@/components/contact/ContactForm";

const preparationItems = [
  "Objetivo do site",
  "Público desejado",
  "Funcionalidades necessárias",
  "Referências visuais",
  "Prazo esperado",
];

export default function ContactArea() {
  return (
    <>
      <section className="contact-intro-section section-padding pt-0 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 text-center wow fadeInUp" data-wow-delay=".4s">
              <p className="fs--18px text-uppercase fw-semibold mb-3 pra-clr">
                MC-SITES · Sites, experiências digitais e desenvolvimento web
              </p>
              <p className="fs-six pra-clr mx-auto mb-0" style={{ maxWidth: "760px" }}>
                Conte um pouco sobre o que você precisa. Vamos entender o projeto, os
                objetivos e o melhor caminho para transformar a ideia em uma experiência
                digital eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="contact-main-section section-padding pt-0 fix">
        <div className="container">
          <div className="row g-xxl-5 g-4">
            <div className="col-lg-5">
              <div className="contact-sidebar rounded-4 wow fadeInUp" data-wow-delay=".4s">
                <h2 className="title pb-3 mb-4 fw-bold">Antes de começar</h2>
                <p className="fs-six pra-clr mb-4">
                  Quanto mais contexto você enviar, melhor poderemos entender escopo,
                  prioridades e objetivos do projeto.
                </p>
                <ul className="contact-sidebar-list">
                  {preparationItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

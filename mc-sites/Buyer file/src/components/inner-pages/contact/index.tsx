import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import ContactArea from "@/components/contact/ContactArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

export default function Contact() {
  return (
    <>
      <HeaderOne />
      <main>
        <Breacrumb
          title="Vamos construir seu próximo projeto digital."
          subtitle="Contato"
        />
        <ContactArea />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  )
}

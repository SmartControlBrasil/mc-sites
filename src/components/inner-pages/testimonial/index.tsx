import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import ProcessAreaTwo from "@/components/process/ProcessAreaTwo";
import TestimonialAreaTwo from "@/components/testimonial/TestimonialAreaTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";


export default function Testimonial() {
  return (
    <>
      <HeaderThree />
      <main>
        <Breacrumb title="TESTIMONIAL" subtitle="CUSTOMER REVIEWS" />
        <TestimonialAreaTwo />
        <ProcessAreaTwo />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  )
}

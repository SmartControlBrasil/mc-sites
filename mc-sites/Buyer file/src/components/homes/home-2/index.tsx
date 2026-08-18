import AboutAreaTwo from "@/components/about/AboutAreaTwo";
import AwardsAreaTwo from "@/components/awards/AwardsAreaTwo";
import BlogAreaTwo from "@/components/blog/BlogAreaTwo";
import BackToTop from "@/components/common/BackToTop";
import HeroAreaTwo from "@/components/hero/HeroAreaTwo";
import ProcessAreaTwo from "@/components/process/ProcessAreaTwo";
import ServiceAreaTwo from "@/components/service/ServiceAreaTwo";
import TestimonialAreaTwo from "@/components/testimonial/TestimonialAreaTwo";
import WorkAreaTwo from "@/components/work/WorkAreaTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";


export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroAreaTwo />
        <AboutAreaTwo />
        <ServiceAreaTwo />
        <WorkAreaTwo />
        <ProcessAreaTwo />
        <AwardsAreaTwo />
        <TestimonialAreaTwo />
        <BlogAreaTwo />
      </main>
      <BackToTop />
      <FooterTwo />    
    </>
  )
}

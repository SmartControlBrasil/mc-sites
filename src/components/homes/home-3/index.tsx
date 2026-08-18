import AboutAreaThree from "@/components/about/AboutAreaThree";
import ApproachAreaThree from "@/components/approach/ApproachAreaThree";
import AwardsAreaThree from "@/components/awards/AwardsAreaThree";
import BlogAreaThree from "@/components/blog/BlogAreaThree";
import BrandAreaThree from "@/components/brands/BrandAreaThree";
import BackToTop from "@/components/common/BackToTop";
import HeroAreaThree from "@/components/hero/HeroAreaThree";
import ServiceAreaThree from "@/components/service/ServiceAreaThree";
import TeamAreaThree from "@/components/team/TeamAreaThree";
import TestimonialAreaThree from "@/components/testimonial/TestimonialAreaThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderThree from "@/layouts/headers/HeaderThree";


export default function HomeThree() {
  return (
    <>
      <HeaderThree />
      <main>
        <HeroAreaThree />
        <BrandAreaThree />
        <AboutAreaThree />
        <ServiceAreaThree />
        <AwardsAreaThree />
        <TeamAreaThree />
        <ApproachAreaThree />
        <TestimonialAreaThree />
        <BlogAreaThree />
      </main>
      <BackToTop />
      <FooterThree />   
    </>
  )
}

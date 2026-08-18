
import BannerAreaOne from "@/components/banner/BannerAreaOne";
import BlogAreaOne from "@/components/blog/BlogAreaOne";
import BackToTop from "@/components/common/BackToTop";
import CountDownAreaOne from "@/components/countdown/CountDownAreaOne";
import CtaAreaOne from "@/components/cta/CtaAreaOne";
import HeroAreaOne from "@/components/hero/HeroAreaOne";
import McSitesProcessArea from "@/components/process/McSitesProcessArea";
import PortfolioAreaOne from "@/components/portfolio/PortfolioAreaOne";
import ServiceAreaOne from "@/components/service/ServiceAreaOne";
import TestimonialAreaOne from "@/components/testimonial/TestimonialAreaOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";


export default function HomeOne() {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroAreaOne />
        <CountDownAreaOne />
        <PortfolioAreaOne />
        <BannerAreaOne />
        <McSitesProcessArea />
        <ServiceAreaOne />
        <CtaAreaOne />
        <TestimonialAreaOne />
        <BlogAreaOne />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  )
}

import BlogDetailsArea from "@/components/blog/BlogDetailsArea";
import BackToTop from "@/components/common/BackToTop";
import BreacrumbTwo from "@/components/common/BreacrumbTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";


export default function BlogDetails() {
  return (
      <>
      <HeaderThree />
      <main>
        <BreacrumbTwo  />
        <BlogDetailsArea />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  )
}

import BlogArea from "@/components/blog/BlogArea";
import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";


export default function Blog() {
  return (
    <>
      <HeaderThree />
      <main>
        <Breacrumb title="Blog Grid" subtitle="Latest News" />
        <BlogArea />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  )
}

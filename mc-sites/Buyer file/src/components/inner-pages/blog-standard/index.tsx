import BlogStandardArea from "@/components/blog/BlogStandardArea";
import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";


export default function BlogStandard() {
  return (
      <>
      <HeaderThree />
      <main>
        <Breacrumb title="Blog List" subtitle="Latest News" />
        <BlogStandardArea />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  )
}

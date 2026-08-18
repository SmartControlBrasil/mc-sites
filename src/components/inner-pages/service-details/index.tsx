import BackToTop from "@/components/common/BackToTop";
import ServiceDetailsBreadcrumb from "@/components/common/ServiceDetailsBreadcrumb";
import McSitesServiceDetails from "@/components/service/McSitesServiceDetails";
import { getServiceBySlug } from "@/data/services-mcsites";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { Navigate, useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/service" replace />;
  }

  return (
    <>
      <HeaderOne />
      <main>
        <ServiceDetailsBreadcrumb title={service.title} highlights={service.highlights} />
        <McSitesServiceDetails service={service} />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  );
}

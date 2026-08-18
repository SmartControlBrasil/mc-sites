import BackToTop from "@/components/common/BackToTop";
import ProjectDetailsBreadcrumb from "@/components/common/ProjectDetailsBreadcrumb";
import McSitesProjectDetails from "@/components/project/McSitesProjectDetails";
import { getProjectBySlug } from "@/data/projects-mcsites";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { Navigate, useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/project" replace />;
  }

  return (
    <>
      <HeaderOne />
      <main>
        <ProjectDetailsBreadcrumb
          title={project.title}
          category={project.category}
          technologies={project.technologies}
        />
        <McSitesProjectDetails project={project} />
      </main>
      <BackToTop />
      <FooterOne />
    </>
  );
}

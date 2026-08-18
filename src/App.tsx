
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import ScrollToHash from "./components/common/ScrollToHash";
import Wrapper from "./layouts/Wrapper";
import HomeOne from "./components/homes/home-1";
import AnimationProvider from "./hooks/AnimationProvider";
import HomeTwo from "./components/homes/home-2";
import HomeThree from "./components/homes/home-3";
import Service from "./components/inner-pages/service";
import ServiceDetails from "./components/inner-pages/service-details";
import Team from "./components/inner-pages/team";
import TeamDetails from "./components/inner-pages/team-details";
import About from "./components/inner-pages/about";
import Testimonial from "./components/inner-pages/testimonial";
import Contact from "./components/inner-pages/contact";
import NotFound from "./components/error/NotFound";
import Project from "./components/inner-pages/project";
import ProjectDetails from "./components/inner-pages/project-details";
import Blog from "./components/inner-pages/blog";
import BlogStandard from "./components/inner-pages/blog-standard";
import BlogDetails from "./components/inner-pages/blog-details";

function RootLayout() {
  return (
    <>
      <ScrollToHash />
      <AnimationProvider />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomeOne /> },
      { path: "/home-2", element: <HomeTwo /> },
      { path: "/home-3", element: <HomeThree /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/service-details", element: <Navigate to="/service-details/sites-profissionais" replace /> },
      { path: "/service-details/:slug", element: <ServiceDetails /> },
      { path: "/team", element: <Team /> },
      { path: "/team-details", element: <TeamDetails /> },
      { path: "/testimonial", element: <Testimonial /> },
      { path: "/contact", element: <Contact /> },
      { path: "/project", element: <Project /> },
      { path: "/project-details", element: <Navigate to="/project-details/site-institucional-servicos-b2b" replace /> },
      { path: "/project-details/:slug", element: <ProjectDetails /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog-standard", element: <BlogStandard /> },
      { path: "/blog-details", element: <BlogDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;

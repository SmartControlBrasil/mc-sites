const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "#",
    has_dropdown: true,
    is_home_menu: true,
    sub_menus: [
      { id: 1, title: "Home 01", link: "/", img: "assets/img/banner/hero-demo1.png" },
      { id: 2, title: "Home 02", link: "/home-2", img: "assets/img/banner/hero-demo2.png" },
      { id: 3, title: "Home 03", link: "/home-3", img: "assets/img/banner/hero-demo3.png" },
    ],
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Pages",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { id: 1, title: "Service", link: "/service" },
      { id: 2, title: "Service Details", link: "/service-details" },
      { id: 3, title: "Team", link: "/team" },
      { id: 4, title: "Team Details", link: "/team-details" },
      { id: 5, title: "Testimonial", link: "/testimonial" },
      { id: 6, title: "Contact", link: "/contact" },
      { id: 7, title: "Error 404", link: "/error" },
    ],
  },
  {
    id: 4,
    title: "Projects",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { id: 1, title: "Project", link: "/project" },
      { id: 2, title: "Project Details", link: "/project-details" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { id: 1, title: "Blog", link: "/blog" },
      { id: 2, title: "Blog Standard", link: "/blog-standard" },
      { id: 3, title: "Blog Details", link: "/blog-details" },
    ],
  },
  {
    id: 6,
    title: "Contact Us",
    link: "/contact",
    has_dropdown: false,
  },
];

export default menu_data;
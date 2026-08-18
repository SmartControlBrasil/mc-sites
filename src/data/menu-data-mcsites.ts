import type { MenuItem } from "@/types/menu_types";
import { getServiceDetailPath, MCSITES_SERVICES } from "@/data/services-mcsites";

const serviceSubMenus: MenuItem[] = MCSITES_SERVICES.map((service, index) => ({
  id: index + 1,
  title: service.title,
  link: getServiceDetailPath(service.slug),
  has_dropdown: false,
}));

const mcsites_menu_data: MenuItem[] = [
  { id: 1, title: "Início", link: "/", has_dropdown: false },
  {
    id: 2,
    title: "Serviços",
    link: "/service",
    has_dropdown: true,
    sub_menus: serviceSubMenus,
  },
  { id: 3, title: "Projetos", link: "/project", has_dropdown: false },
  { id: 4, title: "Processo", link: "/#processo", has_dropdown: false },
  { id: 5, title: "Sobre", link: "/about", has_dropdown: false },
  { id: 6, title: "Blog", link: "/blog", has_dropdown: false },
  { id: 7, title: "Contato", link: "/contact", has_dropdown: false },
];

export default mcsites_menu_data;



export interface MenuItem {
  id: number;
  title: string;
  link?: string;
  has_dropdown?: boolean;
  is_home_menu?: boolean;
  mega_menu?: boolean;
  demo?: string;
  img?: string;
  sub_menus?: MenuItem[];
}
export type ProjectStatus = "placeholder" | "real";

export type ProjectCategory =
  | "Site Institucional"
  | "Landing Page"
  | "Aplicação Web"
  | "UX/UI"
  | "SEO & Performance";

export type ProjectItem = {
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  overview: string[];
  services: string[];
  serviceSlugs?: string[];
  technologies: string[];
  challenge?: string;
  solution?: string;
  image: string;
  listThumbPrimary: string;
  listThumbSecondary: string;
  galleryImages: string[];
  websiteUrl?: string;
  status: ProjectStatus;
};

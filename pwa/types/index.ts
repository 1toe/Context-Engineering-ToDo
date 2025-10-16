export interface ContentSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  order: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

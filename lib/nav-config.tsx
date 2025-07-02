import { Home, type LucideIcon, Rss, Store } from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  key: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { title: 'Startseite', href: '/', key: 'home', icon: Home },
  { title: 'Aktuelles', href: '/blog', key: 'news', icon: Rss },
  { title: 'Über', href: '/about', key: 'about', icon: Store },
];
